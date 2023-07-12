const formCard = document.querySelector(".card");
const data = {};

formCard.addEventListener("submit", function (e) {
    e.preventDefault();
    data.password = document.querySelector(".input").value;
    data.isStatus = document.querySelector(".switch-input").checked;

    console.log(data);
});

