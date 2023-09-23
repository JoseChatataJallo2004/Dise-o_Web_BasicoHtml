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


}, 100);

function efecto(){
    document.getElementById("filtro").style.filter= "contrast(500%)";
}
function efectosalida(){
    document.getElementById("filtro").style.filter="contrast(100%)";
}
let G=0;
function Carrusel(){
    let colores=["red" ,"blue", "green", "brown",  "orange","purple"];
    document.getElementsByClassName("titulo")[0].style.color=colores[G];
    G++;
    if(G>=6)G=0;
    setTimeout(Carrusel,1000);
}
Carrusel();