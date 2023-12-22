const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const video = document.getElementById('video');
const videoContainer = document.querySelector('.video-container');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'ILOVEYOUSOOOMUCHHH BABYY KOOOO HIHIHI <3 <3 <3 SMILE NA IKAW BABYYYY';
    videoContainer.style.display = 'block';
    video.play(); // This triggers the video to play
    
    // Hide the buttons when "Yes" is clicked
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});
  
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
