const dragon = document.querySelector('img');

let originX = null;
let originY = null;
let offsetX = 0;
let offsetY = 0;
let dragStarted = false;

function onDragStart(event) {
    originX = event.clientX;
    originY = event.clientY;
    dragStarted = true;
    event.currentTarget.setPointerCapture(event.pointerId);
}

function onDragMove(event) {
    if (!dragStarted) {
        return;
    }
    event.preventDefault();
    const deltaX = event.clientX - originX;
    const deltaY = event.clientY - originY;
    const translateX = offsetX + deltaX;
    const translateY = offsetY + deltaY;
    event.currentTarget.style.transform = 'translate(' +
        translateX + 'px, ' + translateY + 'px)';
}

function onDragEnd(event) {
    dragStarted = false;
    offsetX += event.clientX - originX;
    offsetY += event.clientY - originY;
}

function onDragKey(event) {
    let coordenadas = dragon.getBoundingClientRect();

    let eixoX = coordenadas.x - 8;
    let eixoY = coordenadas.y - 8;

    switch (event.key) {
        case "ArrowUp":
            if((eixoY - 50) > 0){
                dragon.style.transform = 'translate(' +
                    eixoX + 'px, ' + (eixoY - 50) + 'px)';
            }else{
                dragon.style.transform = 'translate(' +
                    eixoX + 'px, ' + 0 + 'px)';
            }
            break;

        case "ArrowDown":
            dragon.style.transform = 'translate(' +
                eixoX + 'px, ' + (eixoY + 50) + 'px)';
            break;

        case "ArrowRight":
            dragon.style.transform = 'translate(' +
                (eixoX + 50) + 'px, ' + eixoY + 'px)';
            break;

        case "ArrowLeft":
            if((eixoX - 50) > 0){
                dragon.style.transform = 'translate(' +
                    (eixoX - 50) + 'px, ' + eixoY + 'px)';
            }else{
                dragon.style.transform = 'translate(' +
                    0 + 'px, ' + eixoY + 'px)';
            }
            break;
    }
}
dragon.addEventListener('pointerdown', onDragStart);
dragon.addEventListener('pointerup', onDragEnd);
dragon.addEventListener('pointermove', onDragMove);
document.addEventListener('keydown', onDragKey);