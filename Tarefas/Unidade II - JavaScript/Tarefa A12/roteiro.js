
let images = document.querySelectorAll('img');
countImage(images);
changeImage(images);

function changeImage(images){
 
  let url = 'https://lumiere-a.akamaihd.net/v1/images/1920x1080_logo_d3a5a5f4.png';
  
  for (let i = 0; i < images.length; i++) {
    let width = images[i].width;
    let height = images[i].height;
    images[i].src = url;
    images[i].width = width;
    images[i].height = height;
  }
}
function countImage(images){
  let imageCount = document.createElement('h1');
  imageCount.textContent = 'Número de imagens na página: ' + images.length;
  imageCount.id = 'image-count';
  imageCount.style.color = 'orange';
  imageCount.style.fontSize = '4em';
  imageCount.style.backgroundColor = 'black';
  
  const body = document.querySelector('body');
  body.insertBefore(imageCount, body.firstChild);  
}

