// Função
$(function () {
    // Função do botão
    $('.btn-lg').click(function () {
        // Evento "toggle" dos botões em 5/10 de segundos
        // ...no elemento pai do pai. 
        $(".btn-lg").parent().parent().toggle(5000);
        // Fecha e volta elemento (pai do pai na mesma velocidade)
        $(this).closest('.btn-lg').parent().parent().toggle(5000);
    });
});
