class Carreira{
    constructor(){
        this.area;
        this.linguagem;
        this.foco;
        this.arrayLinguagens = [];
    }

    TerminaArea(){
        document.querySelector("#section02").style.visibility="visible";
    }

    TerminaLinguagem(){
        document.getElementsByName("area")[0].disabled=true;
        document.getElementsByName("area")[1].disabled=true;
        document.querySelector("#section03").style.visibility="visible";
    }

    TerminaFoco(){
        document.getElementsByName("linguagem")[0].disabled=true;
        document.getElementsByName("linguagem")[1].disabled=true; 
        document.querySelector("#section04").style.visibility="visible";
    }

    FinalizaRadios(){
        document.getElementsByName("foco")[0].disabled=true;
        document.getElementsByName("foco")[1].disabled=true;
    }

    // método que seleciona a área que o usuário deseja seguir
    SelecionaArea(){
        if(document.getElementsByName("area")[0].checked==true){
            this.area = document.querySelector("#area01").textContent;
            document.querySelector("#questao02").innerHTML="Qual linguagem front-end você escolheria?";
            document.querySelector("#lng01").innerHTML="React";
            document.querySelector("#lng02").innerHTML="Vue";
        }
        else if(document.getElementsByName("area")[1].checked==true){
            this.area = document.querySelector("#area02").textContent;
            document.querySelector("#questao02").innerHTML="Qual linguagem back-end você escolheria?";
            document.querySelector("#lng01").innerHTML="Java";
            document.querySelector("#lng02").innerHTML="C#";
        }
        this.TerminaArea();
    }

    // método que seleciona a linguagem que o usuário gostaria de aprender
    SelecionaLinguagem(){
        if(document.getElementsByName("linguagem")[0].checked==true){
            this.linguagem = document.querySelector("#lng01").textContent;
        }
        else if(document.getElementsByName("linguagem")[1].checked==true){
            this.linguagem = document.querySelector("#lng02").textContent;
        }
        this.TerminaLinguagem();
    }

    // método que seleciona o foco da carreira do usuário
    SelecionaFoco(){
        if(document.getElementsByName("foco")[0].checked==true){
            this.foco = document.querySelector("#foco01").textContent;
        }
        else if(document.getElementsByName("foco")[1].checked==true){
            this.foco = document.querySelector("#foco02").textContent;
        }
        this.TerminaFoco();
    }

    LimpaCampos(){
        document.querySelector("#aprender").value = "";
    }

    // método que verifica se o input está vazio
    VerificaCampos(){
        if(document.querySelector("#aprender").value == ""){
            document.querySelector("small").innerHTML = "Preencha o campo!";
            return false;
        }
        else{
            document.querySelector("small").innerHTML = "";
            return true;
        }
    }

    // método que adiciona as linguagens à array
    AdicionaLinguagemNaArray(){
        this.arrayLinguagens.push(document.querySelector("#aprender").value);
    }  

    // método que retorna o objeto com os dados inicializados
    RecebeDados(){
        let carreira = {};
        carreira.area = this.area;
        carreira.linguagem = this.linguagem;
        carreira.foco = this.foco;
        carreira.arrayLinguagens = this.arrayLinguagens;

        return carreira;
    }  

    // método que exibe os dados do objeto na tela
    ExibeDados(carreira){
        document.querySelector("#resultado").style.visibility = "visible";
        document.querySelector("#resArea").innerHTML = carreira.area;
        document.querySelector("#resLinguagem").innerHTML = carreira.linguagem;
        document.querySelector("#resFoco").innerHTML = carreira.foco;
        document.querySelector("#resArea").innerHTML = carreira.area;
        
        let lista = document.querySelector("ul");

        // zerando a lista antes do for para que ela receba sempre a array atualizada
        lista.innerHTML = ""; 

        // adicionando os elementos da array à lista do HTML
        for(let i=0; i<this.arrayLinguagens.length; i++){            
            let linguagem =document.createElement("li");
            linguagem.innerHTML = this.arrayLinguagens[i];
            linguagem.style.color = "gold";
            lista.appendChild(linguagem);
        }
    }

    // método principal
    EnviaDados(){
        if(this.VerificaCampos()){
            this.FinalizaRadios();
            this.AdicionaLinguagemNaArray();
            let carreira = this.RecebeDados();
            this.ExibeDados(carreira);
            console.log(carreira);
        }
        this.LimpaCampos();
        document.querySelector("#aprender").focus();
    }

}

const carreira = new Carreira(); // instanciando a classe