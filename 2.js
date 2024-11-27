// 2.js
const updateTime = () => {
    const currentTime = new Date();
    const timeZone = document.getElementById('timezone').value;
    const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = currentTime.toLocaleTimeString('uk-UA', options);

    // Видаляємо необхідний елемент або неправильний виклик функції
    document.getElementById('non-existent-id').textContent = `Поточний час: ${formattedTime}`; // Це призведе до помилки

    // Це буде помилка, яку ми хочемо перевірити
    // throw new Error('currentTim is not defined');
};

module.exports = { updateTime };
