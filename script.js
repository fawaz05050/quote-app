const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const btn = document.getElementById("newQuote");
const copyBtn = document.getElementById("copyBtn");

async function getQuote() {
  quoteEl.textContent = "Loading...";
  authorEl.textContent = "";

  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();

    quoteEl.textContent = data.quote;
    authorEl.textContent = "- " + data.author;
  } catch (error) {
    quoteEl.textContent = "Could not load a quote. Try again.";
  }
}

// NEW: copy the quote
copyBtn.addEventListener("click", async function () {
  try {
    await navigator.clipboard.writeText(
      quoteEl.textContent + " " + authorEl.textContent
    );
    copyBtn.textContent = "Copied!";
    setTimeout(function () {
      copyBtn.textContent = "Copy";
    }, 1500);
  } catch (error) {
    copyBtn.textContent = "Failed";
  }
});

btn.addEventListener("click", getQuote);
getQuote();