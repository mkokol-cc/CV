$( document ).ready(function() {
    $(document).on('click', '#send-btn', function () {
        console.log('tocaste ele boton enviar');
        alert($('#message').val() +" - "+ $('#contact-mail').val());
        $.ajax({
            url: 'contact.php',
            type: 'POST',
            data: "mail=" + $('#contact-mail').val() + "&mensaje=" + $('#message').val(),
            success: function (res) {
                console.log('se corrio el PHP');
                console.log(res);
            }
        });
    }) 
});