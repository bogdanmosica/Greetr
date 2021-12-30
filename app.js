var greeting = G$("Bogdan", "Mosica");

$('#login').click(function() {
    var loginGrt = G$("Bogdan", "Mosica");

    $('#logindiv').hide();
    loginGrt.setLanguage($('#lang').val()).HTMLGreeting('#greeting', true).log();
});