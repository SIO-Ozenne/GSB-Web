function w3_open() {
    document.getElementById("main").style.marginLeft = "10%";
    document.getElementById("sidebarDesFamilles").style.width = "10%";
    document.getElementById("sidebarDesFamilles").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("sidebarDesFamilles").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}