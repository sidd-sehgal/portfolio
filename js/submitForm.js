var form = document.getElementById('contact-form');

var loader = document.getElementById('contact-loader');
loader.style.display = "none";
var successMsg = document.getElementById('success-msg');
successMsg.style.display = "none";
var nameInput = document.getElementById('contact-form-name');
var email = document.getElementById('contact-form-email');
var phone = document.getElementById('contact-form-phone');
var msg = document.getElementById('contact-form-msg');
// Adds a listener for the "submit" event.
form.addEventListener('submit', function (e) {


    
    loader.style.display = "block";
    
    onSubmit({
        "name": nameInput.value,
        "email": email.value,
        "phone": phone.value,
        "msg": msg.value
    })
    e.preventDefault();

});

function onSubmit(data) {
    var url = "https://api.apispreadsheets.com/data/aLXE6yWoraF825oZ/"
    let body = {
        "data": data
    }
    fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
    }).then(res => {
        if (res.status === 201) {
            // SUCCESS
            loader.style.display = "none";
            successMsg.style.display = "block";
            nameInput.value = ""
            email.value = ""
            phone.value = ""
            msg.value = ""
        }
        else {
            // ERROR
        }
    })
}
