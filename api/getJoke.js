var giveMeAJoke = require('give-me-a-joke');


exports.handler = async (event,context,cb) => {
  
  function joker() {
    return new Promise(function (resolve, reject) {
      giveMeAJoke.getRandomDadJoke(function (joke) {
        resolve(joke)

      });
    })
  }

  //getting random joke
  let joke = await joker()
   return cb(null, {
    statusCode: 200,
    body: JSON.stringify({
      statusCode: 200,
      message:"success",
      body: joke,
    })
  })
}

