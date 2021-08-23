const search = document.getElementById("search");
const form = document.getElementById("form");
const searchResult = document.querySelector(".results");
const line = document.querySelector("hr");
const apiURL =
  "https://pt.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchValue = search.value;
  if(searchValue === ''){
    alert("Insira um termo para ser pesquisado")
  }else{
    getResultado(searchValue);
  }
});

async function getResultado(searchVal) {
  const response = await fetch(apiURL + searchVal);
  const dados = await response.json();

  telaResultado(dados);
}

function telaResultado(dados) {
  line.style.display = "block";
  let output = "";
  dados.query.search.forEach((result) => {
    let resultURL = `https://pt.wikipedia.org/?curid=${result.pageid}`;
    output += `
        <div class="result">
        <a href="${resultURL}" target="_blank" class="h3 fw-bold"
          >${result.title}</a
        ><br />
        <a href="${resultURL}" target="_blank" class="fs-5 text-success"
          >${resultURL}</a
        >
        <p class="fs-5">${result.snippet}</p>
      </div>
        `;
    searchResult.innerHTML = output;
  });
}