const passarData = document.querySelector('.data');
const data = new Date();
const opcoes = new Intl.DateTimeFormat("pt-BR" , {
    timeStyle: "short",
    dateStyle: "full"
  });
// passarData.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
passarData.innerHTML = (opcoes.format(Date.now()));