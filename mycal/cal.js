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

function reverseNumberFormat(num){
    return Number(num.replaceAll(`,`, ` `))
    //return Number(num.replace(/,/g,' '));
}
var operator = document.getElementsByClassName('operator');
for(var i= 0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
        if(this.id=='clear'){
            printHistory='';
            printOutput = '';
        }
        if(this.id ='backspace'){
            pri
        }
    })
}

var number = document.getElementsByClassName('number');
for(var i= 0; i< number.length; i++){
    number[i].addEventListener('click', function(){
        console.log(`hello`) 
        var output = reverseNumberFormat(getOutput());
        console.log(output)
        // if(output != NaN){ // if output is a number
        //     output = output.this.id;
        //     printOutput(output);

        // }

    })
} 