let livro = {
    titulo: "Casas Estranhas",
    autor: "Uketsu",
    tema: "Terror"
}

for (const chave in livro) {
    console.log(`${chave} - ${livro[chave]}`);
}