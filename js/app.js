import {
    KanyeWestTweet
} from "./KanyeWestTweet.mjs";

const kanye_quote = document.getElementById("kanye-quote");
const kanye_tweet = new KanyeWestTweet("https://api.kanye.rest", kanye_quote);

// Create refresh functionality
const refresh_button = document.getElementById("refresh-button");
refresh_button.addEventListener("click", () => kanye_tweet.getNewTweet());

// On page load
kanye_tweet.getNewTweet();