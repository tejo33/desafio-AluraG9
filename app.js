let amigos=[];
let nombreL='';

function agregarNombreAmigo(){
     let elementoHTML =document.getElementById('amigo').value;
     if(elementoHTML!==''){
    
     
     for(let i=0 ;i< amigos.length; i++){
        if(elementoHTML==amigos[i]){
            alert(`'${elementoHTML}' ya`);           
            document.getElementById('amigo').value='';
            return;
        }
     }
     amigos.push(elementoHTML);    
     actualizarLista();
   
    }else{
        alert("Por favor, inserte un nombre.");
    }
}
function actualizarLista(){

    console.log('paso');
    let nombreListA=document.getElementById('listaAmigos');
    let nuevoNombre =document.createElement('li');
    nuevoNombre.textContent=amigos[amigos.length-1];
    nombreListA.appendChild(nuevoNombre);        
     document.getElementById('amigo').value='';    
    console.log('paso for'); 
}