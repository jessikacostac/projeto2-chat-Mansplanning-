//Acesso ao botao Sim
//let btnSim = document.getElementById("btnSim");
//let btnNao = document.getElementById("btnNao");
let resultado = [];

//Array para guardar img
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
let totalImagens = 9;//***** criamos um array para contar as imagens
let acertos = 0;
let guarda;
let cont = 1;

let respostasCorretas= new Array();

respostasCorretas[0]="sim";
respostasCorretas[1]="sim";
respostasCorretas[2]="sim";
respostasCorretas[3]="sim";
respostasCorretas[4]="nao";
respostasCorretas[5]="nao";
respostasCorretas[6]="sim";
respostasCorretas[7]="sim";
respostasCorretas[8]="nao";
respostasCorretas[9]="sim";



// A partir do momento que clica:
//Guardando a resposta num array e direcionando para a proxima pagina.
let resp = function(resposta){
    if(i < totalImagens){
        /////////VALIDAÇÂO////////////////////////////////////////////////////////////////////////////////////////////
        if(resposta == respostasCorretas[i]){
            guarda = "<p>"+cont+" Acertou</p>";
            acertos++;
        } else {
            guarda = "<p style='color:red;'>"+cont+" Errou!</p>";
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////////// 
        resultado.push(guarda);
        i++;
        document.querySelector('#image').src = 'assets/img/' + imageArray[i];
        cont++;
        console.log(guarda);
               
    } else if(i = totalImagens){
        /////////VALIDAÇÂO////////////////////////////////////////////////////////////////////////////////////////////
        if(resposta == respostasCorretas[i] ){
            guarda = "<p>"+cont+" Acertou</p>";
            acertos++;
        } else {
            guarda = "<p style='color:red;'>"+cont+" Errou!</p>";
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        resultado.push(guarda);
        document.write(resultado);
        // window.location.replace("resultado.html");
        console.log(guarda);
        cont++;
    }
}

//Guardando a resposta num array e direcionando para a proxima pagina.


console.log(resultado);

