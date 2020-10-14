$(function () {
    // EXERCÍCIO #1 - A
    // Começa com opacidade 0.5 em 1seg
    $(".col-lg-4").fadeTo(1000, 0.5);

    // EXERCÍCIO #1 - B
    // Esconde o corpo da página (tag main)
    $("main").hide();

    // Função de Mudança (change) no input dentro da tag form
    $("form > input").change(function () {
        // Se o valor digitado for = mostrar...
        if ($(this).val() == "mostrar") {
            // ...o corpo da página será exibido.
            $("main").show();
        }
        // Caso contrário...
        else {
            // ...o corpo da página ficará escondido.
            $("main").hide();
        }
    });

    // EXERCÍCIO #1 - A Continuação.
    // Função do mouse (entrada) passa o elemento THIS p/ 1 em 1seg
    $(".col-lg-4").mouseenter(function () {
        $(this).fadeTo(1000, 1);
    });

    // Função do mouse (saída) passa o elemento THIS p/ 0.5 em 1seg
    $(".col-lg-4").mouseleave(function () {
        $(this).fadeTo(1000, 0.5);
    });
});