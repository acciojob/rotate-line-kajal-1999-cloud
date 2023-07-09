//your JS code here. If required.
const line = document.getElementById('line') ;
var rotationAngle = 0 ;

function rotateLine() {
	rotationAngle += 1 ;
    line.style.transform = `rotate(${rotationAngle}deg)` ;

	// calling the rotation line function again
	requestAnimationFrame(rotateLine) ;
}
rotateLine() ;

