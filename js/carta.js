const time=document.getElementById('time');
const date =document.getElementById('date');
const monthNames=["Enero" , "Febreo","Marzo",
"Abril","Mayo" , "Junio", "Julio" , "Agosto" , "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const interval =setInterval(()=>{
    const local=new Date();
    let day =local.getDate(),
    month=local.getMonth(),
    year =local.getFullYear();

    time.innerHTML=local.toLocaleTimeString();
    date.innerHTML=`${day} ${monthNames[month]}${year}`;


}, 1000);

function efecto(){
    document.getElementById("filtro").style.filter= "contrast(500%)";
}
function efectosalida(){
    document.getElementById("filtro").style.filter="contrast(100%)";
}

let t=0;
function Carrusel(){
    let colores=["red" ,"blue", "green", "brown",  "orange","purple"];
    document.getElementsByClassName("caru02")[0].style.color=colores[t];
    t++;
    if(t>=6)t=0;
    setTimeout(Carrusel,1000);
}
Carrusel();
let o=0;
function tele(){
    let colores=["red" , "green",  "orange"];
    document.getElementsByClassName("caru03")[0].style.color=colores[o];
    o++;
    if(o>=3)o=0;
    setTimeout(tele,1000);
}
tele();
let w=0;
function twi(){
    let colores=["blue", "brown",  "purple"];
    document.getElementsByClassName("caru04")[0].style.color=colores[w];
    w++;
    if(w>=3)w=0;
    setTimeout(twi,1000);
}
twi();