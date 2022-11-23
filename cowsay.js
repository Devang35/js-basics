const cowsay = require("cowsay")
const quote = require("inspirational-quotes")

let Quote = quote.getQuote().text

// read difference between getQuote and getRandomQuote

console.log(
    cowsay.say({
        text :Quote,
        e : "xx",
        T : "U "
    })
)