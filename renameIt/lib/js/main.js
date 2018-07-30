function myFunction() {
    document.getElementById('item_name').innerHTML = 'Frostfang';
    document.getElementById('item_img').src="assets/Frostfang_item.png";
}

function onClick() {
    document.getElementById("item_name").addEventListener("click", myFunction)
}

onClick();

