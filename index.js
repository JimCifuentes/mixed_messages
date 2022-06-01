
//first set of Inspirational quotes
const inspirational = [`1. “When you have a dream, you’ve got to grab it and never let go.”
— Carol Burnett`,

`2. “Nothing is impossible. The word itself says ‘I’m possible!'”
— Audrey Hepburn`,

`3. “There is nothing impossible to they who will try.”
— Alexander the Great`,

`4. “The bad news is time flies. The good news is you’re the pilot.”
— Michael Altshuler`,

`5. “Life has got all those twists and turns. You’ve got to hold on tight and off you go.”
— Nicole Kidman`]
console.log(inspirational)

// second set of funny quotes.

const funny = [
    `1. “I’m sick of following my dreams, man. I’m just going to ask where they’re going and hook up with ’em later.”
    —Mitch Hedberg`,`
    
    2. “Gentlemen, you can’t fight in here. This is the war room.”
    —President Merkin Muffley (Peter Sellers), Dr. Strangelove `,`
    
    3. “My mother always used to say: The older you get, the better you get, unless you’re a banana.”
    —Rose (Betty White), The Golden Girls`,`
    
    4. “Halloween is the beginning of the holiday shopping season. That’s for women. The beginning of the holiday shopping season for men is Christmas Eve.”
    —David Letterman`,`
    5. “Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.”
—Jack Handey
    `
]

console.log(funny)
// set of facts

const facts = [
    `The scientific term for brain freeze is “sphenopalatine ganglioneuralgia”.`,`

    Canadians say “sorry” so much that a law was passed in 2009 declaring that an apology can’t be used as evidence of admission to guilt.`,`
    
    Back when dinosaurs existed, there used to be volcanoes that were erupting on the moon.`,`
    
    The only letter that doesn’t appear on the periodic table is J.`,`
    
    One habit of intelligent humans is being easily annoyed by people around them, but saying nothing in order to avoid a meaningless argument.`
]

console.log(facts)

const quotes = {inspirational, funny, facts }

console.log(quotes);
//generates a random number integer
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
//picks a number from 0- 2
let pickType = getRandomInt(3);

//pick a quote number

let pickQuote = getRandomInt(5)

const showQuote = () => {
    let typeOfQuote = ''
    switch(pickType) {
        case 0:
            typeOfQuote = 'inspirational';
            break;
        case 1:
            typeOfQuote = 'funny';
            break
        case 2:
            typeOfQuote = 'facts';
            break;
    }


    console.log(`you picked a ${typeOfQuote} Quote. Your random Quote is: ${quotes[typeOfQuote][pickQuote]}`)
}

showQuote()

