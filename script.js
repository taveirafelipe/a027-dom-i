const frutas = ["laranja", "limão", "uva"];

let frutasHTML = [
  document.getElementById("fruta-1"),
  document.getElementById("fruta-2"),
  document.getElementById("fruta-3"),
  document.getElementById("fruta-4"),
];

function addFrutas(array1, array2) {
    for(let i in array1){
        array2[i].innerHTML = array1[i]
    }
}

function boleanoProcura(array, string){
    let i =0;
    for(let palavra of array){
        if(palavra === string){
            i++;
        }
    }
    if(i >= 1){
        return true;
    }else{
        return false;
    }
}

function imprimeValor(){
    if(boleanoProcura(frutas, document.getElementById("fruta").value)){
        alert("Esta fruta já está presente na lista, favor adicionar outra!")
        return
    }
    if(frutas.length < frutasHTML.length){
        frutas.push(document.getElementById("fruta").value)
        addFrutas(frutas, frutasHTML)
    } else {
        alert(`Quantidade de frutas excedida!`)
    }
}

addFrutas(frutas, frutasHTML)