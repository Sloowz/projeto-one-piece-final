/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover 
a seleção dele 

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover 
a seleção dele */

/* const botao = document.getElementById('chopper'); document.getelementebyID é usado para pegar um elemento pelo ID do HTML, no caso está pegando o argumento "chopper" */

const botoes = document.querySelectorAll('.botao') //Importante colocar o ponto, pois ele espera receber um seletor. O QuerySelectorAll é melhor que o getElementByID

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => { 

        //Aqui está verificando se tem um botão selecionado, e se tiver, vai haver a remoção do botão clicado substituindo por outro botão

        desselecionarBotao();
        desselecionarPersonagem();


        botao.classList.add("selecionado"); 
        //Colocando uma Classe (selecionado) no botão que o usuário clicou

        

        personagens[indice].classList.add("selecionado");
         //Colocando um personagem como selecionado

       

    });
});


function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
} //Selecionar o Personagem e tirar a seleção do outro

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    //Selecionar o botão do personagem e tirar a seleção do outro

    botaoSelecionado.classList.remove("selecionado");
}

//botoes.addEventListener("click", () => {  
//});

 //MOSTRA OS PERSONAGENS CLICADOS (console.log(indice);)

/* NÃO É MUITO BOM USAR ESSE, POIS ELE SÓ VAI BUSCAR O PERSONAGEM QUE ESTÁ GUARDADO COM O NÚMERO, NESSE CASO SERIA O CHOPPER 
(console.log(personagens[0]);)*/