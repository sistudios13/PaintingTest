window.onscroll = function() {scrollFunction()}

let scrollHeight = 90

function scrollFunction() {
    if (window.innerWidth < 600) {
        if ( document.documentElement.scrollTop > scrollHeight) {
        
            
            document.getElementById("navbar").classList.add("box")

          } else {
            document.getElementById("navbar").classList.remove("box")
           
     
          }
      
    }
 
    else {
        if (document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight) {
        
            
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