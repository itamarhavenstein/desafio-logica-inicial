var readline = require('readline');

//usado para ler o que o usuário está digitando na tela
var leitor = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

//Inicio
menu();

//interação com o usuário
function menu()
{
    leitor.question("Digite 1 para verificar seu nível ou digite 0 para sair: ", function (opcao) {
        index = opcao;
        if (opcao == 1) {
            leitor.question("Digite a quantidade de vitórias que vc tem:  ", function (vitorias) {
                leitor.question("Digite a quantidade de derrotas que vc tem:  ", function (derotas) {
                    calculadoraPartidasRankeadas(vitorias,derotas);
                    menu();                   
                });
            });
        } else {
            console.log("Muito obrigado, até mais!!");
            leitor.close();
        }
    });  
}


//Funções
function calculadoraPartidasRankeadas(vitorias, derotas) {
    
    let saldo = saldoVitorias(vitorias, derotas);
    
    let nivel = classificarNivel(saldo);
    
    console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);
    console.log()
}

function saldoVitorias(qtdVitorias, qtdDerotas){
    return qtdVitorias - qtdDerotas;
}

function classificarNivel(saldo) {
    if(saldo <= 10){
        return "Ferro";
    }else if(11 <= saldo && saldo <= 20){
        return"Bronze";
    }else if(21 <= saldo && saldo <= 50){
        return "Prata";
    }else if(51 <= saldo && saldo <= 80){
        return "Ouro";
    }else if(81 <= saldo && saldo <= 90){
        return "Diamante";
    }else if(91 <= saldo && saldo <= 100){
        return "Lendário";
    }else if(saldo >= 101){
        return "Imortal";
    }else {
        return "Indefinido";
    }
}