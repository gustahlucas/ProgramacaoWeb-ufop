const search = document.getElementById('search');

const preencher = (significado) =>{
    const div = document.createElement('div');
    div.setAttribute("class", "word");
    
    const p = document.createElement('p');
    p.textContent = significado.meanings;

    div.appendChild(p); 

}
const searchWord = async() => {

    const word = document.getElementById('word').value; 
    console.log(word);
    if(word.value === '') return;

    const url = `https://significado.herokuapp.com/meanings/${word}`; 

   
    const dados = await fetch(url); 
    const significado = await dados.json(); 
    if (significado.hasOwnProperty('erro')){
        alert("Erro")
    }else{
        preencher(significado); 
    }
    
}

search.addEventListener('click', searchWord);
