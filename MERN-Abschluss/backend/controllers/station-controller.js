const Zug = require('../models/zug')

const handleError = (res, error) => {
    res.status(500).json({ error })
}

const getStation = async (req, res) => {
    const station = req.query.station
    const dateFrom = req.query.dateFrom
    const timeFrom = req.query.timeFrom
    const dateTo = req.query.dateTo
    const timeTo = req.query.timeTo

    const matchSet = {
        station,
        date: {
            $gte: dateFrom,
            $lte: dateTo
        },
        time: {
            $gte: timeFrom,
            $lte: timeTo
        },
    }

    const result = await Zug
        .aggregate([
            {
                $match: matchSet
            },

            {
                $addFields: {

                    totalZugIn: {
                        $sum: {
                            $map: {
                                input: { $objectToArray: "$doorIn" },
                                in: "$$this.v"
                            }
                        }
                    },
                    totalZugOut: {
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
                $project: {
                    _id: 0,
                    fzNr: 1,
                    totalZugIn: 1,
                    totalZugOut: 1
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
    getStation,
    /*     getStation,
        delStations,
        postStations, */

}