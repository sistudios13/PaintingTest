window.onscroll = function() {scrollFunction()}
function scrollFunction() {
    if (window.innerWidth < 600) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        
            
            document.getElementById("navbar").classList.add("box")
     
          } else {
            document.getElementById("navbar").classList.remove("box")
     
          }
      
    }
 
    else {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        
            
            document.getElementById("navbar").classList.add("box")
     
          } else {
            document.getElementById("navbar").classList.remove("box")
     
          }
    }
  }