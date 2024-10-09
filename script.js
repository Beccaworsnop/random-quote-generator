const quotes = [
    "“To go wrong in one's own way is better than to go right in someone else's.” - Fyodor Dostoevsky",
    "“There is nothing either good or bad, but thinking makes it so.” - William Shakespeare, Hamlet",
    "“You do not write your life with words...You write it with actions. What you think is not important. It is only important what you do.” - Patrick Ness",
    "“There may be times when we are powerless to prevent injustice, but there must never be a time when we fail to protest.” - Elie Wiesel",
    "“A truth that's told with bad intent beats all the lies you can invent.” - William Blake",
];

function getNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}

document.getElementById("new-quote").addEventListener("click", getNewQuote);