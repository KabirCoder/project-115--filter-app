var nose_x= 0;
var nose_y= 0;
function preload() {
  moustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(400, 400);
  video.hide()

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  console.log(results);
  if(results.length > 0)
  {
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
    //console.log(results[0].pose.leftEye.x);
    //console.log(results[0].pose.leftEye.y);
    nose_x= results[0].pose.nose.x-35;
    nose_y= results[0].pose.nose.y+15;
    }
    
}

function draw() {
  image(video, 0, 0, 400, 400);
  fill("black");
  stroke("black");
  //circle(nose_x, nose_y, 32.5);
  image(moustache, nose_x, nose_y, 80, 30);
  
}


function take_snapshot(){    
  save('myFilterImage.png');
}
