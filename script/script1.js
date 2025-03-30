const talentsMapping = { yes: 1, no: 0 };

function generateBossOptions() {
    const bosses = {
        "X Fighter Trainer": 700,
        "klirin": 1000,
        "Kid Nohag": 1400,
        "Turtle Student": 2000,
        "Radish": 2600,
        "Mapa": 3100,
        "Citizen": 3500,
        "Top X Fighter": 4000,
        "Super Vegetable": 6500,
        "Kaio Student": 9500,
        "Chilly": 9000,
        "Perfect Atom": 16000,
        "SSJ2 Wukong": 22000,
        "Kai-fist Master": 28500,
        "SSJB Wukong": 35000,
        "Broccoli": 50000,
        "SSJG Kakata": 70000,
        "Vegetable (GoD in training)": 110000,
        "Wukong (Omen)": 170000,
        "Vills (50%)": 245000,
        "Vis(20%)": 290000,
        "Vegetable (LBSSJ4)": 330000,
        "Wukong (LBSSJ4)": 370000,
        "Vekuta (LBSSJ4)": 420000,
        "Wukong Rose": 500000,
        "Vekuta (SSJBUI)": 580000,
        "Oozaru": 900000,
        "Goku Black": 3500000,
        "Winter Beerus [REMOVED]": 872000,
        "Winter Roshi [REMOVED]": 255000,
        "Winter Gohan [REMOVED]": 42750,
        "Winter Goku [REMOVED]": 105000,
	    "Oxking": 300000,
        "WT Announcer": 106250,
        "Citizen 2": 106250,
    }

    const bossSelect = document.getElementById("boss");

    for (const boss in bosses){
        const option = document.createElement("option");
        option.text = boss;
        option.value = bosses[boss];
        bossSelect.appendChild(option);
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    generateBossOptions();
});

document.addEventListener("keypress", event => {
    if(event.key == "Enter") {
        calculateGain()
    }
})

document
    .getElementById("calculateButton")
    .addEventListener("click", calculateGain);

function formatNumberWithUnit(number, unit) {
    if (number === 0) return '';
    if (number === 1) return number;
    return number + ' ';
}

function calculateGain() {
    const rebirths = parseInt(document.getElementById("rebirths").value);
    const talents = talentsMapping[document.getElementById("talents").value];
    const boost = document.getElementById("boost").value;
    
    const bossSelect = document.getElementById("boss");
    const boss = parseInt(bossSelect.value);
    const bossName = bossSelect.options[bossSelect.selectedIndex].text;

    if (isNaN(rebirths) || rebirths < 0) {
        document.getElementById("result").textContent =
            "âš ï¸Please enter a valid number for rebirthsâš ï¸";
        return;
    }

    // Step 1: Calculating the base coefficient with rebirths
    const baseMultiplier = 1 + (rebirths * 0.5); // X = 1 + (rebirths * 0.5)

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
        if (rebirths <= 9) {
            let reb = ((rebirths * 1000000) + 500000);
            return reb.toLocaleString('en-US');
        } else if (rebirths > 9) {
            const stats = (500000 + (rebirths * 1000000));
            return stats.toLocaleString('en-US');
        }
        // const m = 2000000
        // const statToReb = Math.floor(m * rebirths - 8000000).toLocaleString('en-US');
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