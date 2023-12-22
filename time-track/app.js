const dailyEl = document.getElementById("daily-btn");
const weeklyEl = document.getElementById("weekly-btn");
const monthlyEl = document.getElementById("monthly-btn");
const twoContent = document.getElementById("two-content-div");
const threeContent = document.getElementById("three-content-div");
const fourContent = document.getElementById("four-content-div");
const fiveContent = document.getElementById("five-content-div");
const sixContent = document.getElementById("six-content-div");
const sevenContent = document.getElementById("seven-content-div");

weeklyEl.classList.add("active")
async function veri() {
    await fetch("./data.json").then(res => res.json()).then((data) => {
        const menu = [dailyEl, weeklyEl, monthlyEl];
        const icerik = [twoContent, threeContent, fourContent, fiveContent, sixContent, sevenContent];
        for (let a = 0; a < 6; a++) {
            icerik[a].innerHTML = `<h4>${data[a].title}</h4>
<h1>${data[a].timeframes.weekly.current} Hours</h1>
<p>Last Week - ${data[a].timeframes.weekly.previous}hrs</p>`
        }
        for (let i = 0; i < 3; i++) {
            menu[i].addEventListener("click", () => {
                if (i == 1) {
                    weeklyEl.classList.add("active")
                    monthlyEl.classList.remove("active")
                    dailyEl.classList.remove("active")
                    for (let a = 0; a < 6; a++) {
                        icerik[a].innerHTML = `<h4>${data[a].title}</h4>
    <h1>${data[a].timeframes.weekly.current} Hours</h1>
    <p>Last Week - ${data[a].timeframes.weekly.previous}hrs</p>`
                    }
                }
                if (i == 0) {
                    weeklyEl.classList.remove("active")
                    monthlyEl.classList.remove("active")
                    dailyEl.classList.add("active")
                    for (let a = 0; a < 6; a++) {
                        icerik[a].innerHTML = `<h4>${data[a].title}</h4>
    <h1>${data[a].timeframes.daily.current} Hours</h1>
    <p>Last Week - ${data[a].timeframes.daily.previous}hrs</p>`;
                    }
                }
                if (i == 2) {
                    weeklyEl.classList.remove("active")
                    monthlyEl.classList.add("active")
                    dailyEl.classList.remove("active")
                    for (let a = 0; a < 6; a++) {
                        icerik[a].innerHTML = `<h4>${data[a].title}</h4>
    <h1>${data[a].timeframes.monthly.current} Hours </h1>
    <p>Last Week - ${data[a].timeframes.monthly.previous}hrs</p>`
                    }
                }

            })
        }
    });
}
veri();