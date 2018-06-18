//1) criando um array para guardar as imagens
let imagens = [
    "01-sim.png",
    "02-sim.png",
    "03-sim.png",
    "04-sim.png",
    "05-sim.png",
    "06-sim.png",
    "07-sim.png",
    "08-sim.png",
    "09-sim.png",
    "10-sim.png",
];
console.log(imagens);


//2) Criando um contador 
let contador = 0;


//3) Acesso888888 ------  . concatena methodo --------  e + concatena string
document.getElementById("passarImg").src="./assets/img/" + imagens[contador];


//4) Function
function mudarImg (){
    contador++ // incrmentando cada clique
    document.querySelector("#imagens").src = "./assets/"+ imagens[contador]
}

//5)
document.querySelectorAll(".botao").forEach(function(current, idx, callback){
    current.addEventListener("click", onclick)
})





























// //Acesso ao botao Sim
// let btnSim = document.getElementById("btnSim").value;
// let btnNao = document.getElementById("btnNao").value;
// let resultado = [];


// //Guardando a resposta num array e direcionando para a proxima pagina.
// let guardarSim = function(){
//     if(btnSim === "true" || btnSim === "false"){
//         let valor = resultado.push(btnSim);
//         console.log (valor);
//     }
// }


// let guardarNao = function(){
//     if(btnNao === "true" || btnNao === "false"){
//         let valor = resultado.push(btnNao);
//         console.log (valor);
//     }
// }

// console.log(resultado);