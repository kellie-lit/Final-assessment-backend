const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//.GET for FORTUNES
const { getFortunes } = require('./controller')
app.get("/api/fortune", getFortunes);

//. GET FOR ADVICE
const { getAdviceByCategory } = require('./controller')
app.get("/api/goal-advice/", getAdviceByCategory)

//.POST FOR SUBSCRIBE BUTTON
app.post('/action-page', function (req, res) {
    var firstName = req.body.firstName;
    var emailAddress = req.body.emailAddress;
    console.log("Thank you = " + firstName + ", for subscribing to our newsletter with " + emailAddress);
    res.end("yes");
});
const { getSubmit } = require(`./controller`)
const { deleteInput } = require(`./controller`)

//goalList endpoints
app.post("/api/action-page", getSubmit)
app.delete('/api/action-page/:id', deleteInput)

app.listen(4000, () => console.log("Server running on 4000"));




