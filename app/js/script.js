console.log("I love yolk");

function myClock() {
  setTimeout(function () {
    const d = new Date();
    const n = d.toLocaleTimeString("it-IT");
    document.getElementById("clock").innerHTML = n;
    myClock();
  }, 1000);
}
myClock();

function myDate() {
  setTimeout(function () {
    const d = new Date();
    const date = new Date(2019, 1, 1, 1, 1, 1);
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const n = d.toLocaleDateString("en-US", options);
    document.getElementById("date").innerHTML = n;
    myDate();
  });
}
myDate();
