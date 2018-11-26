document.addEventListener('DOMContentLoaded', function(event)   {
let btn = document.createElement('button')
btn.className ='button1'
let btnText = document.createTextNode('DomButton')
btn.appendChild(btnText)
document.body.appendChild(btn)

btn.addEventListener('click', function() {
   alert('Hello Sir Good Day')
});






// let txtValue = document.createTextNode('The Value is' + textBox);
// txtValue.appendTo(textBox)
let htmlButton = document.getElementById('htmlButton');
htmlButton.addEventListener('click', function() {
 
    alert(document.getElementById('textBox').value);
    

});

// End of DOM Content Loaded tag
});