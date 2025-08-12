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
function sortearAmigo(){

    if(amigos.length>1){
        let n= amigos.length;
        console.log(n);
        let numeroSorteado = Math.floor(Math.random() * n) + 1;
        document.getElementById('amigo').value='';
        alert(`eñ sorteado es '${amigos[numeroSorteado]}`);
         document.getElementById('listaAmigos').value='';
         let nombreSortedo=document.getElementById('listaAmigos');
         nombreSortedo.innerHTML='eñ sorteado es '+ amigos[numeroSorteado];
         
    


    }else{
        alert('Deve haber mas de 1 amigo');
    }
}