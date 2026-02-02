function showMessage() {
    alert("Thanks for visiting my portfolio!");
}

function send() {
    let name = document.getElementById("name").value;

    if(name === "") {
        alert("Please enter your name");
    } else {
        alert("Hello " + name + ", message sent!");
    }
}