document.addEventListener('DOMContentLoaded', function(event)   {
let btn = document.createElement('button')
btn.className ='button1'
let btnText = document.createTextNode('button')
btn.appendChild(btnText)
document.body.appendChild(btn)

btn.addEventListener('click', function() {
   alert('Hello Sir Good Day')
});









// End of DOM Content Loaded tag
});