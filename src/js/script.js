// objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua.

// passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema.
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 - pegar no JS o elemento HTML corresponde ao body.
const body = document.querySelector("body");

const imagemBotaoAlterarTema = document.querySelector(".imagem-botao");

// passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema.
botaoAlterarTema.addEventListener("click", () => {
     // objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol.

    // passo 6 - verificar se a classe body já tem a classe modo-escuro.
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroAtivo) {
        // passo 7 - remover a classe do modo-escuro do body.
        body.classList.remove("modo-escuro");
    } else {
        // passo 4 - adicionar a classe modo-escuro no body.
        body.classList.add("modo-escuro");

        // passo 5 - trocar a imagem do botão de alterar tema pra lua.
        imagemBotaoAlterarTema.setAttribute("src", "src/images/moon.png");
    }        
})




