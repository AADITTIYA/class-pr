object = []
status_ = "";

function preload(){
    video = createVideo("video.mp4");  
    console.log("done");  
}

function setup(){
   canvas = createCanvas(480,389);
   canvas.center();
   video.hide();
}

function start(){
    dbjectDetector = ml5.objectDetector("cocossd", modleLoaded);
    document.getElementById("status").innerHTML = "STATUS : OBJECT DETECTED";
}

function modleLoaded(){
    video.loop();
    video.speed(1);
    video.volume(0);
    console.log("model loadded");

}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
        console.log(results);
        object = results; 
        console.log("model loadded53434");
}
 function draw(){
    image(video,0 ,0 ,480 ,380);
    if(status_ != ""){
        objectDetector.detect(video, gotResult);
        for( i=0; i<object.lenght; i++){
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("no_objects").innerHTML = "No of Objects Detected";
            fill("#FF0000");
            percent = floor(object[i].confidence*100);
            Text( object[i].lable + "" + percent +"%", object[i].x, +15,object[i].y +15);
            nofill();
            fill("#FF0000");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
           }
    }
 }