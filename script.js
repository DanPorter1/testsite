const na = document.getElementById("name");
const com = document.getElementById("comment")
const button = document.getElementById("buttoncomment")
const out = document.getElementById("commentpost")

function post() {
    out.innerHTML += na.value
    out.innerHTML += "<br>";
    out.innerHTML += com.value;
    out.innerHTML += "<br><br><br>";
}

button.addEventListener("click", post);