const experience = [
    {title: "HTML & CSS", years: 2},
    {title: "JavaScript", years: 1},
    {title: "Angular", years: 0.5}
]

function displayExperience() {
    const list = document.getElementById("exp-list");
    list.innerHTML = "";
    experience.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.title} - ${item.years} years`;
        list.appendChild(li);
    });
}
displayExperience();

const nav = document.querySelector("#nav");
const show = document.querySelector("#show");
const hide = document.querySelector("#hide");

show.addEventListener("click", () => {
    nav.classList.add("visible");
});

hide.addEventListener("click", () => {
    nav.classList.remove("visible");
});