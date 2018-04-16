//Acesso ao botao Sim
let btnSim = document.getElementById("btnSim").value;
let btnNao = document.getElementById("btnNao").value;
let resultado = [];


//Guardando a resposta num array e direcionando para a proxima pagina.
let guardarSim = function(){
    if(btnSim === "true" || btnSim === "false"){
        let valor = resultado.push(btnSim);
        console.log (valor);
    }
}


let guardarNao = function(){
    if(btnNao === "true" || btnNao === "false"){
        let valor = resultado.push(btnNao);
        console.log (valor);
    }
}

console.log(resultado);