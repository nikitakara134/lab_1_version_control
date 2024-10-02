document.addEventListener('DOMContentLoaded', function() {
    const timezoneSelector = document.getElementById('timezone');
    const currentTimeDisplay = document.getElementById('current-time');

    function updateTime() {
        const selectedTimezone = timezoneSelector.value;
        const options = {
            timeZone: selectedTimezone,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false
        };

        try {
            const formatter = new Intl.DateTimeFormat([], options);
            const currentTime = formatter.format(new Date());
            currentTimeDisplay.textContent = currentTime;
        } catch (error) {
            console.error("Error formatting date: ", error);
        }
    }

    // Update time every second
    setInterval(updateTime, 1000);

    // Update time when the timezone changes
    timezoneSelector.addEventListener('change', updateTime);

    // Initialize time on page load
    updateTime();
});
