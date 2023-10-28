const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
var b = -1
var lose = 0
const div = document.querySelector('div')
//manipulacja canvasem
canvas.width = innerWidth
canvas.height = innerHeight / 2
//klasy
class Player {
	constructor(x, y, w, h, color) {
		this.x = x
		this.y = y
		this.h = h
		this.w = w
		this.color = color
	}
	draw() {
		c.beginPath()
		c.fillStyle = this.color
		c.fillRect(this.x, this.y, this.w, this.h)
	}
	up() {
		if (b = 1) {
			if (this.y > 0) {
				this.y += -10
		
			}
		}
	}
	down() {
		if (this.y < canvas.height + -this.h) {
			this.y += 10
		}
		
	}
	
}
class Przeszkoda {
	constructor(x, y, w, h, color) {
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		this.color = color
	}
	draw() {
		c.beginPath()
		c.fillStyle = this.color
		c.fillRect(this.x, this.y, this.w, this.h)
	}
	update() {
		this.x = this.x + -1
		
	}
	//kolizja z końcem mapy
	endcolission() {
		if (this.x == 0) {
			this.x = canvas.width - 10
			this.y = canvas.height + Math.floor(Math.random() * -400)
		}
	}
	// kolizja z graczem
	collision() {
		var l = 0
		var dist = Math.hypot(player.x - this.x , player.y - this.y)
		if(dist > 0 && dist < 20){
			player.x = -canvas.width
			if(confirm('Przegrales, czy chcesz grac dalej?')) {
				alert('Odswiez strone zeby zagrac ponownie!')
			}else {
				clearInterval(myVar)
				lose += 1
			}
		}
	}
}

const player = new Player(canvas.width / 2 , canvas.height / 2, 20, 30, 'black')
function animate() {
	window.requestAnimationFrame(animate)
	if(lose == 0){
		c.clearRect(0, 0, canvas.width, canvas.height)
		player.draw()	
		przeszkoda1.draw()
		przeszkoda2.draw()
		przeszkoda3.draw()
		przeszkoda4.draw()
		przeszkoda5.draw()
	}else if(lose == 1){
		c.beginPath()
		c.fillStyle = 'black'
		c.fillRect(0, 0, canvas.width, canvas.height)
		div.style.backgroundColor = 'black'
		c.fillStyle = 'white'
		c.font = '200px arial'
		c.textAlign = 'center'
		c.fillText('YOU LOST', canvas.width / 2, 200)
	
	}
}

function downtrue(k) {
	if (k = 1) {
		b += 2
	}
}
function uptrue(o) {
	if (o = 1){
		b += 1
	}
}	
	
const przeszkoda1 = new Przeszkoda(canvas.width - 10, canvas.height + Math.floor(Math.random() * -350), 20, 20, 'red')
const przeszkoda2 = new Przeszkoda(canvas.width - 30, canvas.height + Math.floor(Math.random() * -350), 20, 20, 'red')
const przeszkoda3 = new Przeszkoda(canvas.width - 50, canvas.height + Math.floor(Math.random() * -350), 20, 20, 'red')
const przeszkoda4 = new Przeszkoda(canvas.width - 70, canvas.height + Math.floor(Math.random() * -350), 30, 30, 'red')
const przeszkoda5 = new Przeszkoda(canvas.width - 90, canvas.height + Math.floor(Math.random() * -350), 20, 20, 'red')

myVar = setInterval(() => {	
przeszkoda1.draw()
przeszkoda1.update()
przeszkoda2.draw()
przeszkoda2.update()
przeszkoda3.draw()
przeszkoda3.update()
przeszkoda4.draw()
przeszkoda4.update()
przeszkoda5.draw()
przeszkoda5.update()
przeszkoda1.endcolission()
przeszkoda2.endcolission()
przeszkoda3.endcolission()
przeszkoda4.endcolission()
przeszkoda5.endcolission()
przeszkoda1.collision()
przeszkoda2.collision()
przeszkoda3.collision()
przeszkoda4.collision()	
przeszkoda5.collision()
}, 10)

window.addEventListener('keypress',() => {
	downtrue(1)
	player.up()
})
window.addEventListener('wheel', () => {
	uptrue(1)
	player.down()
})

animate()
player.draw()
