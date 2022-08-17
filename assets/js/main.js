    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const btnEnviar = document.getElementById("btnEnviar")   

  
    
    btnEnviar.addEventListener('click', (event) =>{
        resultado.innerText = ""
        event.preventDefault();  
        const peso = (document.getElementById('peso').value);
        const altura = (document.getElementById('altura').value);
 
        const imc = (peso/Math.pow((altura/100),2)).toFixed(2);     

        let mensagem = document.createElement("h2")
        let pMensagem = document.createElement("p")
        let bolinhaCor = document.createElement("div")
        let img = document.createElement("img")

       
        if (imc < 18.5) {
            mensagem.innerText = "Abaixo do Peso";
            pMensagem.innerText = "Menos do que 18,5"
            mensagem.classList.add("abaixoDoPeso")
            bolinhaCor.classList.add("bolinha")
            bolinhaCor.id = "abaixoDoPeso"
            img.src = './assets/img/azul.png'

        }
        else if (imc >= 18.5 && imc <= 24.9){
            mensagem.innerText = 'Peso Normal';
            pMensagem.innerText = "Entre 18,5 e 24,9"
            mensagem.classList.add("PesoNormal")
            bolinhaCor.classList.add("bolinha")
            bolinhaCor.id = "PesoNormal"
            img.src = './assets/img/verde.png'
        }     
        else if (imc >= 25 &&  imc <= 29.9){
            mensagem.innerText = 'Sobrepeso';
            pMensagem.innerText = "Entre 25 e 29,9"
            mensagem.classList.add("Sobrepeso")
            bolinhaCor.classList.add("bolinha")
            bolinhaCor.id = "Sobrepeso"
            img.src = './assets/img/amarelo.png'
        }
        else if (imc >= 30 && imc <=  34.9){
            mensagem.innerText = 'Obesidade Grau 1';
            pMensagem.innerText = "Entre 30 e 34,9"
            mensagem.classList.add("obesidade1")
            bolinhaCor.classList.add("bolinha")
            bolinhaCor.id = "obesidade1"
            img.src = './assets/img/laranja.png'
        }
        else if (imc >= 35 && imc <=  39.9){
            mensagem.innerText = 'Obesidade Grau 2';
            pMensagem.innerText = "Entre 35 e 39,9"
            mensagem.classList.add("obesidade2")
            bolinhaCor.classList.add("bolinha")
            bolinhaCor.id = "obesidade2"
            img.src = './assets/img/laranjaescuro.png'
        }
        else if (imc >= 40 ){
            mensagem.innerText = 'Obesidade Grau 3';
            pMensagem.innerText = "Maior que 40"
            mensagem.classList.add("obesidade3")
            bolinhaCor.classList.add("bolinha")
            bolinhaCor.id = "obesidade3"
            img.src = './assets/img/vermelho.png'       
        }    
        
        bolinhaCor.append(img)
        const divContainer = document.createElement("div")
        divContainer.append( mensagem, pMensagem)
        resultado.append(bolinhaCor,divContainer)
    } );








// const formCalcularIMC = document.getElementById('form');



