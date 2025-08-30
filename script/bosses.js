const tbody = document.getElementById("table-body");

function genElementFromHTML(htmlString) {
    const div = document.createElement('tr');
    div.innerHTML = htmlString.trim();
    return div;
}

const bosses = {
    1: {
        name: "X Fighter Trainer",
        img: "../assets/x fighter trainer.png",
        req: "0",
        quest: "0",
        gain: "+1,000 All Stats <br> +200 Zeni"
    },
    2: {
        name: "Krilin",
        img: "../assets/krilin.png",
        req: "0",
        quest: "0",
        gain: "+1,400 All Stats <br>+300 Zeni"
    },
    3: {
        name: "Kid Nohag",
        img: "../assets/gohan.png",
        req: "0",
        quest: "50k - 75k",
        gain: "+2,000 All Stats <br>+400 Zeni"
    },
    4: {
        name: "Turtle Student",
        img: "../assets/kamehouse.png",
        req: "0",
        quest: "75k - 100k",
        gain: "+2,500 All Stats <br>+400 Zeni"
    },
    5: {
        name: "Radish",
        img: "../assets/raditz.png",
        req: "0",
        quest: "100k - 200k",
        gain: "+3,200 All Stats <br>+300 Zeni"
    },
    6: {
        name: "Mapa",
        img: "../assets/mapa.png",
        req: "0",
        quest: "200k - 300k",
        gain: "+4,000 All Stats <br>+300 Zeni"
    },
    7: {
        name: "Citizen",
        img: "../assets/citizen.png",
        req: "75k",
        quest: "300k - 450k",
        gain: "+5,500 All Stats <br>+1,000 Zeni"
    },
    8: {
        name: "Top X Fighter",
        img: "../assets/top x fighter.png",
        req: "112.5k",
        quest: "450k - 750k",
        gain: "+6,000 All Stats <br>+1,500 Zeni"
    },
    9: {
        name: "Super Vegetable",
        img: "../assets/per vegeta.png",
        req: "187.5k",
        quest: "750k - 1.15m",
        gain: "+8,000 All Stats <br>+1,500 Zeni"
    },
    10: {
        name: "Kaio Student",
        img: "../assets/kaio.png",
        req: "275k",
        quest: "1.15m - 2.2m",
        gain: "+10,000 All Stats <br>+2,500 Zeni"
    },
    11: {
        name: "Chilly",
        img: "../assets/freezer.png",
        req: "550k",
        quest: "2.2m - 3.5m",
        gain: "+15,000 All Stats <br>+2,000 Zeni"
    },
    12: {
        name: "Perfect Atom",
        img: "../assets/cell.png",
        req: "875k",
        quest: "3.5m - 5m",
        gain: "+20,000 All Stats <br>+3,000 Zeni"
    },
    13: {
        name: "SSJ2 Wukong",
        img: "../assets/goku ssj2.png",
        req: "1.250m",
        quest: "5m - 6.5m",
        gain: "+25,000 All Stats <br>+2,500 Zeni"
    },
    14: {
        name: "Kai-Fist Master",
        img: "../assets/kai fist master.png",
        req: "1.625m",
        quest: "6.5m - 8m",
        gain: "+35,000 All Stats <br>+2,500 Zeni"
    },
    15: {
        name: "SSJB Wukong",
        img: "../assets/goku blue.png",
        req: "2m",
        quest: "8m - 50m",
        gain: "+45,000 All Stats <br>+3,000 Zeni"
    },
    16: {
        name: "Broccoli",
        img: "../assets/broly.png",
        req: "12.5m",
        quest: "50m- 150m",
        gain: "+70,000 All Stats <br>+4,000 Zeni"
    },
    17: {
        name: "SSJG Kakata",
        img: "../assets/vegeto god.png",
        req: "37.5m",
        quest: "150m - 200m",
        gain: "+85,000 All Stats <br>+6,000 Zeni"
    },
    18: {
        name: "Vegetable (GoD in training",
        img: "../assets/vegeta GoD.png",
        req: "50m",
        quest: "200m - 300m",
        gain: "+110,000 All Stats <br>+9,000 Zeni"
    },
    19: {
        name: "Wukong (Omen)",
        img: "../assets/goku omen.png",
        req: "75m",
        quest: "300m - 600m",
        gain: "+170,000 All Stats <br>+12,000 Zeni"
    },
    20: {
        name: "Vills (50%)",
        img: "../assets/bills.png",
        req: "150m",
        quest: "600m - 1b",
        gain: "+245,000 All Stats <br>+15,000 Zeni"
    },
    21: {
        name: "Vis (20%)",
        img: "../assets/whis.png",
        req: "250ms",
        quest: "1b - 1.8b",
        gain: "+290,000 All Stats <br>+19,000 Zeni"
    },
    22: {
        name: "Vegetable (LBSSJ4)",
        img: "../assets/vegeta lbssj4.png",
        req: "450m",
        quest: "1.8b - 2.7b",
        gain: "+330,000 All Stats <br>+25,000 Zeni"
    },
    23: {
        name: "Wukong (LBSSJ4)",
        img: "../assets/goku lbssj4.png",
        req: "675m",
        quest: "2.7b - 4.2b",
        gain: "+370,000 All Stats <br>+30,000 Zeni"
    },
    24: {
        name: "Vekuta (LBSSJ4)",
        img: "../assets/vegeto lbssj4.png",
        req: "1.05b",
        quest: "4.2b - 5b",
        gain: "+420,000 All Stats <br>+35,000 Zeni"
    },
    25: {
        name: "Wukong Rose",
        img: "../assets/wukong_rose.png",
        req: "1.875b",
        quest: "-",
        gain: "+500,000 All Stats <br>+40,000 Zeni"
    },
    26: {
        name: "Wukong (SSJBUI)",
        img: "../assets/wukong_ssjbui.png",
        req: "1.375b",
        quest: "-",
        gain: "+580,000 All Stats <br>+42,000 Zeni"
    },
    27: {
        name: "Wukong (Master Ultra Instinct)",
        img: "../assets/GokuMUI.png",
        req: "1.875b",
        quest: "0",
        gain: "+680,000 All Stats <br>+52,000 Zeni"
    },
    28: {
        name: "Vegetable (Ultra Ego)",
        img: "../assets/vegeta_ue.png",
        req: "-",
        quest: "-",
        gain: "+730,000 All Stats <br>+63,000 Zeni"
    },
    29: {
        name: "Nohag (Beast)",
        img: "../assets/nohag.png",
        req: "3.375b",
        quest: "-",
        gain: "+780,000 All Stats <br>+69,000 Zeni"
    },
    30: {
        name: "Piccolo (Base) [Piclow]",
        img: "../assets/piccolo_base.png",
        req: "8b",
        quest: "-",
        gain: "+830,000 All Stats <br>+72,000 Zeni"
    },
    31: {
        name: "Caulla (Base)",
        img: "../assets/caulla_base.png",
        req: "10.25b",
        quest: "-",
        gain: "+880,000 All Stats <br>+79,000 Zeni"
    },
    32: {
        name: "Nogah (Awakened)",
        img: "../assets/gohan_pu.png",
        req: "13.25b",
        quest: "-",
        gain: "+910,'00 All Stats <br>+76,000 Zeni"
    }
}

document.addEventListener("DOMContentLoaded", () => {
    for (const boss in bosses) {
        const row = genElementFromHTML(`
            <tr>
                <td>${bosses[boss].name}<br>
                <img src="${bosses[boss].img}" alt="${bosses[boss].name}" />
                </td>
                <td> ${bosses[boss].req}</td>
                <td>${bosses[boss].quest}</td>
                <td> ${bosses[boss].gain} </td>
            </tr>
        `);
        tbody.appendChild(row);
    };
})