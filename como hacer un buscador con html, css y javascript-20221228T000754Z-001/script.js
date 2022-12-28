function showSearch() {
    let input = document.getElementById("input");
    input.classList.toggle("show");
}

let btn = document.getElementById("btn");
let click = false;

btn.addEventListener("click", () => {
    if (!click) {
        click = true;
        btn.innerHTML = `<img src="/img/icon_2.png">`;
    } else {
        click = false;
        btn.innerHTML = `<img src="/img/icon_1.png">`;
    }
});