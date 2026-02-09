const frontpage = document.getElementById("frontpage");
const secondpage = document.getElementById("secondpage");
const cardContainer = document.getElementById("card-container");

async function loadData() {
    const response = await fetch("../data/data.json");
    return await response.json();
}

async function showSecondPage() {
    frontpage.style.display = "none";
    secondpage.style.display = "block";

    const data = await loadData();
    cardContainer.innerHTML = "";

    data.forEach(member => {
        cardContainer.innerHTML += `
            <div class="card">
                <img src="${member.img}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.Work}</p>
            </div>
        `;
    });
}
function showmore(){
    const audio = new Audio('../assets/sound.mp3');
    audio.play();
}