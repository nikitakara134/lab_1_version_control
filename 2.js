// 2.js
const updateTime = () => {
    const currentTime = new Date();
    const timeZone = document.getElementById('timezone').value;
    const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = currentTime.toLocaleTimeString('uk-UA', options);
    document.getElementById('current-time').textContent = `Поточний час: ${formattedTime}`;
};

module.exports = { updateTime };
