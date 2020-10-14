// Função
$(function () {
    // Animação do Elemento com eventos do mouse
    // ...para a id "elementoEsquerda"
    $("#elementoEsquerda").mouseenter(function () {
        // Quando o mouse entra no elemento em questão
        // ...ele se desloca para a direita em 50px.
        $(this).animate({
            left: '+=50px'
        });
    });
    $("#elementoEsquerda").mouseleave(function () {
        // Quando o mouse sai do elemento em questão
        // ...ele se desloca para a esquerda em 50px.
        // (Posição Original)
        $(this).animate({
            left: '-=50px'
        });
    });

    // Animação do Elemento com eventos do mouse
    // ...para a id "elementoDireita"
    $("#elementoDireita").mouseenter(function () {// Quando o mouse sai do elemento em questão
        // Quando o mouse entra no elemento em questão
        // ...ele se desloca para a esquerda em 50px.
        $(this).animate({
            right: '+=50px'
        });
    });
    $("#elementoDireita").mouseleave(function () {
        // Quando o mouse sai do elemento em questão
        // ...ele se desloca para a direita em 50px.
        // (Posição Original)
        $(this).animate({
            right: '-=50px'
        });
    });
}); 