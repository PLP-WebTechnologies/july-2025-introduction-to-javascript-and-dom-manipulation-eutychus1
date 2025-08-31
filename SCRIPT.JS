// =====================
// Part 1: Variables & Conditionals
// =====================
document.getElementById("checkAgeBtn").addEventListener("click", () => {
  let age = parseInt(document.getElementById("ageInput").value);
  let result = "";

  if (isNaN(age)) {
    result = "❌ Please enter a valid number.";
  } else if (age < 18) {
    result = "You are a minor 👶";
  } else if (age < 60) {
    result = "You are an adult 👨‍🦱";
  } else {
    result = "You are a senior 👴";
  }

  let output = document.getElementById("ageResult");
  output.textContent = result;
  output.classList.add("fade-in");

  setTimeout(() => output.classList.remove("fade-in"), 800);
});

// =====================
// Part 2: Custom Functions
// =====================

// Function 1: Calculate total
function calculateTotal(prices) {
  let total = 0;
  for (let price of prices) {
    total += price;
  }
  return total;
}

// Function 2: Format greeting
function formatGreeting(name) {
  return `Hello, ${name}! Welcome 🎊`;
}

document.getElementById("calcTotalBtn").addEventListener("click", () => {
  let cart = [10, 20, 15]; // sample prices
  let total = calculateTotal(cart);
  let result = document.getElementById("cartResult");

  result.textContent =
    formatGreeting("Euty") + ` Your cart total is: $${total}`;

  result.classList.add("fade-in");
  setTimeout(() => result.classList.remove("fade-in"), 800);
});

// =====================
// Part 3: Loops with Animation
// =====================
document.getElementById("countdownBtn").addEventListener("click", () => {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old countdown
  let number = 5;

  let interval = setInterval(() => {
    if (number > 0) {
      let li = document.createElement("li");
      li.textContent = number;
      li.classList.add("fade-in");
      list.appendChild(li);
      number--;
    } else {
      let li = document.createElement("li");
      li.textContent = "🎉 Blast off!";
      li.classList.add("fade-in");
      list.appendChild(li);
      clearInterval(interval);
    }
  }, 800);
});

// =====================
// DOM Interactions (Toggle with fade)
// =====================
document.getElementById("toggleBtn").addEventListener("click", () => {
  let text = document.getElementById("toggleText");
  text.classList.toggle("hidden");
});
