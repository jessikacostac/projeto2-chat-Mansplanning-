//Acesso ao botao Sim e Não
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
    //'11-face-feliz.png'
];

let i = 0;
let totalImagens = imageArray.length;//***** criamos um array para contar as imagens-- **substituir por .length


// Aqui está colocando a imageArray[0] que é da pergunta-01:
//document.getElementById('image').src = 'assets/img/' + imageArray[i];--**nao precisa
// A partir do momento que clica:


//Guardando a resposta num array e direcionando para a proxima img.
let guardarSim = function(){
    if(i <=totalImagens){
        
        let valor = resultado.push(btnSim);
        i++;
        //i; i <=totalImagens; i++
         // i = 1, então a imgArray[1] vai ser a pergunta-02
        document.querySelector('#image').src = 'assets/img/' + imageArray[i];
        console.log (resultado);
    }
    else{
       // window.location.replace("resultado.html");
       document.write(resultado);
    }
}

let guardarNao = function(){
    if(i <totalImagens){
        
        let valor = resultado.push(btnNao);
        i++
        //i; i <=totalImagens; i++
         // i = 1, então a imgArray[1] vai ser a pergunta-02
        document.querySelector('#image').src = 'assets/img/' + imageArray[i];
        console.log (resultado);
    }
    else{
       // window.location.replace("resultado.html");
    document.write(resultado);
    }
}

//console.log(resultado);


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

//console.log(respostasCorretas);




//console.log(resultado);


