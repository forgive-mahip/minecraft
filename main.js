var canvas=new fabric.Canvas('myCanvas')
playerx=10
playery=10
blockwidth=30
blockheight=30
var playerobject=""
var blockobject=""
function playerupdate()
{

    fabric.Image.fromURL("https://lh3.googleusercontent.com/xlExmtN9aBioUVxaLMHSDoocN4R7w2defuDEjLR_GDr6dPZkHDtQBApHno9l6RBf0rzKz3OKXBhPSReb2uE-7Jg=s400",function(Img){
playerobject=Img
playerobject.scaleToWidth(100)
playerobject.scaleToHeight(150)
playerobject.set({

    

    top:playery,left:playerx})
    
    canvas.add(playerobject)
})
}
function blockupdate(image)
{

    fabric.Image.fromURL(image,function(Img){

      blockobject=Img
blockobject.scaleToWidth(blockwidth)
blockobject.scaleToHeight(blockheight)
blockobject.set({

    

    top:playery,left:playerx})
    
    canvas.add(blockobject)
})
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e)
{
    keypress=e.keyCode;
    if(keypress=='37')
    {
left()

    }
    if(keypress=='38')
    {
up()

    }
    if(keypress=='39')

    {
right()

    }
    if(keypress=='40')
    {
down()

    }

    if(keypress=='87')
    {
        console.log ('w')
        blockupdate("ground.png")
    }
    if(keypress=='71')
    {
        console.log ('g')
        blockupdate("wall.jpg")
    }
    if(keypress=='76')
    {
        console.log ('l')
        blockupdate("light_green.png")
    }
    if(keypress=='84')
    {
        console.log ('t')
        blockupdate("trunk.jpg")
    }

    if(keypress=='82')
    {
        console.log ('r')
        blockupdate("roof.jpg")
    }

    if(keypress=='89')
    {
        console.log ('y')
        blockupdate("yellow_wall.png")
    }
    if(keypress=='68')
    {
        console.log ('d')
        blockupdate("dark_green.png")
    }
    if(keypress=='85')
    {
        console.log ('u')
        blockupdate("unique.png")
    }
    if(keypress=='67')
    {
        console.log ('c')
        blockupdate("cloud.jpg")
    }
}
function up()
{
    playery=playery-10;
    canvas.remove(playerobject) 
    playerupdate()
}
function down()
{
    playery=playery+10;
    canvas.remove(playerobject) 
    playerupdate()
}
function right()
{
    playerx=playerx+10;
    canvas.remove(playerobject) 
    playerupdate()
}
function left()
{
    playerx=playerx-10;
    canvas.remove(playerobject) 
    playerupdate()
}