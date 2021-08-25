async function onSend(event) {
    event.preventDefault();
    const input = document.querySelector('#name-input');
    const name = input.value;
    const time = new Date();
    const hour =
      time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
    const message = {
      time: hour,
      name: name,
    };
  
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    };
    await fetch('/nome/', fetchOptions);
  }
  
  let form = document.createElement('form');
  form.id = 'send';
  form.textContent = 'Digite seu nome:';
  
  let inputText = document.createElement('input');
  inputText.setAttribute('type', 'text');
  inputText.id = 'name-input';
  
  let inputSubmit = document.createElement('input');
  inputSubmit.setAttribute('type', 'submit');
  inputSubmit.setAttribute('value', 'Enviar');
  
  form.appendChild(inputText);
  form.appendChild(inputSubmit);
  
  let hr = document.createElement('hr');
  
  body = document.querySelector('body');
  body.appendChild(form);
  body.appendChild(hr);
  
  const nameForm = document.querySelector('#send');
  nameForm.addEventListener('submit', onSend);
  