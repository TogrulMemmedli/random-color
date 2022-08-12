function randomNum(min=0, max=256){
    min = min-1;
    let hexCode = Math.ceil(min+Math.random()*(max-min));   
    if(hexCode<=16){
        return `0${hexCode.toString(16)}`
    }else{
        return hexCode.toString(16);
    }
}

function colorCreate(){
    return `#${randomNum()}${randomNum()}${randomNum()}`
}

function randomColor(){
    let body = document.querySelector('body');
    let button = document.querySelector('button');
    let color = colorCreate();
    body.style.backgroundColor = color;
    button.innerHTML = color
}