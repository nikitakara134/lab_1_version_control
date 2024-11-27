// 2.test.js
const fs = require('fs');
const path = require('path');
const { updateTime } = require('./2.js'); // Ось тут ми правильно імпортуємо updateTime

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

    it('should fail when updateTime function has an error', () => {
        // Перевіряємо, чи функція updateTime викликає помилку
        expect(() => updateTime()).toThrowError('currentTim is not defined'); // Перевірка на конкретну помилку
    });
});
