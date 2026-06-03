const prompt = require('prompt-sync')()

/* 1. Crie um objeto representando um produto com as propriedades: nome, preço,
categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
propriedades e seus valores. Em seguida, adicione uma nova propriedade
desconto ao objeto e exiba o preço final calculado. */

/* let produto = {
    nome: "Camiseta do Grêmio edição colecionador 2002",
    preco: 1500,
    categoria: "Vestuário",
    quantidadeEstoque: 1
}

for (const key in produto) {
    console.log(`${key} - ${produto[key]}`);
}

produto.desconto = 12;

produto.preco = Number((produto.preco * (1 - (produto.desconto / 100))).toFixed(2));

console.table(`Preço com ${produto.desconto}% de desconto: R$${produto.preco}`); */

/* ---------------------------------------------------------------------------------- */

/* 2. Crie dois objetos representando personagens de um jogo, cada um com as
propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
cada personagem lado a lado e determine qual deles tem maior poder total
(soma de vida + ataque + defesa). */

/* const char1 = {
    nome: "Mega Charizard Y",
    vida: 78,
    ataque: 159,
    defesa: 115,
}

const char2 = {
    nome: "Rayquaza",
    vida: 105,
    ataque: 150,
    defesa: 90,
}

let totalChar1 = 0;
let totalChar2 = 0;

for (const key in char1) {
    console.log(key);
    console.log(`${char1[key]} - ${char2[key]}`);
    if (typeof(char1[key]) == "number") {
        totalChar1 += char1[key];
        totalChar2 += char2[key];
    }
}

console.log(`Total ${totalChar1} x ${totalChar2}`);

if (totalChar1 > totalChar2) {
    console.log(`${char1.nome} tem a maior soma de status`);
} else if (totalChar2 > totalChar1) {
    console.log(`${char2.nome} tem a maior soma de status`);
} else {
    console.log("EMPATE");
} */

/* ---------------------------------------------------------------------------------- */

/* 3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de
experiência. Use for...in para listar todos os dados. Com base nos anos de
experiência, calcule e exiba o bônus anual:
até 2 anos = 5% do salário,
de 3 a 5 anos = 10%,
acima de 5 anos = 15%. */

/* const funcionario = {
    nome: "João Pedro",
    cargo: "Desenvolvedor Back-end",
    salario: 3456.96,
    anosExperiencia: 6,
}

for (const key in funcionario) {
    console.log(`${key} - ${funcionario[key]}`);
}

if (funcionario.anosExperiencia > 5) {
    console.log(`Bônus de 15% - R$${(funcionario.salario * 1.15).toFixed(2)}`);
} else if (funcionario.anosExperiencia > 3) {
    console.log(`Bônus de 10% - R$${(funcionario.salario * 1.10).toFixed(2)}`);
} else if (funcionario.anosExperiencia >= 0) {
    console.log(`Bônus de 5% - R$${(funcionario.salario * 1.05).toFixed(2)}`);
} */

/* ---------------------------------------------------------------------------------- */

/* 4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
listar o inventário completo. Permita que o usuário informe um item para usar:
reduza a quantidade em 1 ou exiba "item esgotado" se for zero. */

/* const inventario = {
    rareCandy: 1,
    revive: 2,
    potion: 24,
    fullRestore: 4,
    tm050: 2,
    hm002: 1
}

let usarItem = "";
let itemUsado = "";

do {
    console.log("----------------------");
    for (const key in inventario) {
        console.log(`${key}: ${inventario[key]}`);
    }
    console.log("----------------------");
    usarItem = prompt("Deseja usar um item? ");
    if (usarItem.toLowerCase() === "sim" || usarItem.toLowerCase() === "s") {
        for (const key in inventario) {
            console.log(` - ${key}`);
        }
        itemUsado = prompt("Qual item? ");
        if (inventario[itemUsado] <= 0) {
            console.log(`[ERRO] VOCÊ NÃO TEM MAIS ESSE ITEM NO INVENTÁRIO`);
        } else {
            console.log(`${itemUsado} consumido`);
            inventario[itemUsado] --;
        }
        console.log("----------------------");
    }
} while (usarItem.toLowerCase() === "sim" || usarItem.toLowerCase() === "s"); */

/* ---------------------------------------------------------------------------------- */

/* 5. Crie um objeto representando o orçamento mensal de uma pessoa, com
categorias como alimentação, transporte, lazer e saúde, cada uma com valor
planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês. */



/* ---------------------------------------------------------------------------------- */

/* 6. Crie um array de objetos representando músicas, cada uma com título, artista e
duração em segundos. Use for...of para exibir cada música no formato "Artista —
Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
mesmo formato. */

/* ---------------------------------------------------------------------------------- */

/* 7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
forEach para calcular e exibir separadamente a média dos aprovados e a média
dos reprovados. */

/* ---------------------------------------------------------------------------------- */

/* 8. Crie um array de objetos representando produtos com nome, preço e quantidade.
Use forEach para calcular o valor total em estoque de cada produto (preço ×
quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
estoque. */

/* ---------------------------------------------------------------------------------- */

/* 9. Crie um array de objetos onde cada objeto representa um contato com nome,
telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
uma mensagem de "não encontrado". */

/* ---------------------------------------------------------------------------------- */

/* 10. Implemente uma pilha usando um array para simular o histórico de um
navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
(peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
cada operação. */

/* ---------------------------------------------------------------------------------- */

/* 11. Implemente uma fila usando um array para simular o atendimento de uma
clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
(dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
exibindo o estado da fila a cada operação. */

/* ---------------------------------------------------------------------------------- */

/* 12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós.
Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e
exiba a lista antes e depois. */

/* ---------------------------------------------------------------------------------- */