const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const uhmBtn = document.querySelector(".uhm-btn");
const nyaBtn = document.querySelector(".nya-btn");

uhmBtn.addEventListener("click", () => {
  question.innerHTML = "YIPEEEEE!!!";
  gif.src =
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2R4aGtoNHU0Njk0NTBuNjVqZ3Mzcjd4aG4xN2ZzNzNmeWlrZzNiayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lck9f0L8jPjRtkigYy/giphy.webp";
});

nyaBtn.addEventListener("mouseover", () => {
  const nyaBtnRect = nyaBtn.getBoundingClientRect();
  const maxX = window.innerWidth - nyaBtnRect.width;
  const maxY = window.innerHeight - nyaBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  nyaBtn.style.left = randomX + "px";
  nyaBtn.style.top = randomY + "px";
});