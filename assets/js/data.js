
function meuEscopo3(){
    const passarData = document.querySelector('.data');
    console.log('função data');
    
    const data = new Date();
    let diaSemana = data.getDay();

    function getDiaSemanaText() {
        let diaSemanaTexto;
        switch (diaSemana){ 
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'sexta-feira';
            return diaSemanaTexto;     
        case 6:
            diaSemanaTexto = 'sabado';
            return diaSemanaTexto;    
        }

    }
    let mes = data.getMonth();
        function getMonthText(){
        let monthText;
        switch (mes){
            case 0:
                monthText = 'janeiro';
                return monthText;
            case 1:
                monthText = 'fevereiro';
                return monthText;
            case 2:
                monthText = 'março';
                return monthText;
            case 3:
                monthText = 'abril';
                return monthText;
            case 4:
                monthText = 'maio';
                return monthText;
            case 5:
                monthText = 'junho';
                return monthText;
            case 6:
                monthText = 'julho';
                return monthText;
            case 7:
                monthText = 'agosto';
                return monthText;
            case 8:
                monthText = 'setembro';
                return monthText;
            case 9:
                monthText = 'outubro';
                return monthText;
            case 10:
                monthText = 'novembro';
                return monthText;
            case 11:
                monthText = 'dezembro';
                return monthText;   
        }
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

meuEscopo3();