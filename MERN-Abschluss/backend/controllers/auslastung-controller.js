const Auslastung = require("../models/auslastung");
const handleError = (res, error) => {
  res.status(500).json({ error });
};

const getAuslastungs = (req, res) => {
  const fzNr = req.query.fzNr;

  Auslastung.find({ fzNr })
    .sort({ timeSent: -1 })
    .limit(1)
    .then((auslastungs) => {
      res.status(200).json(auslastungs);
    })
    .catch((err) => handleError(res, err));
};

const getAuslastung = (req, res) => {
  Auslastung.findById(req.params.id)
    .then((auslastung) => {
      res.status(200).json(auslastung);
    })
    .catch((err) => handleError(res, err));
};

const delAuslastung = (req, res) => {
  Auslastung.findByIdAndDelete(req.params.id)
    .then((auslastung) => {
      res.status(200).json(auslastung);
    })
    .catch((err) => handleError(res, err));
};

const postAuslastung = (req, res) => {
  const auslastung = new Auslastung(req.body);

  auslastung
    .save()
    .then((auslastung) => {
      res.status(200).json(auslastung);
    })
    .catch((err) => handleError(res, err));
};

module.exports = {
  getAuslastungs,
  getAuslastung,
  delAuslastung,
  postAuslastung,
};
