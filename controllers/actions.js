const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Match = require('../models/match');
const { request, response } = require('express');

router.post('/createMatch', (request,response)=>{
        const {homeTeamName,awayTeamName, homeScore, awayScore, stadium, homeWin } = request.body;
        const id = mongoose.Types.ObjectId();
        const _match = new Match({
                _id: id,
                homeTeamName: homeTeamName,
                awayTeamName,
                homeScore,
                awayScore,
                stadium,
                homeWin
        });
        return _match.save()
        .then(results =>{
                return response.status(200).json({
                        message: results
                })
        })
        .catch(err =>{
                return response.status(200).json({
                        message: err
                })
        })
})
module.exports = router;