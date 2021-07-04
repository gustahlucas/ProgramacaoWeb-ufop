const script = document.getElementById('troca');
const image = document.getElementById('imagem')

function trocaImagem() {
    if(script.textContent === 'Trocar'){
        image.src='./img/triste.jpg';
        script.textContent = 'Destrocar';
    }else{
        image.src='./img/comemorando.jpg';
        script.textContent = "Trocar";
    }
}
script.addEventListener('click', trocaImagem);