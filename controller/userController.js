userSignup = (req, res) => {
  try {
    console.log(`==========================\n`, req.body);
    res.status(200).send(`OK`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userSignup };
