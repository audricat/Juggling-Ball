window.onload = function () {
		  // Definitions
		  var canvas = document.getElementById("key-events-canvas");
		  var context = canvas.getContext("2d");
		  
		  ///ball - free fall
		  var ball = new Ball(30, "green");
		  ball.x = canvas.width/2;
		  ball.y = 50;
		  ball.context = context;

			var mouseX = 0;
			var mouseY = 0;

			//Mouse Listener
			canvas.addEventListener ('mousemove', function (event) {
   		 	var boundings = canvas.getBoundingClientRect();
				mouseX = event.clientX - boundings.left;
				mouseY = event.clientY - boundings.top;
			})

		  animate();

		  //acceleration
		  var ax = 0.05;
		  //gravity
		  var g = 0.098;
		  //velocity
		 
		  ball.vy = 0; //free fall
		  
		  function animate(){
			
			reqAnimFrame = window.requestAnimationFrame;
			reqAnimFrame(animate);
			
			// Clear Canvas
			context.clearRect(0, 0, canvas.width, canvas.height);
			
			// Update
			//free fall
			ball.y += ball.vy;
			ball.vy += g;	

			//Mouse Collision Check
if (Math.sqrt(Math.pow((ball.x - mouseX),2) + Math.pow((ball.y - mouseY),2)) < ball.r) {
ball.vy *= -1;
}

			// Draw
			ball.draw();
		}
		  
		};

	
	