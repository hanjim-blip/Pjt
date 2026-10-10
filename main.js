/* TOGGLE SHARE */
const shareBtn = document.getElementById("shareBtn");
const shareLinks = document.getElementById("shareLinks");

shareBtn.onclick = () => {
    window.open("https://apiguinee.org/4/96ad11d45f61aafbe2c97ffe3e52c8b0", "_blank")
};
/* UNDANGAN */
function joinWhatsAppGroup() {
    window.open("https://www.facebook.com/share/g/1PRhXvvvgF/");
}

function openFacebookPage() {
    window.open("https://www.facebook.com/share/g/1PRhXvvvgF/");
}
const video = document.getElementById("video");
const overlay = document.getElementById("videoOverlay");

let overlayClicked = false; 

// Overlay muncul di detik tertentu
video.addEventListener("timeupdate", () => {
    if (video.currentTime >= 1 && !overlayClicked) {
        overlay.classList.add("show");
    }
});

// Klik overlay
overlay.addEventListener("click", () => {
    overlayClicked = true;              
    overlay.style.display = "none";   
    overlay.classList.remove("show");

    // Aksi setelah klik
    window.open("https://apiguinee.org/4/96ad11d45f61aafbe2c97ffe3e52c8b0", "_blank");
});




