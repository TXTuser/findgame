let map = document.getElementById('map')
let hints = document.getElementById('hints')
let pirate = document.getElementById('pirate')
let restart = document.getElementById('restart')
let steps = 0
let treasureX = Math.random() * 400 + 50
let treasureY = Math.random() * 400 + 50
console.log(treasureX, treasureY);

map.onclick = function(event) {
    steps++
    // if(dist<15) {
    //     hints.innerHTML = 'Победа'

    // } else {
    //     hints.innerHTML = 'COLD'
    // }

    let pirateX = event.offsetX - 25
    let pirateY = event.offsetY- 45 
    pirate.style.left = event.offsetX - 25 + "px"
    pirate.style.top = event.offsetY- 45 + "px"
    let deltaX = pirateX - treasureX
    let deltaY = pirateY - treasureY


    let dist = Math.sqrt(deltaX**2 + deltaY**2)
    console.log(dist);

    if(dist<15) {
        hints.innerHTML = 'Victory! You found the treasure in ' + steps + ' steps'
        map.style.pointerEvents = "none"
    } else if(dist<30) {
        hints.innerHTML = 'LAVA'
    } else if(dist<50) {
        hints.innerHTML = 'VERY HOT'
    } else if(dist<100) {
        hints.innerHTML = 'HOT HOT HOT'
    } else if(dist<150) {
        hints.innerHTML = 'HOT'
    } else if(dist<180) {
        hints.innerHTML = 'WARM'
    } else if(dist<220) {
        hints.innerHTML = 'COOL'
    } else if(dist<250) {
        hints.innerHTML = 'COLD'
    } else if(dist<300) {
        hints.innerHTML = 'ICE AGE'
    } else {
        hints.innerHTML = 'ABSOLUTE ZERO'
    }
}

restart.onclick = function(event) {
    treasureX = Math.random() * 400 + 50
    treasureY = Math.random() * 400 + 50

    let pirateX = event.offsetX - 25
    let pirateY = event.offsetY- 45 
    pirate.style.left = event.offsetX - 25 + "px"
    pirate.style.top = event.offsetY- 45 + "px"
    let deltaX = pirateX - treasureX
    let deltaY = pirateY - treasureY

    event.preventDefault();
    hints.innerHTML = "Good luck!"
    pirate.style.top = 5 + 'px'
    pirate.style.left = 60 + 'px'
    dist = Math.sqrt(deltaX**2 + deltaY**2)

    console.log(treasureX, treasureY);
}

