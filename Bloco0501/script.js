const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

document.getElementById('paragraph').innerText = 'Descrição'


const substitute = document.getElementsByTagName("h4");
for (let index = 0; index < substitute.length; index += 1) {
    substitute[index].style.color = "orange";
}