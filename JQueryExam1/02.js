// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function(){
    $('#selected-plays > li > ul >li').addClass('special');
});

$(document).ready(function(){
    $('td:nth-child(3)').addClass('year');
});
$(document).ready(function(){
    $('td:contains(Tragedy)').prev().addClass('special');
});
$(document).ready(function(){
    $('li > a').parent().next().addClass('afterlink');
});
$(document).ready(function(){
    $('a[href$=".pdf"]').parent().parent('ul').addClass('tragedy');
});