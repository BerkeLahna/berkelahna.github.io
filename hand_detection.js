const videoElement = document.getElementById("videoElement");
const canvas = document.getElementById("canvas");
const outputText = document.getElementById("outputText");

const hands = new Hands({ locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}` });

hands.setOptions({
  maxNumHands: 1,  // Set the maximum number of hands to detect
});

function startCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      videoElement.srcObject = stream;
    })
    .catch((error) => {
      console.log("Error accessing camera: " + error);
    });
}

function detectHands() {
  hands.onResults((results) => {
    const handLandmarks = results.multiHandLandmarks[0]; // Assuming only one hand is detected

    // Process hand landmarks and update the output text
    if (handLandmarks) {
      // Process hand landmarks here

      // Update outputText with your logic (e.g., display detected signs)
      outputText.textContent = "Detected: Sign A";
    } else {
      outputText.textContent = "No hand detected";
    }

    // Draw hand landmarks on the canvas
    drawHandLandmarks(handLandmarks);
  });
}

function drawHandLandmarks(handLandmarks) {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw hand landmarks here
}

startCamera();
hands.initialize();
detectHands();
