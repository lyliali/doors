/* Constants */
const NUM_DOORS = 6;
const DOOR_COORDS_X = [];
const DOOR_COORDS_Y = [];
const DOOR_WIDTH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--door-width"));
const DOOR_HEIGHT = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--door-height"));
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
        let knob = `<div class="knob"></div>`;
        let door = `<div class="door" id="door${i}">${knob}</div>`;
        nexus.innerHTML += door;
    }
    const doors = document.getElementsByClassName("door");
    for (let i = 0; i < NUM_DOORS; i++) {
        let door = doors[i];
        //door.style.transform = `translateX(${DOOR_COORDS_X[i]}vh) translateY(${DOOR_COORDS_Y[i]}vh)`;
        door.style.top = `${DOOR_COORDS_Y[i]}vh`;
        door.style.left = `${DOOR_COORDS_X[i]}vh`;
        door.style.backgroundImage = `url("assets/doors/door${i}.jpeg")`;
    }
}

/* Function Calls */
doorsTranslateX();
doorsTranslateY();
drawDoorHTML();