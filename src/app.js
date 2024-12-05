window.onscroll = function() {scrollFunction()}
function scrollFunction() {
    if (window.innerWidth < 600) {
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        
            
            document.getElementById("navbar").classList.add("box")

          } else {
            document.getElementById("navbar").classList.remove("box")
           
     
          }
      
    }
 
    else {
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        
            
            document.getElementById("navbar").classList.add("box")
            
     
          } else {
            document.getElementById("navbar").classList.remove("box")
          
     
          }
    }
  }


let video = document.getElementById('hero');

function playVid() {
    video.play()
}
function pauseVid() {
    video.pause()
}