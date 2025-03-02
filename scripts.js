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
