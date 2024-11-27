// 2.js
function updateTime() {
    const currentTim = new Date().toLocaleTimeString(); // Ось тут помилка: "currentTim" не існує, повинно бути "currentTime"
    document.getElementById('current-time').textContent = currentTim;
}

module.exports = {
    updateTime,
};
