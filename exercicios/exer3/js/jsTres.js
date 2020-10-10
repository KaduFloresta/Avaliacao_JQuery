$(function () {
    // Função para todos botões de role "button" e de valor "View Details"
    $('a[role="button"]').click(function () {
        // Surge o filho de clase "popUp" com um slideToggle a 300 (3/10 de segundo)
        $(this.parentElement.parentElement).children('.popUp').slideToggle(300);
    });
});
