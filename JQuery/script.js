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

});


    // Function for paragraph changing color when clicked
    let $p = $('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor purus non enim praesent elementum facilisis.</p>')
    $('body').append($p)
        
    $p.click(function() {
        let r = Math.floor((Math.random() * 255) + 1);
        let g = Math.floor((Math.random() * 255) + 1);
        let b = Math.floor((Math.random() * 255) + 1);
        $(this).css('color',  "rgb(" + r + ", " + g + ", " + b + ")")
    });

    // When button clicked span with my name is added to div
    let $emptyDiv = $('#emptyDiv')
    let $emptyBtn = $('#emptyDivBtn')
    $emptyBtn.click(function()  {
        let $span = $('<span>Kyle</span>')
        $emptyDiv.append($span)
    });

// Dom Content Loaded end tag
});