const goalAdvice = [
    {
        goalId: 1,
        category: `spirituality`,
        advice: `"If a man reaches the heart of his own religion, he has reached the heart of the others, too. There is only one God, and there are many paths to Him."`
    },
    {
        goalId: 2,
        category: `finance`,
        advice: `"It only takes $1,000 dollars to start investing in a ROTH RA Account"`
    },
    {
        goalId: 3,
        category: `horoscope`,
        advice: `"Have a good day, duh!"`
    },
]

let globalId = 4

module.exports = {

    getFortunes: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "Bide your time, for success is near.", "Fortune Not Found: Abort, Retry, Ignore?", "Long life is in store for you.", "Your blessing will come abundantly."];


        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },


    getAdviceByCategory: (req, res) => {
        const { category } = req.query;
        const adviceToSend = goalAdvice.find(goal => goal.category === category)
        if (adviceToSend) {
            return res.status(200).send(adviceToSend)
        }
        return res.status(400).send(`Nope`)
    },

    getSubmit: (req, res) => {
        res.status(200).send(true)
    },
    deleteInput: (req, res) => {
        res.status(200).send(true)
    },
    };
