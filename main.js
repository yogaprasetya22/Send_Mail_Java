const form = document.querySelector('form');

function send() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "jagres3211@gmail.com",
    Password: "yogaprasetya3021",
    To: "jagres3211@gmail.com",
    From: document.getElementById("email").value,
    Subject: document.querySelector("#name").value + " mengirim anda pesan",
    Body: document.getElementById("message").value,
  }).then(
    (response) => form.reset(),
      Swal.fire({
        title: document.getElementById("name").value,
        text: "Terima Kasih",
        icon: "success",
      })
  );
}
