'use strict';

const porta = document.getElementById('image');
const tipo = document.getElementById('text');
const tela_text = document.getElementById('tela_texto')
let total = 0;
const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];


function trocaImagem() {
    if(total > 0) {
        if (tipo.textContent === 'Porta Fechada') {
            porta.src = './images/porta-aberta.png';
            tipo.textContent = 'Porta Aberta';
        } else {
            porta.src = './images/porta-fechada.png';
            tipo.textContent = 'Porta Fechada';
        }
    }else {
        porta.src = './images/porta-aberta.png';
        tipo.textContent = 'Porta Aberta';
    }
    total += 1;
    let timestamp = new Date();
    tela_text.textContent = 'Total: ' +total+ ' | Data da ultima alteração: ' + ((timestamp.getDate())
        + "/" + meses[timestamp.getMonth()] + "/"+ timestamp.getFullYear()) + " | Hora: " + timestamp.getHours()
        + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds();
    document.getElementById('tela_text').appendChild(tela_text);
}
porta.addEventListener('click', trocaImagem)