// Função
$(function () {
    // Desabilitando os campos
    camposFormulario(true);
    // Função onde os campos ficam desabilitados (parâmetros "disabled")
    function camposFormulario(param) {
        // Desabilita todos os campos diferente (!=) do campo "Primeiro nome"
        $('.form-control[id!=firstName]').attr('disabled', param);
        $('.custom-select').attr('disabled', param);
        $('.custom-control-input').attr('disabled', param);
    }
    // Função onde o Input do nome muda o comportamento dos outros campos
    $("#firstName").change(function () {
        // Se o valor tem tamanho maior que zero...
        if ($(this).val().length > 0) {
            // ...tornam os campos habilitados (parâmetro falso)
            camposFormulario(false);
        }
        // Caso contrário...
        else {
            // ...tornam os campos deabilitados (parâmetro verdadeiro)
            camposFormulario(true);
        }
    });
});

    // Desabilitar Elemento
    // $('#id').attr('disabled', 'disabled');
    // Habilitar Elemento
    // $('#id').removeAttr('disabled');


