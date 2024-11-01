var readline = require('readline');

//usado para ler o que o usuário está digitando na tela
var leitor = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

menu();

function menu() {
    leitor.question("Digite 1 para verificar seu nível ou digite 0 para sair: ", function (opcao) {
      
        if (opcao == 1) {
            leitor.question("Digite o nome do seu herói:  ", function (heroi) {
                leitor.question("Digite a experiencia do seu herói:  ", function (xp) {
                    verNivel(heroi,xp);
                    menu();
                });
            });
        } else {
            console.log("Muito obrigado, até mais!!");
            leitor.close();
        }
    });
}

//verificação do nível do herói baseado na sua experiência
function verNivel(nomeHeroi , qtdExperiencia) {
    let nivel = "";

    if (0 < qtdExperiencia && qtdExperiencia < 1000) {
        nivel = "Ferro";
    } else if (1001 < qtdExperiencia && qtdExperiencia < 2000) {
        nivel = "Bronze";""
    } else if (2001 < qtdExperiencia && qtdExperiencia < 5000) {
        nivel = "Prata";
    } else if (5001 < qtdExperiencia && qtdExperiencia < 7000) {
        nivel = "Ouro";
    } else if (7001 < qtdExperiencia && qtdExperiencia < 8000) {
        nivel = " Platina";
    } else if (8001 < qtdExperiencia && qtdExperiencia < 9000) {
        nivel = "Ascendente";
    } else if (9001 < qtdExperiencia && qtdExperiencia < 10000) {
        nivel = "Imortal";
    } else if (qtdExperiencia > 10001) {
        nivel = "Radiante";
    }
    else {
        nivel = "Indefinido";
    }

    console.log(`O Herói de nome ${nomeHeroi} está no nível ${nivel}`);
    console.log();
    console.log();
}

