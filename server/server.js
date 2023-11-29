console.log("v2.1");
const mysql = require('mysql');
const express = require('express');
const compression = require('compression');
const pidusage = require('pidusage');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 8080;
app.use(cors());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "versekdb"
});

let requestCount = 0;
let totalResponseTime = 0;
let avgResponseTime = 0;
let serverData = "Loading";

async() => {await update();};
async function update() {
  try {
    const start = Date.now();
    serverData = await fetchData();
    totalResponseTime += Date.now() - start;
    console.log('\nData updated successfully!');
  
  } catch (err) {
    console.error('Error in update function:', err);
  }
}
(async () => {
  setInterval(async () => {
    await update();
  }, 10000);
})();


setInterval(async () => {
  try {
    const [cpuUsage, scriptMemoryUsage] = await Promise.all([
      getUsage('cpu'),
      getUsage('memory')
    ]);
    process.stdout.write('\r'); 
    process.stdout.write('CPU Usage: ' + cpuUsage.toFixed(2) + '%'+' | Script Memory Usage: ' + formatBytes(scriptMemoryUsage)+' | Average Response Time: ' + avgResponseTime.toFixed(2));
  } catch (error) {
    console.error('Error during monitoring:', error);
  }
}, 1000);


app.use(compression());
app.get('/data', async (req, res) => {
  try {
    requestCount += 1;
    avgResponseTime = totalResponseTime / requestCount || 0;
    res.json(serverData);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/monitor', (_, res) => {
  const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Server Monitoring Dashboard</title><style>body{font-family:'Arial',sans-serif;margin:0;padding:0;background-color:#e57373;color:#ffffff;}.dashboard{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;}h1{color:#1976D2;}.widget{background-color:#ffffff;padding:20px;margin:20px;border-radius:8px;box-shadow:0 0 15px rgba(0,0,0,0.2);text-align:center;width:300px;}.metric-container{display:flex;flex-direction:column;align-items:center;margin-top:20px;}.metric{position:relative;text-align:center;width:80%;padding:20px;margin:15px 0;border-radius:12px;box-shadow:0 0 15px rgba(0,0,0,0.2);background-color:#1976D2;}.metric span{font-weight:bold;color:#ffffff;}#cpuUsage,#scriptMemoryUsage,#requestCount,#avgResponseTime{font-weight:bold;color:#ffffff;}}</style></head><body><div class="dashboard"><h1>Server Monitoring Dashboard</h1><div class="widget"><div class="metric-container"><div class="metric"><span>CPU Usage</span><div id="cpuUsage">Loading...</div></div><div class="metric"><span>Script Memory Usage</span><div id="scriptMemoryUsage">Loading...</div></div></div><div class="metric-container"><div class="metric"><span>Request Count</span><div id="requestCount">Loading...</div></div><div class="metric"><span>Average Response Time</span><div id="avgResponseTime">Loading...</div></div></div></div></div><script>setInterval(()=>{fetch('/monitor-data').then(response=>response.json()).then(data=>{document.getElementById('cpuUsage').innerText=data.cpuUsage;document.getElementById('scriptMemoryUsage').innerText=data.scriptMemoryUsage;document.getElementById('requestCount').innerText=data.requestCount;document.getElementById('avgResponseTime').innerText=data.avgResponseTime+"ms";}).catch(error=>console.error('Error fetching monitoring data:',error));},1000);</script></body></html>`;
  res.send(html);
});

app.get('/monitor-data', async (_, res) => {
  try {
    const [cpuUsage, scriptMemoryUsage] = await Promise.all([
      getUsage('cpu'),
      getUsage('memory')
    ]);

    res.json({
      cpuUsage: cpuUsage.toFixed(2) + '%',
      scriptMemoryUsage: formatBytes(scriptMemoryUsage),
      requestCount,
      avgResponseTime,
    });
  } catch (error) {
    console.error('Error fetching monitoring data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

function fetchData() {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM versek", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

async function getUsage(type) {
  try {
    const stats = await pidusage(process.pid);
    return type === 'cpu' ? stats.cpu : stats.memory;
  } catch (error) {
    console.error(`Error getting ${type} usage:`, error);
    return 0;
  }
}

function formatBytes(bytes) {
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i)) + ' ' + sizes[i];
}

app.use(express.json());
var codeforreg = "123456789";
app.post('/register', (req, res) => {
  const username = req.body.username;
  const userpassword = req.body.userpassword;
  const code = req.body.code;
  pool.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (selectErr, selectResult) => {
      if (selectErr) {
        res.send('Szerver hiba!');
      } else {
        if (selectResult.length > 0) {
          res.send('A felhasználó már létezik!!');
        } else {
          if (code == codeforreg) {
            pool.query(
              "INSERT INTO users (username, userpassword) VALUES (?, ?)",
              [username, userpassword],
              (insertErr, insertResult) => {
                if (insertErr) {
                  res.send('Szerver hiba!');
                } else {
                  res.send('Sikeres regisztráció!');
                }
              }
            );
          } else {
            res.send('Helytelen kód!');
          }
        }
      }
    }
  );
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('/public'));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
    pool.query(
      'SELECT * FROM users WHERE username = ? AND userpassword = ?',
      [username, password],
      (err, results) => {
        if (results.length > 0) {
          fs.readFile(__dirname + '/dashboard.html', 'utf8', (err, data) => {
            if (err) {
              console.error('Error reading dashboard.html:', err);
            } else {
              res.send(data);
            }
          });
        } else {
          res.send('Invalid login');
        }
      }
    );
});


app.post('/dbmgmt', (req, res) => {
  const { type, id } = req.body;
  switch (type) {
    case "delete":
      pool.query("DELETE FROM versek WHERE id = ?", [id], function (err, result) {
        if (err) {
          res.send("Hiba történt a művelet során.");
        } else {
          async() => {await update();};
          res.send("Sikeres művelet!");
        }
      });
      break;
    default:
      res.send("Érvénytelen művelettípus.");
      break;
  }
});