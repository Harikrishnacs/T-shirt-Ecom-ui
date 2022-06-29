var MainImg = document.getElementById("MainImg");
var SmallImage = document.getElementsByClassName("smallImg");



SmallImage[0].onclick = function() {  
    MainImg.src=SmallImage[0].src;
   
}
SmallImage[1].onclick = function() {    
    MainImg.src=SmallImage[1].src;
}
SmallImage[2].onclick = function() {    
    MainImg.src=SmallImage[2].src;
}
SmallImage[3].onclick = function() {    
    MainImg.src=SmallImage[3].src;
}
