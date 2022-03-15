<canvas id="myCanvas" width="1000" height="1000">


<script>
    //returns a random colour as a hex value
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    //Returns a random number between a range of the two arguments
    //wrap the return value in Math.floor/ceil() for a whole number
    function returnRandomNumberInRange(minValue, maxValue) {
      if (
        minValue > maxValue ||
        minValue === undefined ||
        maxValue === undefined
      ) {
        return "Unexpected arguements, please provide minimum and maximum values in that order";
      } else {
        return Math.random() * (maxValue - minValue + 1) + minValue;
      }
    }

    //Assigns the canvas object to canvas so we can access it
    const c = document.getElementById("myCanvas");
    const canvas = c.getContext("2d");
    canvas.lineWidth = 3.5;

    //initialises the X/Y arrays
    const xValues = [],
          yValues = [];

    //Sets the number of steps and grid locations into X&Y arrays
    function plotPoints(centerX, centerY, steps) {
      var randomRad1, randomRad2;
      for (var i = 0; i < steps; i++) {
        randomRad1 = returnRandomNumberInRange(200, 450);
        randomRad2 = returnRandomNumberInRange(200, 450);
        xValues[i] =
          centerX + randomRad1 * Math.cos((2 * Math.PI * i) / steps);
        yValues[i] =
          centerY + randomRad2 * Math.sin((2 * Math.PI * i) / steps);
      }
    }
    //Draws the shape
    function drawShape(xPOS, yPOS) {
      canvas.arc(500, 500, 450, 0, Math.PI * 2, true);
      canvas.beginPath();
      for (i = 0; i <= xPOS.length - 1; i++) {
        canvas.moveTo(xPOS[i], yPOS[i]);
        canvas.lineTo(xPOS[i + 1], yPOS[i + 1]);
      }
      canvas.moveTo(xPOS[xPOS.length], yPOS[yPOS.length]);
      canvas.lineTo(xPOS[0], yPOS[0]);
      canvas.closePath();
      canvas.strokeStyle = getRandomColor();
      canvas.stroke();
    }

    //Clears the screen ready for the next shape
    function clearCanvas() {
      canvas.clearRect(0, 0, myCanvas.width, myCanvas.height);
      canvas.beginPath();
    }
  </script>


  <div id="buttonSpace">
      <button
        onclick="clearCanvas();plotPoints(500, 500, 11);drawShape(xValues, yValues)"
      >
        Generate
      </button>
    </div>