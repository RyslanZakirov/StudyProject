document.addEventListener("DOMContentLoaded", ()=>{

    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")

    canvas.width = document.body.offsetWidth
    canvas.height = document.body.offsetHeight

    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, 20, 0, Math.PI * 2)
    ctx.fillStyle = "red"
    ctx.fill()

    ctx.beginPath()
    ctx.rect(100, 100, 400, 400)
    ctx.strokeStyle = "orange"
    ctx.stroke()

    console.log(ctx)

    let coords = {
        x: 0,
        y: 0
    }

    const gameLoop = ()=>{

        ctx.beginPath()
        ctx.arc(canvas.width / 2 + coords.x, canvas.height / 2 + coords.y, 30, 0 , Math.PI * 2)
        ctx.stroke()

        coords.x++
        coords.y++

        requestAnimationFrame(gameLoop)

    }

    gameLoop()

})