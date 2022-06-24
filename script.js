const mario = document.querySelector(".super-mario")
const pipe = document.querySelector(".pipe-game")

const jump = () => {
    mario.classList.add("jump-mario")

    setTimeout(() => {
        mario.classList.remove("jump-mario")
    }, 500)
}

const loopGame = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const marioPosition = + window
        .getComputedStyle(mario)
        .bottom.replace("px", "")

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`

        mario.src = "https://startse-uploader.s3.us-east-2.amazonaws.com/prod/squads/lesson/62acc2f05d26d25221947b63/mario-game-over.png?v=c802d4b6-f6e1-4852-9ad2-afee129a04ce"
        mario.style.width = "75px"  
        mario.style.marginLeft = "45px"

        clearInterval(loopGame)
    }

}, 10)

document.addEventListener("keydown", jump)