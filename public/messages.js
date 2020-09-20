
//client side javascript


var button = document.querySelectorAll(".replied")
var trash = document.getElementsByClassName("fa-trash");
console.log(button)




Array.from(button).forEach(function(element) {
      element.addEventListener('click', function(){
        console.log(element.value)
        fetch('/messages',{
          method: 'put',
          headers: {
             'Content-Type': 'application/json'
          },
          body: JSON.stringify({
           callBack: true,
             id: element.value
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        console.log(this.parentNode.parentNode.childNodes)
        const id = this.parentNode.parentNode. childNodes[11].dataset.id
        console.log(id)
        fetch('/messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              id: id

          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
