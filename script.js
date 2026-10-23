// =========================================================
// VentureVerse 2026 - script.js
// Feature 1: Countdown timer to the event
// Feature 2: Mobile menu (hamburger) open / close
// =========================================================

// ---------- Feature 1: Countdown ----------
// Event starts 12 November 2026, 10:00 AM (India time, UTC+05:30)
const eventDate = new Date("2026-11-12T10:00:00+05:30").getTime();

const daysEl = document.getElementById("cd-days");
const hoursEl = document.getElementById("cd-hours");
const minsEl = document.getElementById("cd-mins");
const secsEl = document.getElementById("cd-secs");

// Adds a leading zero so 5 becomes "05"
function pad(number) {
  return String(number).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date().getTime();
  const difference = eventDate - now; // milliseconds left

  // If the event has started, show zeros and a message
  if (difference <= 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML =
      "<p><strong>The event has started. Welcome to VentureVerse 2026!</strong></p>";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minsEl.textContent = pad(minutes);
  secsEl.textContent = pad(seconds);
}

updateCountdown();                          // run once immediately
const timer = setInterval(updateCountdown, 1000); // then every second

// ---------- Feature 2: Mobile menu ----------
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function () {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu after tapping a link (so it doesn't cover the page)
nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
