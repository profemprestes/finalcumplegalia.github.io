document.addEventListener('DOMContentLoaded', () => {
    const EVENT_DATE = new Date('2025-05-10T13:00:00-03:00');
    const elements = {
        days: document.getElementById('countdown-days'),
        hours: document.getElementById('countdown-hours'),
        minutes: document.getElementById('countdown-minutes'),
        seconds: document.getElementById('countdown-seconds')
    };
    const container = document.querySelector('.countdown-container');
    const message = document.getElementById('countdown-message');

    function getTimeRemaining() {
        const now = new Date();
        const diff = EVENT_DATE - now;

        if (diff < 0) return { expired: true };
        return {
            expired: false,
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60)
        };
    }

    function updateCountdown() {
        const time = getTimeRemaining();
        if (time.expired) {
            container.style.display = 'none';
            message.style.display = 'block';
            return;
        }

        Object.entries(elements).forEach(([key, el]) => {
            el.textContent = String(time[key]).padStart(2, '0');
        });
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    window.addEventListener('beforeunload', () => clearInterval(interval));
});