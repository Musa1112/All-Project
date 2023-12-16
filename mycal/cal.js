function getHistory(){
    return document.getElementById('history-value').innerText;
}

function printHistory(num){
    return document.getElementById('history-value').innerText=num;
}

function getOutput(){
    return document.getElementById('output-value').innerText;
}

function printOutput(num){
    document.getElementById('output-value').innerText =getFormattedNumber(num);
    if(num==""){
        document.getElementById('output-value');

    }
    else{
        document.getElementById('output-value').innerText =getFormattedNumber(num);
    }
    }


function getFormattedNumber(num){
    n = Number (num);
    value = n.toLocaleString('en');
    return value;
}

var operator = document.getElementsByClassName('operator');
for(var i= 0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
        alert('the operator clicked;'+ this.id)
    })
}

var number = document.getElementsByClassName('number');
for(var i= 0; i< number.length; i++){
    number[i].addEventListener('click', function(){
        alert('the number clicked;'+ this.id)
    })
}