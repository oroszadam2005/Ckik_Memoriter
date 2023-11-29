var server_data;
function fetchData() {
    return fetch('http://localhost:8080/data')
        .then(response => response.json())
        .then(jsonData => {
            server_data = jsonData;
            console.log(server_data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
var data;
function fetchAndUseData() {
    return fetchData().then(() => {
        data = server_data;
    });
}
var kivalasztott;var szavakki = [];var rnds = [];var szavak = [];
function Beolvasas(){   
    fetchAndUseData().then(() => {
        kivalasztott= data[Math.floor(Math.random() * data.length)];
        kiszed(kivalasztott);
    });
} 
function sort(arr,arr2, n)
{
    var i, j, temp,swap;
    for (i = 0; i < n - 1; i++) 
    {
        swap = false;
        for (j = 0; j < n - i - 1; j++) 
        {
            if (arr[j] > arr[j + 1]) 
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                temp = arr2[j];
                arr2[j] = arr2[j + 1];
                arr2[j + 1] = temp;
                swap = true;
            }
        }
        if (swap == false)break;
    }
}
function kiszed(kivalasztott){
    console.log(kivalasztott);
    szavakki = [];rnds = [];szavak = [];
    var db = document.getElementById("db").value;
    document.getElementById("ebtn").disabled = false;
    document.getElementById("db").disabled = true;
    document.getElementById("vers").innerText = kivalasztott;
    szavak = JSON.parse(JSON.stringify(kivalasztott.Szoveg).replace(/(?:\\[rn]|[\r\n]+)+/g,  function (x) {
        return " "+x+" "})).split(' ');
    for (let index = 0; index < db; index++) {
        var rnd = Math.floor(Math.random() * szavak.length)
        while(szavak[rnd].length <= 3 || rnds.includes(rnd) || szavak[rnd][0] == '\r'){
            rnd = Math.floor(Math.random() * szavak.length)
        }
        rnds.push(rnd);
        szavakki.push(szavak[rnd].toLowerCase().replace(',','').replace('.','').replace(':','').replace('?',''));
    }
    sort(rnds,szavakki,db);
    for (let index = 0; index < db; index++) {
        szavak[rnds[index]] = "<input type=text placeholder="+(index+1)+" id="+index+"></input>";     
    }
    document.getElementById("vers").innerHTML = szavak.join(' ').toString();
}
function Ellenorzes(){
    document.getElementById("ebtn").disabled = true;
    document.getElementById("db").disabled = false;
    var db = document.getElementById("db").value;var talalat = 0;
    for (let index = 0; index < db; index++) {
        var input = document.getElementById(index);
        if(input.value == szavakki[index]){talalat++;input.style="  border-color: lime;";
        }else if(szavakki.includes(input.value)){input.style="  border-color: orange;";
        }else{input.style="  border-color: red;";}
    }
    document.getElementById("elabel").innerText = talalat+" / "+db;
}

var regGomb = document.getElementById('regisztral');
var regfeln = document.getElementById('regfelnev')
var regfelnbool = false;
regfeln.addEventListener('input', function() {
    
    if (regfeln.value.length>=6) {
       regfeln.style.border = '1px solid Lime';
       regfelnbool = true;
       regfeln.style.transition = 'border 0.5s'
    }
    else{
        regfeln.style.border = '';
        regfeln.style.transition = 'border 0.5s'
    }
    if (kodbool == true && regjelszbool == true && regfelnbool == true) {
        regGomb.disabled = false;
    }

  });

var regjelsz = document.getElementById('regjelsz')
var regjelszbool = false;
regjelsz.addEventListener('input', function() {
    
    if (regjelsz.value.length>=6) {
        regjelsz.style.border = '1px solid Lime';
       regjelszbool = true;
       regjelsz.style.transition = 'border 0.5s'
    }
    else{
        regjelsz.style.transition = 'border 0.5s'
        regjelsz.style.border = '';
    }
    if (kodbool == true && regjelszbool == true && regfelnbool == true) {
        regGomb.disabled = false;
    }
  });

var kod = document.getElementById('kod')
var kodbool = false;
kod.addEventListener('input', function() {
    
    if (kod.value.length>=1) {
        kod.style.border = '1px solid Lime';
        kodbool = true;
        kod.style.transition = 'border 0.5s'
    }
    else{
        kod.style.transition = 'border 0.5s'
        kod.style.border = '';
    }
    if (kodbool == true && regjelszbool == true && regfelnbool == true) {
        regGomb.disabled = false;
    }
});

var login = document.getElementById('login');

var logfelh = document.getElementById('logfelh')
var logfelhbool = false;
logfelh.addEventListener('input', function() {
    
    if (logfelh.value.length>=6) {
        logfelh.style.border = '1px solid Lime';
        logfelhbool = true;
        logfelh.style.transition = 'border 0.5s'
    }
    else{
        logfelh.style.transition = 'border 0.5s'
        logfelh.style.border = '';
    }
    if (logfelhbool == true && logjelszbool == true) {
        logGomb.disabled = false;
    }
});

var logjelsz = document.getElementById('logjelsz')
var logjelszbool = false;
logjelsz.addEventListener('input', function() {
    
    if (logjelsz.value.length>=6) {
        logjelsz.style.border = '1px solid Lime';
        logjelszbool = true;
        logjelsz.style.transition = 'border 0.5s'
    }
    else{
        logjelsz.style.transition = 'border 0.5s'
        logjelsz.style.border = '';
    }
    if (logfelhbool == true && logjelszbool == true) {
        login.disabled = false;
    }
});

function fregister(){
    const name = document.getElementById("regfelnev").value;
    const password = document.getElementById("regjelsz").value;
    const code = document.getElementById("kod").value;
    fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "username": name, "userpassword": password, "code": code })
    })
    .then(response => response.text())
    .then(response => alert(response));
}
function flogin(){
    const username = document.getElementById("logfelh").value;
    const password = document.getElementById("logjelsz").value;
    fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&password=${password}`,
      })
    .then(response => response.text())
    .then(data => {
        if (data == 'Invalid login') {
        alert('Helytelen felhasználónév vagy jelszó!');
        } else {
            document.body.innerHTML = data;
            loadtable();

        }
    })
    .catch(error => console.error('Error:', error));
}

function loadtable(){
    var table = document.getElementById("data");
    table.innerHTML = "";
    fetchAndUseData().then(() => {
        for (let index = 0; index < data.length; index++) {
            table.innerHTML += "<tr><td>"+(data[index].id)+"</td><td>"+data[index].Kolto+"</td><td>"+data[index].Cim+"</td><td>"+data[index].Ev+"</td><td><button type='button' class='button' onclick='elonezet("+(index)+")'>Előnézet</button><button type='button' class='button' id='btn"+(data[index].id)+"'onclick='torles("+(data[index].id)+")'>Törlés</button></td></tr>";
        }
    });
}

function elonezet(index){
    alert(data[index].Szoveg);
}

var del = [];
function torles(id){
    var btn = document.getElementById("btn"+id);
    if (!del.includes(id)) {
        btn.innerText = "Megerősítés";
        del.push(id);
        torlesmegerosites(id);
    }else{
        fetch('http://localhost:8080/dbmgmt', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `type=delete&id=${id}`,
          }).then(response => response.text())
            .then(res => {
                if(res == "Sikeres művelet!"){
                    setTimeout(() => {
                        loadtable();
                    }, 1000);
                    del = [];
                }else{
                    alert(res);
                }    
            });

    }
}
function torlesmegerosites(id){
    var btn = document.getElementById("btn"+id);
    setTimeout(function (){
        del = del.filter(x => x != id);
        btn.innerText = "Törlés";
    },2000)
}


function newdata(id){
    fetch('http://localhost:8080/dbmgmt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `type=delete&id=${id}`,
        }).then(response => response.text())
        .then(res => {
            if(res == "Sikeres művelet!"){
                setTimeout(() => {
                    loadtable();
                }, 1000);
                del = [];
            }else{
                alert(res);
            }    
        });
}