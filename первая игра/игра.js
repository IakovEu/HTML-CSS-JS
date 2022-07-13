const plain = document.getElementById("plain");
const towers = document.getElementById("towers");

document.addEventListener("keydown", function () {
    jump();
});

function jump() {
    if (plain.classList.add != "jump") {
        plain.classList.add("jump");
    }
    setTimeout(function () {
            plain.classList.remove("jump");
        },
        300
    );
}

let isAlive = setInterval(function () {
    let PlainTop = parseInt(window.getComputedStyle(plain).getPropertyValue("top"));
    let TowersLeft = parseInt(window.getComputedStyle(towers).getPropertyValue("left"));
    if (TowersLeft < 75 && TowersLeft > 0 && PlainTop >= 300) {
        alert("BOOM 09.11!!!");
    }
}, 10);