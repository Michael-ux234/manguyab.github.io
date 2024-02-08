const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

const audio = new Audio('bunny.mp3');

yesBtn.addEventListener("click", () =>{
    question.innerHTML = "Yiee love you!!<3<3<3";
    gif.src = "https://i.pinimg.com/originals/56/55/37/565537cf632818d34f1ac15d2bddb0f8.gif";
    
    audio.play();

    audio.style.display = "block";
});
    
noBtn.addEventListener('click', () => {
    // Create a video element
    const video = document.createElement('video');
    video.src = 'coma.mp4'; // Replace 'your_video.mp4' with your MP4 file path
    video.autoplay = true; // Autoplay the video
    video.controls = true; // Show video controls
    video.style.width = '100%'; // Set video width to fill container
    video.style.height = 'auto'; // Set video height to auto-adjust

    // Append the video element to the wrapper
    wrapper.appendChild(video);
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + "px";
    noBtn.style.top = j + "px";
});