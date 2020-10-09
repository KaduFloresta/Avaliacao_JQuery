// Função
$(function () {
    camposPagina(true)
    // Função onde os campos ficam desabilitados (parâmetros "disabled")
    function camposPagina(param) {
        $('.form-control[id!=firstName], .custom-select, .custom-control-input').attr('disabled', param)
    }
    // Função onde o Input do nome muda o comportamento dos outros campos
    $("#firstName").change(function () {
        // Se o valor tem tamanho maior que zero...
        if ($(this).val().length > 0) {
            // ...tornam os campos habilitados (parâmetro falso)
            camposPagina(false)
        }
        // Caso contrário...
        else {
            // ...tornam os campos deabilitados (parâmetro verdadeiro)
            camposPagina(true)
        }
    });
});
