

$('#animal').click(function(){

    $('#cat_section').show(2000);
    $('#tiger_section').show(2000);
})



$('#tiger').click(function(){

    $('#cat_section').hide(2000);
    $('#tiger_section').show(2000);
})


$('#cat').click(function(){
    $('#tiger_section').hide(2000);
    $('#cat_section').show(2000);
})