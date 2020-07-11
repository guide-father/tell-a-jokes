exports.handler = async (event,context,cb) => {
    return {
      statusCode: 200,
      message:"success",
      body: joke,
    }
  
  }