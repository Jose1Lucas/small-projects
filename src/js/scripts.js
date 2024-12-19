//Variáveis estáticas em cima, se for especifica fica dentro da função especifica.

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')


botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotão();

})

function esconderBotão() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

