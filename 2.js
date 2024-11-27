// 2.js
const updateTime = () => {
    const currentTime = new Date();
    const timeZone = document.getElementById('timezone').value;
    const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = currentTime.toLocaleTimeString('uk-UA', options);

    // Виправлений коментар
    console.log("Цей код оновлює час за вибраною часовою зоною");

    document.getElementById('current-time').textContent = `Поточний час: ${formattedTime}`;
};

module.exports = { updateTime };
