let countdownTimer;
let targetDate;

// Функция для установки даты
function setDate() {
  const inputDate = document.getElementById("end-date").value;
  if (inputDate) {
    targetDate = new Date(inputDate).getTime();
    clearInterval(countdownTimer); // Останавливаем предыдущий таймер, если он был
    startCountdown();
  } else {
    alert("Пожалуйста, установите дату.");
  }
}

// Функция для старта таймера
function startCountdown() {
  countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
      clearInterval(countdownTimer); // Останавливаем таймер, если дата прошла
      document.getElementById("timer").innerHTML = "Время вышло!";
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Обновляем таймер на странице
    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);
  }, 1000);
}

// Функция для форматирования времени (добавляет ноль перед числами < 10)
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
