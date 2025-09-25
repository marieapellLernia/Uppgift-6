// js code

const input = document.querySelector("#input");
const button = document.querySelector("#button");

//Add eventlistner to button
button.addEventListener("click", convertToUpper);

function convertToUpper() {
    const text = input.value;
    const result = text.toUpperCase();
    console.log(result);
}
