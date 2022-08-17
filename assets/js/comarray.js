function meuEscopo4(){
    const passarData = document.querySelector('.data');
    console.log('função data');
    
    const data = new Date();
    let diaSemana = data.getDay();
    
    function getDiaSemanaText(diaSemana) {
        const diaSemanaTexto = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado']
        return diaSemanaTexto[diaSemana]
    }

    let mes = data.getMonth();
    function getMonthText(mes){
        const meses =['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
        return meses[mes];
    }
    function zeroAEsquerda(num){
         return num >= 10 ? num : `0${num}`
        }
    
    const mesCorreto = getMonthText(mes);
    const dataFinal = getDiaSemanaText(diaSemana);
    const dia =  zeroAEsquerda(data.getDate());
    const ano = (data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes()); 

   passarData.innerHTML =  `<p> ${dataFinal}, ${dia} de ${mesCorreto} de ${ano} ${hora}:${min} </p>`;

}

meuEscopo4();