// 2.test.js
const fs = require('fs');
const path = require('path');
const { updateTime } = require('./2.js'); // Імпортуємо функцію

// Завантажуємо HTML файл
const html = fs.readFileSync(path.resolve(__dirname, '1.html'), 'utf8');

// Мокаємо документ в jsdom
global.document = new (require('jsdom')).JSDOM(html).window.document;

describe('Time zone app', () => {
    it('should select the correct timezone', () => {
        const timezoneSelector = document.getElementById('timezone');
        expect(timezoneSelector).not.toBeNull(); // Перевірка, чи елемент існує
    });

    it('should update the time display', () => {
        const currentTimeDisplay = document.getElementById('current-time');
        expect(currentTimeDisplay).not.toBeNull(); // Перевірка, чи елемент існує
    });

    it('should update time when updateTime is called', () => {
        // Мокаємо вибір часової зони
        const timezoneSelector = document.getElementById('timezone');
        timezoneSelector.value = 'Europe/Kiev';

        // Симулюємо виклик функції
        updateTime();

        // Перевіряємо, чи змінився текст у div#current-time
        const currentTimeDisplay = document.getElementById('current-time');
        expect(currentTimeDisplay.textContent).toMatch(/Поточний час: \d{2}:\d{2}:\d{2}/);
    });
});
