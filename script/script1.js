const talentsMapping = { yes: 1, no: 0 };

function generateBossOptions() {
    const bosses = {
        "X Fighter Trainer": 350,
        "klirin": 1200, // 1.2k
        "Roshi": 1900, // 1.9k
        "Kid Nohag": 3800, // 3.8k
        "Radish": 8000, // 8k
        "Mapa": 13000, // 13k
        "Citizen": 90000, // 90k
        "Vegetable(Saya Saga)": 27000, // 27k
        "Lord Sloog": 50000, // 50k
        "Chilly": 200000, // 200k
        "No. 17": 400000, // 400k
        "Perfect Atom": 900000, // 900k
        "Z Broccoli": 1500000, // 1.5M
        "Super Boo": 3200000, // 3.2M
        "Kakata (SSJ)": 5700000, // 5.7M
        "Vills (1%)": 12000000, // 12M
        "Gold Chilly": 50000000, // 50M
        "Merged Zamas": 95000000, // 95M
        "Broccoli": 165000000, // 165M
        "Jiran the Gray": 370000000, // 370M
        "Vegetable (Ultra Ego)": 800000000, // 800M
        "Black Chilly": 2700000000, // 2.7B
        "Vills (TGOD)": 8400000000, // 8.4B
        "Vis (UI)": 45000000000, // 45B
        "Xicor": 8000000000000, // 8T
        "Wukong (SSJB3)": 600000000000000, // 600T
        "Kakata (Ego Instinct)": 9000000000000000 // 9Q
    }

    const bossSelect = document.getElementById("boss");

    for (const boss in bosses){
        const option = document.createElement("option");
        option.text = boss;
        option.value = bosses[boss];
        bossSelect.appendChild(option);
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    generateBossOptions();
});

document.addEventListener("keypress", event => {
    if(event.key == "Enter" || event.key == "Space") {
        calculateGain()
    }
})

document
    .getElementById("calculateButton")
    .addEventListener("click", calculateGain());

// function formatNumberWithUnit(number, unit) {
//     if (number === 0) return '';
//     if (number === 1) return number;
//     return number + ' ';
// }

function calculateGain() {
    const rebirths = parseInt(document.getElementById("rebirths").value);
    const talents = talentsMapping[document.getElementById("talents").value];
    const boost = document.getElementById("boost").value;
    
    const bossSelect = document.getElementById("boss");
    const boss = parseInt(bossSelect.value);
    const bossName = bossSelect.options[bossSelect.selectedIndex].text;

    if (isNaN(rebirths) || rebirths < 0) {
        document.getElementById("result").textContent =
            "Please enter a valid number for rebirths";
        return;
    }

    // Step 1: Calculating the base coefficient with rebirths
    const baseMultiplier = 1 + (rebirths * 0.35); // X = 1 + (rebirths * 0.5)

    // Step 2: Ajout des talents
    let totalMultiplier = baseMultiplier; // We start from the base multiplier
    if (talents) {
        totalMultiplier += baseMultiplier; // Added X for talents
    }

    // Step 3: Added weekend boost
    if (boost == "TwoTime") {
        totalMultiplier += baseMultiplier; // Added X for weekend
    } else if (boost == "ThreeTime") {
        totalMultiplier += (2 * baseMultiplier);
    } else if (boost == "FourTime") {
        totalMultiplier += (3 * baseMultiplier);
    } else if (boost == "FiveTime") {
        totalMultiplier += (4 * baseMultiplier)
    }
    // Step 5: Calcul final avec le boss
    const finalStats = totalMultiplier * boss; // Coefficient final appliquÃ© au boss
    const punchstr = (totalMultiplier * 30).toLocaleString('en-US');
    const punchspd = (totalMultiplier * 15).toLocaleString('en-US');
    const abs = (totalMultiplier * 120).toLocaleString('en-US');
    const speed = (totalMultiplier * 22.5).toLocaleString('en-US');

    // Step 6: Calcul du nombre de stats nÃ©cessaires pour rebirth
    function getRebStats() {
        const n = 2000000 * 1.5 * rebirths; // 1.5 * 2M * rebirths
        return n.toLocaleString('en-US');
    };

    // Affichage des rÃ©sultats
    document.getElementById("result").textContent = `${bossName} : ${Math.floor(finalStats).toLocaleString('en-US')} stats !`;
    document.getElementById("reb").textContent = `Stats needed to rebirth : ${getRebStats().toString()} stats `;
    document.getElementById("punch").textContent = `Punch : ${punchstr} strength and ${punchspd} speed !`;
    document.getElementById("abs").textContent = `Defense train move : ${abs} defense`;
    document.getElementById("blast").textContent = `Ki blast : ${punchstr} energy`;
    document.getElementById("speed").textContent = `Aura boost : ${speed} speed/s`;
}


/*document.getElementById("result").textContent = `You gain ${resultText} stats with ${bossName} !`;
    document.getElementById("reb").textContent = `You need ${zee} stats to rebirth `;
    document.getElementById("punch").textContent = `You gain ${punchstr} strength and ${punchspd} speed with a punch !`;
    document.getElementById("abs").textContent = `You gain ${abs} defense with a defense train move `;
    document.getElementById("blast").textContent = `You gain ${punchstr} energy with a ki blast `;
    document.getElementById("speed").textContent = `You gain about ${speed} speed /s with aura boost`;*/
