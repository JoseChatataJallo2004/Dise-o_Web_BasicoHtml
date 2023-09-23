let caja=document.getElementById("subir__arriba");
caja.addEventListener("click",function(){
    document.documentElement.scrollTop=0;
})

window.addEventListener("scroll",function(){
    if (document.documentElement.scrollTop > 0) {
        caja.style.display="flex"
    } else {
        caja.style.display="none"
    }
})
var x=0;
let y=0;
function Carrusel(){
    let imagenes=["../Imagenes/conocenos.jpg ","../Imagenes/conocenos02.jpg","../Imagenes/conocenos03.png","../Imagenes/conocenos01.jpg"]
    document.getElementsByClassName("fotoconocenos")[0].src=imagenes[y]
    let textos=["Somos Lideres ", "Mucha Experiencia" , "Los Mejores","Cocinamos con amor"];
    document.getElementsByClassName("descri")[0].innerHTML=textos[y]
    y++;
    if(y>=imagenes.length)y=0;
    x=setTimeout(Carrusel,1000);
}  
Carrusel(); 
function run(){
    Carrusel();

}
function pause(){ 
    clearTimeout(x);
}

function dentro1(){
    document.getElementById("local0").style.filter="grayscale(600%)";
}
function fuera1(){
    document.getElementById("local0").style.filter="grayscale(0%)";
}
function dentro2(){
    document.getElementById("local1").style.filter="grayscale(600%)";
}
function fuera2(){
    document.getElementById("local1").style.filter="grayscale(0%)";
}
function dentro3(){
    document.getElementById("local2").style.filter="grayscale(600%)";
}
function fuera3(){
    document.getElementById("local2").style.filter="grayscale(0%)";
}
function dentro4(){
    document.getElementById("local3").style.filter="grayscale(600%)";
}
function fuera4(){
    document.getElementById("local3").style.filter="grayscale(0%)";
}
function validar(){
    let aceptar=document.getElementById("aceptar").value;
    if(aceptar.checked==false){
        alert("Acepto Las Condiciones ");
    }
   else{
       alert("Datos enviados Correctamente")
    }
}


