document.getElementById("play-video-btn").addEventListener("click", function() {
    const videoContainer = document.getElementById("video-container");
    const video = document.getElementById("about-video");

    // Toggle video visibility
    if (videoContainer.style.display === "none") {
        videoContainer.style.display = "block";
        video.play();
        this.style.display = "none"; // Hide the button after click
    }
});
