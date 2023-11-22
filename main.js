function setup(){
canvas = createCanvas(640,420)
canvas.center()
objectDetector = ml5.objectDetector('cocossd',modelLoaded)
document.getElementById("status").innerHTML = "status:detecting object"

}
img = ""

status = ""

function modelLoaded(){

    console.log("Model is Loaded")
    status = true
    objectDetector.detect(img, gotResult);
}

function preload() {
    img = loadImage("dog_cat.jpg")

}

function draw() {

    image(img,0,0,640,420)
    noFill()
    stroke("red")
    rect(40,60,350,300)
    rect(300,60,300,290)

}

function gotResult(error,results){

    if(error)
     {

        console.log(error)
     }

     else{

        console.log(results)
     }
    
}

