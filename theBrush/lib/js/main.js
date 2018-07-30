function myFunction() {
    document.getElementById('rengar').src="assets/rengar.png";
}

function onClick() {
    document.getElementsByClassName("main_container").addEventListener("click", myFunction)
}

onClick();

