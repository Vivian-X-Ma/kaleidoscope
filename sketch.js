let symmetry = 6;
let angle = 360 / symmetry;
let inc = 0;
let slider;
let clearButton;
let saveButton;

function setup() {
  createCanvas(450, 450);
  angleMode(DEGREES);
  background(75);
  colorMode(HSB, 255, 255, 255);
  saveButton = createButton("Save");
  saveButton.mousePressed(saveKaleidoscope);
  clearButton = createButton("Clear");
  clearButton.mousePressed(clearCanvas);
  slider = createSlider(1, 20, 10, 0.05);
}

function saveKaleidoscope() {
  save("kaleidoscope.png");  
}

function clearCanvas(){
 background(75); 
}

function draw() {
  translate(width / 2, height / 2);
  if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
      if(mouseIsPressed) {
        let hue = noise(inc) * 255;
        inc++;
        stroke(hue, 225, 225, 100);
        for(let i = 0; i < symmetry; i++) {
          rotate(angle); 
          let sw = slider.value();
          strokeWeight(sw);
          line(mx, my, pmx, pmy);
          push();
          scale(1, -1);
          line(mx, my, pmx, pmy);
          pop();
    }
  }
}
}