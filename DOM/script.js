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

//Set color of div
let colorDiv = document.getElementById('div1')
colorDiv.addEventListener('mouseenter', function()  {
    colorDiv.style.backgroundColor = 'red';
})

colorDiv.addEventListener('mouseleave', function()   {
colorDiv.style.backgroundColor = 'white';

});
//When hover div changes 

// End of DOM Content Loaded tag
});