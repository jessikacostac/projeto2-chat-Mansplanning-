//Acesso ao botao Sim
let btnSim = document.getElementById("btnSim").value;
let btnNao = document.getElementById("btnNao").value;
let resultado = [];


let imageArray = [
    '01-sim.png',
    '02-sim.png',
    '03-sim.png',
    '04-sim.png',
    '05-nao.png',
    '06-nao.png',
    '07-sim.png',
    '08-sim.png',
    '09-nao.png',
    '10-sim.png'
]

let i = 0;
// Aqui está colocando a imageArray[0] que é da pergunta-01:
document.getElementById('image').src = 'assets/img/' + imageArray[i];

// A partir do momento que clica:


//Guardando a resposta num array e direcionando para a proxima pagina.
let guardarSim = function(){
    if(btnSim === "true" || btnSim === "false"){
        let valor = resultado.push(btnSim);
        i++ // i = 1, então a imgArray[1] vai ser a pergunta-02
        document.querySelector('#image').src = 'assets/img/' + imageArray[i];
        console.log (valor);
    }
}


let guardarNao = function(){
    if(btnNao === "true" || btnNao === "false"){
        let valor = resultado.push(btnNao);
        i++ // i = 1, então a imgArray[1] vai ser a pergunta-02
        document.querySelector('#image').src = 'assets/img/' + imageArray[i];
        console.log (valor);
    }
}

console.log(resultado);


