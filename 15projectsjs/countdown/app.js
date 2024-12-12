const countdownElements = document.querySelectorAll(".remain span");

function calculateTimeRemaining(targetDate) {
  const now = new Date();
  const diff = targetDate - now;

  return {
    total: diff,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function updateCountdownElement(dataId, value) {
  const element = document.querySelector(`.remain span[data-id="${dataId}"]`);
  if (element) element.innerHTML = value;
  console.log(element);
}

function updateCountdownDisplay(timeRemaining) {
  updateCountdownElement(1, timeRemaining.days);
  updateCountdownElement(2, timeRemaining.hours);
  updateCountdownElement(3, timeRemaining.minutes);
  updateCountdownElement(4, timeRemaining.seconds);
}

function startCountDown(targetDate) {
  const interval = setInterval(() => {
    const timeRemaining = calculateTimeRemaining(targetDate);

    if (timeRemaining.total <= 0) {
      clearInterval(interval);
      console.log("The giveaway has ended!");
      return;
    }

    updateCountdownDisplay(timeRemaining);
    console.log(timeRemaining);
  }, 1000);
}

startCountDown(new Date(2025, 4, 11, 30));
