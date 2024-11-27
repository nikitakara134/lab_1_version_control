// 2.js
const updateTime = () => {
    const currentTime = new Date();
    const timeZone = document.getElementById('timezone').value;
    const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = currentTime.toLocaleTimeString('uk-UA', options);
    
    // Викликаємо помилку з неправильним іменем змінної
    if (!document.getElementById('current-Tim')) {
        throw new Error('currentTim is not defined'); // Генеруємо помилку
    }
    
    document.getElementById('current-Tim').textContent = `Поточний час: ${formattedTime}`;
};

module.exports = { updateTime };
