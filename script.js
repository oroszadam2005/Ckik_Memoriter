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
function ellenorzes(){
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

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})