const counter = document.getElementById("counter");

counter.innerText = "0";

const increment = document.getElementById("increment");
increment.addEventListener("click", () => {
    const curCount = parseInt(counter.innerText);

    if (curCount >= 10) {
        alert("Can't count past 10!");

    } else {
        counter.innerText = curCount + 1;
    }
});

const decrement = document.getElementById("decrement");
decrement.addEventListener("click", () => {
    const curCount = parseInt(counter.innerText);

    if (curCount <= 0) {
        alert("Can't count below 0!");
        
    } else {
        counter.innerText = curCount - 1;
    }
});
