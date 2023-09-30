function sendMail(event) {
    event.preventDefault(); // Prevent the form from submitting

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_1wdavij";
    const templateID = "template_ilgxzkf";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!!");
        })
        .catch(err => console.log(err));
}

  
