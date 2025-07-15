const isAvailable = false
if (!isAvailable) {
    const hidder = document.createElement("div");
    hidder.style.width = "100%";
    hidder.style.height = "100%";
    hidder.style.backgroundColor = "white";
    hidder.style.color = "black";
    hidder.appendChild(document.querySelector("body"));
    setTimeout(async () => {
        const prompt = window.prompt("This page has been hidden due to developers, hidding it!\nIf you have any questions, join our discord: https://discord.gg/dAtcaSmDSs\n Would you like to be redirected to the discord server?", "https://discord.gg/dAtcaSmDSs")        
        if (prompt) {
            window.location.href = "https://discord.gg/dAtcaSmDSs";
        }
        }, 1000)
}
