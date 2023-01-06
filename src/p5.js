import { p5i } from 'p5i'

let x, y

function setup({ createCanvas, stroke, frameRate, width, height }) {
  createCanvas(800, 400)
  stroke(255)
  frameRate(30)
  x = width
  y = height
}

function draw({ background, line, height, width }) {
  background(0)
  x = x - 1
  y = y - 0.7
  if (x < 0 && y < 0) {
    x = width
    y = height
  }
  line(x, 0, x, height)
  line(0, y, width, y)
}

// Create a div container for canvas element
const canvasContainer = document.createElement('div')
canvasContainer.classList.add('canvas-container')

// Inject p5 in canvasContainer
p5i({ setup, draw }, canvasContainer)

// Append canvasContainer to the app
const app = document.getElementById('app')
app.appendChild(canvasContainer)
