setTimeout(() => {
    alert("This page is still in development, so some features might not work as intended or are inaccurate.")
}, 1500);

function calculateFusion() {

        // Get Player Stats
    const a = document.getElementById("player1").value;
    const b = document.getElementById("player2").value;

    // Get Reasult Div
    const resultDiv = document.getElementById("statsPlayer1");

    // Prase stats to Number
    const aInt = parseInt(a);
    const bInt = parseInt(b);

    // Define Multiplier
    let Multi = 0;

// Main function
    if ((aInt == "" || bInt == "") || (aInt == "NaN" || bInt == "NaN")) {
        return resultDiv.textContent = "Please, enter valid player stats";
    }

    // Get Multiplier
    if (aInt - a*0.5 > bInt || bInt > aInt + aInt*0.5 && aInt - aInt*0.5 < bInt || bInt < aInt + aInt*0.5) {
        Multi = 0.8;
    }; if (aInt - aInt*0.3 < bInt && bInt < aInt + aInt*0.3 && bInt - bInt*0.3 < aInt && aInt < bInt + bInt*0.3) {
        Multi = 1.2;
    }; if (aInt - aInt*0.1 < bInt && bInt < aInt + aInt*0.1 && bInt - bInt*0.1 < aInt && aInt < bInt + bInt*0.1) {
        Multi = 1.5;
    }
    const final = aInt*Multi;

    // Return Resault
    return resultDiv.textContent = `Player 1's Multiplier: ${final.toLocaleString("en-us")}`;
}

document.addEventListener("keypress", (e) => {
    if (e.key == "Enter") calculateFusion();
})