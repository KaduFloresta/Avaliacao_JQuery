$(function () {
    // Função do botão usando o "click"
    $('a[role="button"]').click(function () {
        // O toggle intercala através da função, a barra de navegação (tag nav)
        // Entre TOP (topo) e BOTTOM (rodapé) da página.
        $('nav').toggleClass('fixed-top').toggleClass('fixed-bottom')
    });
});