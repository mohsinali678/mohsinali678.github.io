let startTime = new Date().getTime();
let bestTime=1;

let getRandomColor = () => {
    let letters = "0123456789ABCDEF".split("");
    let color = "#";
    for(let i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}



let appearAfterDelay=()=>{
    setTimeout(() => {
    let shape = document.getElementById("shape").style;

    shape.display = "block";

    let top = Math.random()*200;
    let left = Math.random()*700;
    shape.top = top+"px";
    shape.left = left+"px";
    
    let width = (Math.random()*200)+50;
    let height = (Math.random()*300)+50;
    shape.width = width+"px";
    shape.height = height+"px";
    
    
    if(Math.random() > 0.5){
        shape.borderRadius = "50%";
    }else{
        shape.borderRadius = "0%";
    }


    shape.backgroundColor = getRandomColor(); 
    
    startTime = new Date().getTime();
}, Math.random()*2000)}


document.getElementById("shape").onclick = () => {
    document.getElementById("shape").style.display = "none";
    let endTime = new Date().getTime();
    let timeTaken = (endTime - startTime)/1000;

    document.getElementById("timeTaken").innerHTML = `${timeTaken}s`;

    if(timeTaken < bestTime){
        document.getElementById("bestTime").innerHTML = `${timeTaken}s`;
        bestTime = timeTaken;
    }else{
        document.getElementById("bestTime").innerHTML = `${bestTime}s`;
    }

    appearAfterDelay();
}