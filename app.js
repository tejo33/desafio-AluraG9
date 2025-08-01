let amigos=[];
function agregarNombreAmigo(){
     let elementoHTML =document.getElementById('amigo').value;
     if(elementoHTML!==''){
    console.log(elementoHTML);
    amigos.push(elementoHTML);    
     document.getElementById('amigo').value='';

    }else{
        alert("Por favor, inserte un nombre.");
    }
   

}