show=()=>{
  document.querySelector(".toggle").classList.toggle("change");
}

var counter=55;
setInterval(function(){
var count= document.getElementById("count");
   counter++;
   count.innerHTML="00:"+ counter;
  var timer= document.getElementById("timer");
  if(timer.style.display!="none"){
    timer.style.display='none';
    if(counter>59){
      count.style.display="none"
      timer.innerHTML="01:00";
    }
  }
   else{
     
   if (timer.style.display= "none") {
      timer.style.display = 'block';
    }
   }
       }
  ,1000)
  
  /*var index=0;
  next=()=>{
    var images= document.querySelector(".section").children;
    var imagesLength = images.length;
    index++;
    for (var i=0; i<images.length; i ++){
      images[i].classList.remove("main");
    }
    index[images].classList.add("main");
  }
  */
  var index = 0;
next=()=>{
  
  const images = document.querySelector(".section").children;
  var totalImages = images.length;
  const dot = document.querySelector(".dot").children;
  index++;
  if (index == totalImages) {
    index = 0;
  }
  for (let i = 0; i < images.length; i++) {
    
    images[i].classList.remove('main');
  }
  for (let i = 0; i < dot.length; i++) {
    dot[i].classList.remove('dot-main');
  }
  images[index].classList.add('main');

  dot[index].classList.add('dot-main');
}
  prev=()=>{
          const images = document.querySelector(".section").children;
          const dot = document.querySelector(".dot").children;
          var totalImages = images.length;
            index--;
          if(index<0){
          index=totalImages-1;
          } 
        for(let i = 0; i < images.length; i++) {
        images[i].classList.remove('main');
        }
        for (let i = 0; i < dot.length; i++) {
          dot[i].classList.remove('dot-main');
        }
        if(index>=0){
        images[index].classList.add( 'main');
        dot[index].classList.add( 'dot-main');
     
       } 
       
        }
        function goTop(){
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0
        }

    go=function() {
    var pageTop = document.body.scrollTop;
    var pageBottom = pageTop + screen.height;
    var tags = document.querySelectorAll(".snacks");
    for(var i=0; i<tags.length; i++){
    var tag = tags[i];
    var position = tag.scrollHeight;
    if(document.documentElement.scrollTop>=tag.offsetTop-80){//Adjust
      tag.classList.add("visible");
    } else {
    }
  }
  }


