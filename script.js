document.addEventListener("DOMContentLoaded", ()=>{

    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")

    canvas.width = document.body.offsetWidth
    canvas.height = document.body.offsetHeight

    console.log(ctx)

})