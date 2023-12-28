/* Constants */
const NUM_DOORS = 6;
const DOOR_COORDS_X = [];
const DOOR_COORDS_Y = [];
const DOOR_WIDTH = 5.5;
const DOOR_HEIGHT = 13;
const SLICE = 2 * Math.PI / NUM_DOORS;
const ORIGIN_X = 40;
const ORIGIN_Y = 40;
const RADIUS = 40;

/* Function Definitons */

function doorsTranslateX() {
    for (let i = 0; i < NUM_DOORS; i++) {
        let angle = SLICE * i;
        let x = ORIGIN_X + RADIUS * Math.cos(angle);
        let doorX = x - DOOR_WIDTH / 2;
        DOOR_COORDS_X.push(doorX);
    }
}

function doorsTranslateY() {
    for (let i = 0; i < NUM_DOORS; i++) {
        let angle = SLICE * i;
        let y = ORIGIN_Y + RADIUS * Math.sin(angle);
        let doorY = y - DOOR_HEIGHT / 2;
        DOOR_COORDS_Y.push(doorY);
    }
}

function drawDoorHTML() {
    const nexus = document.getElementsByClassName("nexus")[0];
    for (let i = 0; i < NUM_DOORS; i++) {
        let door = `<div class="door" id="door${i}"></div>`;
        nexus.innerHTML += door;
    }
    const doors = document.getElementsByClassName("door");
    for (let i = 0; i < NUM_DOORS; i++) {
        let door = doors[i];
        door.style.transform = `translateX(${DOOR_COORDS_X[i]}vh) translateY(${DOOR_COORDS_Y[i]}vh)`;
        console.log(`x: ${DOOR_COORDS_X[i]} y: ${DOOR_COORDS_Y[i]}`);
    }
}

function styleDoors() {

}

/* Function Calls */
doorsTranslateX();
doorsTranslateY();
drawDoorHTML();