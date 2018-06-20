//require in the twit package
const Twit = require('twit')

module.exports = async message => {

//objecting referencing your credentials that allows the bot to tweet to your account
  const T = new Twit({
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET
});

//calls the function that generates and posts tweets
tweetPoem()

function tweetPoem() {

//in this example, the bot is going to tweet random lines from the Anne Sexton poem "Yellow." In order to prevent the bot from tweeting too many repeats (which can cause it to get flagged by Twitter), we are going to compose tweets by combining phrases from two arrays.
  const greetings = [
    `The poet said, `,
    `The poet wrote, `,
    `Anne Sexton wrote, `,
    `Anne Sexton said, `,
    `She said, `,
    `She wrote, `,
    `It is written: `,
    `Listen: `,
    `Pay attention: `,
    `Know this: `,
    `I must tell you: `
  ]

  const lines = [
  `"When they turn the sun / on again I'll plant children / under it, I'll light up my soul / with a match and let it sing."`,
  `"I'll / take my bones and polish them,"`,
  `"I'll / vacuum up my stale hair,"`,
  `"I'll / pay all my neighbors' bad debts,"`,
  `"I'll / write a poem called Yellow and put / my lips down to drink it up,"`,
  `"I'll / feed myself spoonfuls of heat and / everyone will be home playing with / their wings and the planet will / shudder with all those smiles and / there will be no poison anywhere,"`,
  `"no plague / in the sky and there will be a mother-broth / for all of the people and we will / never die, not one of us,"`,
  `"we'll go on / won't we?"`
  ]

//generate tweets by concatenating a random string from the greeting array and a random string from the lines array
  let tweet = greetings[Math.floor(greetings.length * Math.random())] + lines[Math.floor(lines.length * Math.random())]
  
//Post the tweet
  T.post('statuses/update', { status: tweet }, tweeted);

  // Callback for when the tweet is sent
  function tweeted(err, data, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('Success: ' + data.text);
    }
  }


}
//we don't need our lambda to return anything
  return {

  }
}
