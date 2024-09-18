emailjs.init({
  publicKey: "_MqUWuTicMdn2F0iR",
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_f3dukpo", "template_fm34264", this).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);

        let successMessage = document.createElement("p");
        successMessage.textContent = "Votre message a été envoyé avec succès !";
        successMessage.style.color = "green";

        let form = document.getElementById("contact-form");
        form.parentNode.insertBefore(successMessage, form);

        setTimeout(function () {
          window.location.reload();
        }, 800);
      },
      function (error) {
        console.log("FAILED...", error);

        let errorMessage = document.createElement("p");
        errorMessage.textContent =
          "Une erreur est survenue. Veuillez réessayer.";
        errorMessage.style.color = "red";

        let form = document.getElementById("contact-form");
        form.parentNode.insertBefore(errorMessage, form);
      }
    );
  });
