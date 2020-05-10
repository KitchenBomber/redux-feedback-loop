const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


//POST a survey to the database
router.post('/', (req, res) => {
    console.log("in POST", req.body);
    let survey = req.body;
    let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);`;
    pool.query(queryString, [survey.feeling, survey.understanding, survey.support, survey.comments]
    ).then((result) => {
        console.log(result);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error POST /survey', error);
        res.sendStatus(500);
    })
});
//sends the survey to the database

module.exports = router;