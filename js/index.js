const fades = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
    fades.forEach((e) => {
        e.getBoundingClientRect().top < window.innerHeight - 100 && e.classList.add("show");
    });
});
const footer = document.querySelector("#footer"),
    currentYear = new Date().getFullYear();
(footer.innerText = `© ${currentYear} D'Luxxe Manufacturing Corp. All Rights Reserved.`),
    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });














    const images = [
    "./assets/facialSets/page1.jpg",
     "./assets/facialSets/page2.jpg",
     "./assets/facialSets/page3.jpg",
     "./assets/facialSets/page4.jpg",
     "./assets/facialSets/page5.jpg",
     "./assets/facialSets/page6.jpg",
     "./assets/facialSets/page7.jpg",
     "./assets/facialSets/page8.jpg",
     "./assets/facialSets/page9.jpg",
     "./assets/facialSets/page10.jpg",
     "./assets/facialSets/page11.jpg",
     "./assets/facialSets/page12.jpg",
     "./assets/facialSets/page13.jpg",
     "./assets/facialSets/page14.jpg",
     "./assets/facialSets/page15.jpg",
     "./assets/facialSets/page16.jpg",
     "./assets/facialSets/page17.jpg",
     "./assets/facialSets/page18.jpg",
     "./assets/facialSets/page19.jpg",
     "./assets/facialSets/page20.jpg",
     "./assets/facialSets/page21.jpg",
    
];

const mainImage = document.getElementById("mainImage");
const thumbnails = document.getElementById("thumbnails");

let currentIndex = 0;

// Create thumbnails
images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;

    if(index === 0){
        img.classList.add("active");
    }

    img.addEventListener("click", () => {
        currentIndex = index;
        updateGallery();
    });

    thumbnails.appendChild(img);
});

function updateGallery(){
    mainImage.src = images[currentIndex];

    document.querySelectorAll(".thumbnails img").forEach((img, index) => {
        img.classList.toggle("active", index === currentIndex);
    });
}

document.getElementById("next").addEventListener("click", () => {
    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    updateGallery();
});

document.getElementById("prev").addEventListener("click", () => {
    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    updateGallery();
});







