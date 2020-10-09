$(function () {
    // Função do botão ""View Details"
    $('a[role="button"]').click(function () {
        // Apresenta os "pais" e filhos com o toggle a 500
        $(this).parent().parent().children('.popUp').toggle(500)
    });
})