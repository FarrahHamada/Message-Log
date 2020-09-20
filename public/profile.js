
//client side javascript


var button = document.querySelectorAll(".replied")
console.log(button)






Array.from(button).forEach(function(element) {
      element.addEventListener('click', function(){
        console.log("replied")

      });
});
