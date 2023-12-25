console.log(document.getElementsByClassName("nodes"));

const gameTickRate = 20 // in millisec.

const tickEvent = new Event("tick");
function ticker (tickRate) {
    let timeLeft = 0;

    var tickInterval = setInterval(function () {
    timeLeft++;
    dispatchEvent(tickEvent);
  }, tickRate);
}

let counter1 = 1;
// test eventListener for ticks
addEventListener("tick", function() {
        counter1--;
        if (counter1 == 0) {
            console.log("event is working");
            pos++;
            testNode.setAttribute("style", "left: " + pos + "px; top: " + pos + "px;");
            counter1 = 1;
        }
    }
)

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

let testNode = document.querySelector("#test-node");
let pos = 20;
testNode.setAttribute("style", "left: " + pos + "px; top: " + pos + "px;");

function startGame() {

}

// ticker(gameTickRate);