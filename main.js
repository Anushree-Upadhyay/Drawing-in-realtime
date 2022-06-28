x_nose = 0;
y_nose = 0;
x_right_wrist = 0;
x_left_wrist = 0;
area_sqaure = 0;

function setup(){
   canvas = createCanvas(300 , 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   video.position(100 , 190);
   poseNet = ml5.poseNet(video , modelLoaded);
   poseNet.on("pose" , gotResult);
}

function modelLoaded(){
   console.log("Model is Loaded!");
}

function gotResult(results){
   if(results.length > 0){
      console.log(results);
      x_nose = results[0].pose.nose.x;
      y_nose = results[0].pose.nose.y;
      x_left_wrist = results[0].pose.leftWrist.x;
      x_right_wrist = results[0].pose.rightWrist.x;
      area_sqaure = floor(x_left_wrist - x_right_wrist);
   }
}

function draw(){
   background("#e6fff2");
   stroke("#004d25");
   fill("#004d25");
   square(x_nose, y_nose, area_sqaure);
   document.getElementById("square_size").innerHTML = "Size of the Square = " + area_sqaure;
}