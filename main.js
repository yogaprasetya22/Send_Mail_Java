function send() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "jagres3211@gmail.com",
    Password: "yogaprasetya3021",
    To: "jagres3211@gmail.com",
    From: document.getElementById("email").value,
    Subject: "NAMA = " + document.querySelector("#name").value + "Mengirim anda pesan",
    Body: "PESAN = " + document.getElementById("message").value,
  }).then(function (message) {
    Swal.fire({
      title: document.getElementById("name").value,
      text: "Terima Kasih",
      icon: "success",
    });
  });
}
