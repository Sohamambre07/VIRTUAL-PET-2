//Create variables here
var food
function preload()
{
	//load images here
  dogHappy=loadImage("images/dogImg1.png")
  dogSad=loadImage("images/dogImg.png")
  bg = loadImage("images/Scenary.jpg")
}

function setup() {
	createCanvas(800, 700);
  
  database = firebase.database()

  database.ref('food').on("value",readPosition)

  dog = createSprite(700,450,50,50)
  dog.addImage(dogSad)
  dog.scale=0.2

database.ref('food').on("value",readPosition)

milk1 = new Food()
milk1.getfeedTime()

}


function draw() {  
background(bg)
  drawSprites();
  //add styles here
textSize(20)


text ("feedtime:" + milk1.feedtime , 200, 50)
milk1.buttons()
milk1.milkImg()
}

if(food===0){
  dog.addImage(dogHappy)
  dog.scale=0.2
  }

function readPosition(data){

food = data.val()

}

function writeStock(data){
database.ref('/').set({
food:data,
feedtime:hour()
})
}

function showError(){
console.log("there is an error from reading the values from database")
}