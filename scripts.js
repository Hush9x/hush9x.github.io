function updateTime() {
    const now = new Date();
    const optionsDate = { month: 'short', day: 'numeric' };
    const date = now.toLocaleDateString('en-US', optionsDate);
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const time = now.toLocaleTimeString('en-US', optionsTime);
    document.getElementById('time-display').textContent = `${date} | ${time}`;
}

function updateBatteryStatus(battery) {
    const batteryLevel = document.getElementById('battery-level');
    const batteryCharge = document.getElementById('battery-charge');
    const lightningBolt = document.getElementById('lightning-bolt');
    
    batteryLevel.setAttribute('width', `${battery.level * 20}`);
    batteryCharge.style.display = battery.charging ? 'block' : 'none';
    
    const batteryPercentage = `${Math.floor(battery.level * 100)}%`;
    const tooltipText = battery.charging ? `${batteryPercentage} - charging` : batteryPercentage;
    
    const tooltip = document.getElementById('battery-tooltip');
    tooltip.textContent = tooltipText;
    
    lightningBolt.style.display = battery.charging ? 'block' : 'none';
}

if ('getBattery' in navigator) {
    navigator.getBattery().then(function(battery) {
        updateBatteryStatus(battery);
        battery.addEventListener('levelchange', function() {
            updateBatteryStatus(battery);
        });
        battery.addEventListener('chargingchange', function() {
            updateBatteryStatus(battery);
        });
    });
}

updateTime();
setInterval(updateTime, 1000);


document.addEventListener("DOMContentLoaded", function () {
    const logoIcon = document.getElementById("logo-icon");

    if (logoIcon) {
        logoIcon.addEventListener("click", function () {
            window.location.href = "newpage.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const logoIcon = document.getElementById("ai-icon");

    if (logoIcon) {
        logoIcon.addEventListener("click", function () {
            window.location.href = "ai.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const logoIcon = document.getElementById("mail-icon");

    if (logoIcon) {
        logoIcon.addEventListener("click", function () {
            window.location.href = "/active/embed.html?url=https://mail.google.com/";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const logoIcon = document.getElementById("chat-icon");

    if (logoIcon) {
        logoIcon.addEventListener("click", function () {
            window.location.href = "/active/embed.html?url=https://nexus-chat-rooms.github.io/nexuschatroom";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const logoIcon = document.getElementById("search-icon");

    if (logoIcon) {
        logoIcon.addEventListener("click", function () {
            window.location.href = "newtabs.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const imageLinks = {
        "assets/tiktok.png": "https://tiktok.com/",
        "assets/google.png": "https://google.com/",
        "assets/discord.png": "https://discord.com/",
        "assets/snapchat.png": "https://snapchat.com/",
        "assets/roblox.png": "https://www.roblox.com/",
        "assets/nowgg.png": "https://now.gg/",
        "assets/geforce.png": "https://www.nvidia.com/en-us/geforce-now/",
        "assets/chatgpt.png": "https://chat.openai.com/",
        "assets/chat.png": "https://nexus-chat-rooms.github.io/nexuschatroom/",
        "assets/mail.png": "https://mail.google.com/",
        "assets/spotify.png": "https://spotify.com/",
        "assets/netflix.png": "https://netflix.com/",
        "assets/youtube.png": "https://youtube.com/",
        "assets/twitch.png": "https://twitch.tv/",
        "assets/twitter.png": "https://twitter.com/",
        "assets/orbit.png": "https://playervpn.github.io/"
    };

    document.querySelectorAll(".imgnewpage img").forEach(img => {
        img.addEventListener("click", function () {
            const imageUrl = this.getAttribute("src");
            if (imageLinks[imageUrl]) {
                window.location.href = `/active/embed.html?url=${encodeURIComponent(imageLinks[imageUrl])}`;
            }
        });
    });
});
