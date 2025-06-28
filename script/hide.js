const isAvailable = true
if (!isAvailable) {
    const hidder = document.createElement("div");
    hidder.style.width = "100%";
    hidder.style.height = "100%";
    hidder.style.backgroundColor = "white";
    hidder.style.color = "black";
    hidder.appendChild(document.querySelector("body"));
    setTimeout(async () => {
        window.prompt("This page has been hidden due to developers, hidding it!\nIf you have any questions, join our discord: https://discord.gg/dAtcaSmDSs", "https://discord.gg/dAtcaSmDSs")        
        }, 1000)
}