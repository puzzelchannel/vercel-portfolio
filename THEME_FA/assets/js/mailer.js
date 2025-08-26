

function contact_us() {
    $(document).ready(function () {
        $("#submit-btn").click(function () {
            var fullName = $("#full-name").val();
            var email = $("#email").val();
            var subject = $("#subject").val();
            var message = $("#message").val();

            if (fullName == "" || email == "" || subject == "" || message == "") {
                alert("لطفاً تمام فیلدها را پر کنید.");
                return;
            }
            
            $.ajax({
                type: "POST",
                url: "../assets/php/mailer.php",
                data: {
                    full_name: fullName,
                    email: email,
                    subject: subject,
                    message: message
                },
                success: function (response) {
                    $(".messenger-box-contact__msg").css("display", "block").html(response);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert(textStatus, errorThrown);
                }
            });
        });
    });
}