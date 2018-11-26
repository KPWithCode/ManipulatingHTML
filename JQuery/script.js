$(document).ready(function (){

let $button = $('<button>Friendly Button</Button>');
$('body').append($button)
$button.click(function()    {
    alert('Hello, Good Day')
});

//When button clicked alert value of input text box
let htmlButton = $('#htmlButton')
htmlButton.click(function() {
    alert($('#textBox').val())
});

//make the div change to a different background color when your mouse hovers over it.
let $colorDiv = $('#div1')
$colorDiv.mouseenter(function() {
   $(this).css('backgroundColor', 'red')
});
$colorDiv.mouseleave(function() {
    $(this).css('backgroundColor', 'white')

})
// Dom Content Loaded end tag
});