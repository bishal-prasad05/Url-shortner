const url = document.querySelector(".url");
const first_url = document.querySelector("#one");
const second_url = document.querySelector("#two");
const third_url = document.querySelector("#three");
const fourth_url = document.querySelector("#four");

async function check() {
  if (url.value == "") {
    alert("Fill the url first !!");
  } else {
    var response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${url.value}`
    );
    var data = await response.json();
    first_url.value = data.result.full_short_link2;
    second_url.value = data.result.full_short_link3;
    third_url.value = data.result.full_short_link;
    fourth_url.value = data.result.short_link2;
  }
}

function copy(number) {
  if (number == 1) {
    navigator.clipboard.writeText(first_url.value);
  } else if (number == 2) {
    navigator.clipboard.writeText(second_url.value);
  } else if (number == 3) {
    navigator.clipboard.writeText(third_url.value);
  } else if (number == 4) {
    navigator.clipboard.writeText(fourth_url.value);
  }
}

first_url.setAttribute("readonly", true);
second_url.setAttribute("readonly", true);
third_url.setAttribute("readonly", true);
fourth_url.setAttribute("readonly", true);
