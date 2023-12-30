console.log(document.getElementsByClassName("nodes"));

const gameTickRate = 20 // in millisec.

// code for ticker event
const tickEvent = new Event("tick");
function ticker (tickRate) {
    let timeLeft = 0;

    var tickInterval = setInterval(function () {
    timeLeft++;
    dispatchEvent(tickEvent);
  }, tickRate);
}

let counter1 = 1;
// eventListener to move node element
// addEventListener("tick", function() {
//         counter1--;
//         if (counter1 == 0) {
//             console.log("event is working");
//             pos++;
//             testNode.setAttribute("style", "left: " + pos + "px; top: " + pos + "px;");
//             counter1 = 1;
//         }
//     }
// )

// seconds eventListener
let counter2 = 20
addEventListener(
    "tick",
    (e) => {
        counter2--;
        if (counter2 == 0) {
            console.log("a second has passed");
            counter2 = 20;
        }

    }
)

// sets node position in game box
// let testNode = document.querySelector("#test-node");
// let pos = 20;
// testNode.setAttribute("style", "left: " + pos + "px; top: " + pos + "px;");

// code for keyboard controls
function keydownAction(event) {
    let key = event.key.toLowerCase();
    let output = "nothing";
    switch (key) {
        case "w":
            output = "w";
            break;
        case "d":
            output = "d";
            break;
        case "s":
            output = "s";
            break;
        case "a":
            output = "a";
            break;
        default:
            output = "invalid key";
            break;
    }
    console.log("KEYDOWN Event: " + key);
}
document.addEventListener("keydown", keydownAction);

// 

function startGame() {

}



// ticker(gameTickRate);