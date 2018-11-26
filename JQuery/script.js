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

// Dom Content Loaded end tag
});