const Zug = require('../models/zug')

const handleError = (res, error) => {
    res.status(500).json({ error })
}

const getLinie = async (req, res) => {
    const fzNr = req.query.fzNr;
    const date = req.query.date

    const date_von = `${date}T00:00`;
    const date_bis = `${date}T23:59`;

    const startDate = new Date(date_von);
    const endDate = new Date(date_bis);

    const matchSet = {
        fzNr,
        /* timeSent: {
            $gte: date_von,
            $lte: date_bis
        } */
        timeSent: {
            $gte: startDate,
            $lte: endDate
        }
    };

    const sortOptions = {
        timeSent: 1 // 1 für aufsteigende Sortierung, -1 für absteigende Sortierung
    };

    const result = await Zug
        .aggregate([
            {
                $match: matchSet/* { fzNr, date } */
            },

            {
                $addFields: {
                    totalDoorIn: {
                        $sum: {
                            $map: {
                                input: { $objectToArray: "$doorIn" },
                                in: "$$this.v"
                            }
                        }
                    },
                    totalDoorOut: {
                        $sum: {
                            $map: {
                                input: { $objectToArray: "$doorOut" },
                                in: "$$this.v"
                            }
                        }
                    }
                }
            },
            {
                $sort: { timeSent: 1 } // Sortierung nach timeSent-Feld in aufsteigender Reihenfolge hinzufügen
            },


            {
                $project: {
                    _id: 0,
                    station: 1,
                    totalDoorIn: 1,
                    totalDoorOut: 1
                }
            },
        ])

        .then((result) => {
            res
                .status(200)
                .json({
                    result
                })
        })

        .catch((err) => handleError(res, err))
}

module.exports = {
    getLinie,
    /*     getStation,
        delStations,
        postStations, */

}