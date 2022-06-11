function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("Canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("Game_Console")
	poseNet=ml5.poseNet(video,modelloaded);
	poseNet.on("pose",gotposes);
}

function modelloaded() {
	console.log("The Model Is Loaded");
}

function gotposes(results) {
	if(results.length>0) {
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}

function draw() {
	game();
}






