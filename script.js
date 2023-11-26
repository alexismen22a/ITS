// script.js
document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("result").textContent = "YES";
    document.getElementById("result").style.color = "green";
    document.getElementById("yesSound").play();
});

document.getElementById("noButton").addEventListener("click", function() {
    document.getElementById("result").textContent = "NO";
    document.getElementById("result").style.color = "red";
    document.getElementById("noSound").play();
});
