const myAudio = document.getElementById("myAudio") // Audio객체 취득
const play = document.querySelector(".play")
const mute = document.querySelector(".muted")

play.addEventListener("click", () => {
    myAudio.pause(); // 일시 정지
    play.classList.add("active")
    mute.classList.add("active")
})
mute.addEventListener("click", () => {
    myAudio.play(); // 일시 정지
    play.classList.remove("active")
    mute.classList.remove("active")
})
