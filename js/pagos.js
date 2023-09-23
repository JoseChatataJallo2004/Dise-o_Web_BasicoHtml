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


function validar(){
    let nombres= document.getElementById("nombre").value;
    let email=document.getElementById("email").value;
    let telefono=document.getElementById("telefono").value;
    let Direccion=document.getElementById("Direccion").value;
    let cantidad=document.getElementById("cantidad").value;
    let tarjeta=document.getElementById("tarjeta").value;
    let pedido=document.getElementById("pedido").value;
    let aceptar=document.getElementById("aceptar");
    let ENombre=/^[a-zA\s]+$/i;
    let Eemail=/^([a-z])+[@]([a-z])+[.][a-z]{2,63}$/i;
    let Etelefono=/^[0-9]{9}$/i;
    let Edireccion=/^[a-zA\s]+$/i;
    let Ecantidad=/^[0-9]{1,10}$/i;
    let Etarjeta=/^[a-zA\s]+$/i;
    let Epedido=/^[a-zA\s]+$/i;
   
    if(!ENombre.test(nombres)){  
       alert("Nombre no Valido"); return;
    }
    if(!Eemail.test(email)){ 
        alert("Correo no Valido");return;
    }
    if(!Etelefono.test(telefono)){ 
       alert("Telefono no Valido");return;
    }
    if(!Edireccion.test(Direccion)){ 
        alert ("Direccion no Valido");return;
    }
    if(!Etarjeta.test(tarjeta)){ 
        alert ("Tarjeta no Valido");return;
    }
    if(!Epedido.test(pedido)){ 
        alert ("Pedido no Valido");return;
    }
    if(!Ecantidad.test(cantidad)){ 
        alert ("Cantidad no Valido");return;
    }
   

    if(aceptar.checked==false){
        alert("Acepte las condiciones");
    }
    else{
        alert("Datos enviados correctamente");
    }
}