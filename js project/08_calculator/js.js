
function insertNum(Number){
    var output=$('#result').val()
    $('#result').val(output+Number)
}


function clearResult(){
    $('#result').val('')
}


function Result(){
    var result=eval($('#result').val())
    $('#result').val(result)
}

function Delete(){
    var value=$('#result').val()
    if(value != ''){
        $('#result').val(value.slice(0,-1))
    }

    else {
        alert("Are you mad!! Without value why you press DEL")
    }
}