function updateCountdown() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYear = new Date(nextYear, 0, 1); // Новый год 1 января

    const remainingTime = newYear - now;
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

    document.getElementById('countdown').innerHTML = 
        days + " дней " + 
        hours + " часов " + 
        minutes + " минут " + 
        seconds + " секунд";
}

// Обновляем счетчик каждую секунду
setInterval(updateCountdown, 1000);

// Инициализируем счетчик при загрузке
updateCountdown();