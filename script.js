let front = document.querySelector("#front");
let back = document.querySelector("#back");
let l01 = document.querySelector("#l01");
let l02 = document.querySelector("#l02");
let especialista = document.querySelector("#especialista");
let fullstack = document.querySelector("#fullstack");
let section02 = document.querySelector("#section02");
let section03 = document.querySelector("#section03");
let section04 = document.querySelector("#section04");
let questao02 = document.querySelector("#questao02");
let linguagem01 = document.querySelector("#linguagem01");
let linguagem02 = document.querySelector("#linguagem02");
let resultado = document.querySelector("#resultado");
let aprender = document.querySelector("#aprender");
let linguagensParaAprender = document.querySelector("#linguagensParaAprender");
let error = document.querySelector("small");

function Front(){
    section02.style.visibility = "visible";
    questao02.innerText = "Qual linguagem front-end você escolheria?";
    linguagem01.innerText = "React";  
    linguagem02.innerText = "Vue";
}

function Back(){
    section02.style.visibility = "visible";
    questao02.innerText = "Qual linguagem back-end você escolheria?";        
    linguagem01.innerText = "Java";
    linguagem02.innerText = "C#";
}

function Linguagem(){
    front.disabled = true;
    back.disabled = true;
    section03.style.visibility = "visible";
}

function Foco(){
    l01.disabled = true;
    l02.disabled = true;
    especialista.disabled = true;
    fullstack.disabled = true;
    section04.style.visibility = "visible";
    resultado.style.visibility = "visible";

    if(front.checked==true){
        document.querySelector("#resArea").innerText = "Front-end";
        if(l01.checked==true){
            document.querySelector("#resLinguagem").innerText = "React";
        }
        else if(l02.checked==true){
            document.querySelector("#resLinguagem").innerText = "Vue";
        }
    }
    else if(back.checked==true){
        document.querySelector("#resArea").innerText = "Back-end";
        if(l01.checked==true){
            document.querySelector("#resLinguagem").innerText = "Java";
        }
        else if(l02.checked==true){
            document.querySelector("#resLinguagem").innerText = "C#";
        }
    }

    if(especialista.checked==true){
        document.querySelector("#resFoco").innerText = "Se especializar na área";
    }
    else if(fullstack.checked==true){
        document.querySelector("#resFoco").innerText = "Se tornar fullstack";
    }
    document.querySelector("#resArea").style.color = "gold";
    document.querySelector("#resLinguagem").style.color = "gold";
    document.querySelector("#resFoco").style.color = "gold";
}

function Adicionar(){
    if(aprender.value==""){
        error.innerText= "Preencha o campo!"
    }
    else{
        let novaLinguagem = document.createElement("li");
        novaLinguagem.innerText = aprender.value;
        linguagensParaAprender.appendChild(novaLinguagem);
        novaLinguagem.style.color = "gold"
        aprender.value = "";
        error.innerText= "";
    }
}
