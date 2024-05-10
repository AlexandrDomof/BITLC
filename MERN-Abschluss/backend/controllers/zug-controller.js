const Zug = require('../models/zug')

const handleError = (res, error) => {
    res.status(500).json({ error })
}

const getZugs = async (req, res) => {
    const fzNr = req.query.fzNr;
    const dateFrom = req.query.dateFrom
    const dateTo = req.query.dateTo

    const startDate = new Date(dateFrom);
    const endDate = new Date(dateTo);

    const matchSet = {
        fzNr,
        timeSent: {
            /*      $gte: dateFrom,
                 $lte: dateTo */
            $gte: startDate,
            $lte: endDate


        },
    }

    //dynamische Schlüssel und Werte in einem Objekt erstellen 
    //und in einer Schleife weiterverarbeiten
    const groupFields = {};
    const gesamtPassenger = {};

    for (let i = 1; i <= 9; i++) {
        groupFields[`totalDoor${i}In`] = { $sum: `$doorIn.${i}` };
        groupFields[`totalDoor${i}Out`] = { $sum: `$doorOut.${i}` };

        /*  gesamtPassenger[`totalPassengerIn`] = { $sum: `$doorIn.${i}` };
         gesamtPassenger[`totalPassengerOut`] = { $sum: `$doorOut.${i}` }; */

    }

    const result = await Zug
        .aggregate([
            {
                $match: matchSet
            },
            {
                $group: {
                    _id: null,

                    ...groupFields //Fügt alle generierten Felder zur Aggregationsphase der $group hinzu. 
                }
            },

        ])

        .then((result) => {

            //Wir durchlaufen das Ergebnis und erstellen ein transformedResult-Objekt mit umbenannten Schlüsseln, um eine leichter lesbare und strukturiertere Antwort zurückzugeben. 
            const transformedResult = {};

            for (const key in result[0]) {
                transformedResult[key] = result[0][key];
            }
            //------------
            res
                .status(200)
                .json(transformedResult)
        })

        .catch((err) => handleError(res, err))
}



const getZug = (req, res) => {
    Zug
        .findById(req.params.id)
        .then((auslastung) => {
            res
                .status(200)
                .json(auslastung)
        })
        .catch((err) => handleError(res, err))
}

const delZug = (req, res) => {
    Zug
        .findByIdAndDelete(req.params.id)
        .then((zug) => {
            res
                .status(200)
                .json(zug)
        })
        .catch((err) => handleError(res, err))
}

const postZug = (req, res) => {
    const zug = new Zug(req.body)

    zug
        .save()
        .then((zug) => {
            res
                .status(200)
                .json(zug)
        })
        .catch((err) => handleError(res, err))
}

module.exports = {
    getZugs,
    getZug,
    delZug,
    postZug,

}