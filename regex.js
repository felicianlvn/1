const namaField = document.querySelector("[name=nama]");

namaField.addEventListener("keyup", (event) => {
    if(!namaField.validity.valid){
        console.error("nama invalid");
        document.getElementById("invalid-nama").style.display = "block";
    } else {
         console.info("nama  valid");
        document.getElementById("invalid-nama").style.display = "none";
    }

});

const emailField = document.querySelector("[name=email]");

emailField.addEventListener("keyup", (event) => {
    if(!emailField.validity.valid){
        console.error("nama invalid");
        document.getElementById("invalid-email").style.display = "block";
    } else {
         console.info("nama  valid");
        document.getElementById("invalid-email").style.display = "none";
    }

});

const nohpField = document.querySelector("[name=nohp]");

nohpField.addEventListener("keyup", (event) => {
    if(!nohpField.validity.valid){
        console.error("nohp invalid");
        document.getElementById("invalid-nohp").style.display = "block";
    } else {
         console.info("nohp  valid");
        document.getElementById("invalid-nohp").style.display = "none";
    }

});

const tbField = document.querySelector("[name=tb]");

tbField.addEventListener("keyup", (event) => {
    if(!tbField.validity.valid){
        console.error("tb invalid");
        document.getElementById("invalid-tb").style.display = "block";
    } else {
         console.info("tb  valid");
        document.getElementById("invalid-tb").style.display = "none";
    }

});

const ttlField = document.querySelector("[name=ttl]");

ttlField.addEventListener("keyup", (event) => {
    if(!ttlField.validity.valid){
        console.error("ttl invalid");
        document.getElementById("invalid-ttl").style.display = "block";
    } else {
         console.info("ttl  valid");
        document.getElementById("invalid-ttl").style.display = "none";
    }

});
