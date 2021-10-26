const app = require('express')();
const chalk = require('chalk');
const axios = require('axios');
const cors = require('cors');

// Coded by G3V#3345
// Bad a javascript let's hope I get better B)
// anyways enjoy snooping around

exports.select = function(req, res){

    axios.get('https://radioview.live/view/paradise', {
          timeout: 2000
        }).then(function (response) {
             res.json({
                success: 'true',
                message: 'Coming Soon'
            });
        }).catch(function (error) {
            console.error(chalk.red('[ERROR] ') + error)
            res.json({
                success: 'false',
                message: 'error'
            });
        })
    
}


exports.select = function(req, res){

    axios.get('https://panel.itsbeats.net/api/stats', {
          timeout: 2000
        }).then(function (response) {
             res.json({data: [
                 {
                     listeners: response.data.onAir.listeners.total,
                     date_raw: 42332243212431
                 }
             ]
            });
        }).catch(function (error) {
            console.error(chalk.red('[ERROR] ') + error)
            res.json({
                success: 'false',
                message: 'error'
            });
        })
    
}