let amigos=[];
let i=0
function agregarNombreAmigo(){
     let elementoHTML =document.getElementById('amigo').value;
     if(elementoHTML!==''){
    console.log(elementoHTML);
    amigos.push(elementoHTML);
    let nombreListA=document.getElementById('listaAmigos');
    let nuevoNombre =document.createElement('li');
    nuevoNombre.textContent=elementoHTML;
    nombreListA.appendChild(nuevoNombre);

    

     
    
        
     document.getElementById('amigo').value='';
     
     

    }else{
        alert("Por favor, inserte un nombre.");
    }
   

}