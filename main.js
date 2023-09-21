// Select all buttons
let btns=document.querySelectorAll(".buttons button");

// Select all img
let imgs=document.querySelectorAll(".images img");

btns.forEach((btn) => {
    btn.addEventListener(('click'), function (e) {
        btns.forEach((btn) => {
            // Remove clicked btn from all
            btn.classList.remove("clicked");
            // Remove active class from all
            btn.classList.remove("active");
        });
        // Add clicked button to btn clicked
        e.target.classList.add("clicked");
        // Add Active class to class that clicked
        e.target.classList.add("active");

        FilterImg(e);
    });
});

function FilterImg (e) {
    imgs.forEach((img) => {
        // Remove shrink class from all images
        img.classList.remove("shrink-img");
        // Add Expand class to all images
        img.classList.add("expand-img");

        // Compare between image data and button data
        if(img.dataset.img!==e.target.dataset.filter) {
            // remove Expand class from the image
            img.classList.remove("expand-img");
            // Add Shrink class to image
            img.classList.add("shrink-img");
        }
    });
}
// Set all image in index 0
btns[0].addEventListener(("click"), function (e) {
    imgs.forEach((img) => {
        // Add expand class to all image 
        img.classList.add("expand-img");
        // Remove Shrink class from all image
        img.classList.remove("shrink-img");
    });
});


let overlayImage=document.querySelector(".overlay");
let closeBtn=document.querySelector(".close");
// Image overlay
imgs.forEach((img) => {
    img.addEventListener(('click'), function (e) {

        overlayImage.style.display="flex";
        let theimageOverlay=document.querySelector(".overlay img");

        theimageOverlay.src=img.src;

        closeBtn.style.display="block";
    });

    closeBtn.onclick=function () {
        overlayImage.style.display="none";
    };

    document.addEventListener("keydown", function (e) {
        if(e.keyCode==27) {
            overlayImage.style.display="none";
        }
    });

});


// TEXT HOVER EFFECTS
// Select the heading h2
let theHeading=document.querySelector(".heading h2");
// make loop on the heading letters
theHeading.innerHTML=theHeading.innerText.split("").map((letters, i) => `<span style="transition-delay:${i*100}ms; filter: hue-rotate(${i*50}deg); ">${letters}</span>`).join("");

