//Project 1:


//Code was the working on here for some reason, moved into the HTML


//Project 2: /20% imge.jpeg
window.addEventListener("load", function () {
    console.log("window loaded")
    let setvalue = document.getElementById("rangevalue");
    let imgchangevalue = document.getElementById("imgchange");
    let rangeValue = document.getElementById("myRange");

    rangeValue.addEventListener("mouseup", function () {
        console.log("input works")
        let getvalue = rangeValue.value;
        setvalue.innerHTML = this.value;
        if (getvalue > 0 && getvalue < 16) {
            imgchangevalue.setAttribute("src", "/20% image.jpeg")
        } else if (getvalue >= 17 && getvalue <= 33) {
            imgchangevalue.setAttribute("src", "/40% image.jpeg")
        } else if (getvalue >= 34 && getvalue <= 49) {
            imgchangevalue.setAttribute("src", "/60% image.jpeg")
        } else if (getvalue >= 50 && getvalue <= 66) {
            imgchangevalue.setAttribute("src", "/80% image.jpeg")
        } else if (getvalue >= 67 && getvalue <= 83) {
            imgchangevalue.setAttribute("src", "/100% image.jpeg")
        } else if (getvalue >= 84 && getvalue <= 100) {
            imgchangevalue.setAttribute("src", "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
        }
    })
})


//Project 3
function startTest() {
    var imgAddr = "http://upload.wikimedia.org/wikipedia/commons/2/2d/Snake_River_%285mb%29.jpg" + "?n=" + Math.random();
    var startTime, endTime;
    var download_size = 5 * 1024 * 1024;
    var img = new Image();
    img.onload = function () {
        endTime = (new Date()).getTime();
        ShowData();
    }
    startTime = (new Date()).getTime();
    img.src = imgAddr;

    function ShowData() {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = download_size * 8;
        var speedMbps = ((bitsLoaded / duration) / 1024 / 1024).toFixed(2);
        alert("Speed: " + speedMbps + " Mbps");
    }
}
    /*This code displays an alert prompting the user to click "OK" to start a test.
Next, a variable is set which stores the address of an image file. Two more variables
are set which will be used to store the start and end time of the test. A new Image 
is then created and an event listener is set which will run the ShowData() function 
when the image has finished loading. The start time is then set, and the image source 
is set to the image address. Finally, the ShowData() function is defined, which calculates 
the duration of the test, the bits loaded, and the speed in Mbps. An alert then displays
the calculated speed.*/
