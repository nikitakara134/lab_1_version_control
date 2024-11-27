document.addEventListener('DOMContentLoaded', function() {
    const timezoneSelector = document.getElementById('timezone');
    const currentTimeDisplay = document.getElementById('current-time');

    // Зміна: додано виключення для викликання помилки
    function updateTime() {
        throw new Error('Test error'); // Генерація помилки для тесту
    }
    
    try {
        // Створення форматувальника часу
        const selectedTimezone = timezoneSelector.value;
        const options = {
            timeZone: selectedTimezone,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false
        };
        const formatter = new Intl.DateTimeFormat([], options);
        const currentTime = formatter.format(new Date());
        currentTimeDisplay.textContent = currentTime;
    } catch (error) {
        console.error("Помилка форматування дати: ", error); 
    }

    // Оновлення часу щосекунди
    setInterval(updateTime, 1000);

    // Оновлення часу при зміні часової зони
    timezoneSelector.addEventListener('change', updateTime);

    // Ініціалізація часу при завантаженні сторінки
    updateTime();
});
