exports.myFunction = (req, res) =>{

    const message = "Hello node!";

    res.status(200).send(message);
};