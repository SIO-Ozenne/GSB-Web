function w3_toggle() {
    if(document.getElementById("sidebar").style.display == "none")
    {
        document.getElementById("main").style.marginLeft = "11%";
        document.getElementById("sidebar").style.width = "11%";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("toggleBtn").innerHTML = "&times;";
    }
    else
    {
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("sidebar").style.display = "none";
        document.getElementById("toggleBtn").innerHTML = "&#9776;";
    }
}