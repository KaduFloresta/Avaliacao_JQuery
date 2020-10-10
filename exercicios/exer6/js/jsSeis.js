// Função
$(function () {
    // Definir a Animação (Direita e Esquerda)
    // ...para a classe
    $(".bg-dark").mouseenter(function () {
        //Animação para a direita += a 50 pixels
        $(this).animate({
            right: '+=50px'
        });
    });

    $(".bg-dark").mouseleave(function () {
        $(this).animate({
            right: '-=50px'
        });
    });
}); 