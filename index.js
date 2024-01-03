exports.myFunction = (req, res) =>{

    const message = "Hello node mk!";

    res.status(200).send(message);
};