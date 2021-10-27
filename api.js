const app = require('express')();
const chalk = require('chalk');
const axios = require('axios');
const cors = require('cors');

// Coded by G3V#3345
// Bad a javascript let's hope I get better B)
// anyways enjoy snooping around

exports.paradise = function(req, res){

    axios.get('https://api.itsparadise.net/', { // api url stuff
    timeout: 2000
  }).then(function (response) {
       res.json({
          playing: {
              song: response.data.now.title, // remember no data
              artist: response.data.now.artist
          },
          dj: {
              name: response.data.dj.name || "AutoDJ"
          },
          listeners: {
              current: response.data.listeners.total,
              unique: response.data.listeners.total,
              
          }
      });
  }).catch(function (error) {
      res.json({
          playing: {
              song: "Error",
              artist: "Error"
          },
          dj: {
              name: "Error" || "AutoDJ"
          },
          listeners: {
              current: 0,
              unique: 0,
              
          }
      });
  })

}


exports.upbeat = function(req, res){

    axios.get('https://upbeatradio.net/api/v1/stats', {
          timeout: 2000
        }).then(function (response) {
             res.json({
                playing: {
                    song: response.data.song.title,
                    artist: response.data.song.artist
                },
                dj: {
                    name: response.data.onair.name || "AutoDJ"
                },
                listeners: {
                    current: response.data.listeners,
                    unique: response.data.listeners,
                    
                }
            });
        }).catch(function (error) {
            res.json({
                playing: {
                    song: "Error",
                    artist: "Error"
                },
                dj: {
                    name: "Error" || "AutoDJ"
                },
                listeners: {
                    current: 0,
                    unique: 0,
                    
                }
            });
        })
    
    }

exports.harmony = function(req, res){

axios.get('https://derrick.xonosho.st/api/nowplaying/1', {
      timeout: 2000
    }).then(function (response) {
         res.json({
            playing: {
                song: response.data.now_playing.song.title,
                artist: response.data.now_playing.song.artist
            },
            dj: {
                name: response.data.live.streamer_name || "AutoDJ"
            },
            listeners: {
                current: response.data.listeners.total,
                unique: response.data.listeners.unique + response.data.listeners.partners,
                
            }
        });
    }).catch(function (error) {
        res.json({
            playing: {
                song: "Error",
                artist: "Error"
            },
            dj: {
                name: "Error" || "AutoDJ"
            },
            listeners: {
                current: 0,
                unique: 0,
                
            }
        });
    })
}

exports.beats = function(req, res){

    axios.get('https://panel.itsbeats.net/api/stats', {
          timeout: 2000
        }).then(function (response) {
             res.json({
                playing: {
                    song: response.data.song.track,
                    artist: response.data.song.artist
                },
                dj: {
                    name: response.data.onAir.presenter.name || "AutoDJ"
                },
                listeners: {
                    current: response.data.onAir.listeners.total,
                    unique: response.data.onAir.listeners.partners,
                    
                }
            });
        }).catch(function (error) {
            res.json({
                playing: {
                    song: "Error",
                    artist: "Error"
                },
                dj: {
                    name: "Error" || "AutoDJ"
                },
                listeners: {
                    current: 0,
                    unique: 0,
                    
                }
            });
        })
    
    }

exports.freshbeat = function(req, res){

axios.get('https://sc.freshbeatradio.uk/api/nowplaying/1', {
      timeout: 2000
    }).then(function (response) {
         res.json({
            playing: {
                song: response.data.now_playing.song.title,
                artist: response.data.now_playing.song.artist
            },
            dj: {
                name: response.data.live.streamer_name || "AutoDJ"
            },
            listeners: {
                current: response.data.listeners.total,
                unique: response.data.listeners.unique,
                
            }
        });
    }).catch(function (error) {
         res.json({
            playing: {
                song: "Error",
                artist: "Error"
            },
            dj: {
                name: "Error" || "AutoDJ"
            },
            listeners: {
                current: 0,
                unique: 0,
                
            }
        });
    })

}


exports.pulse = function(req, res){

    axios.get('https://derrick.xonosho.st/api/nowplaying/3', {
          timeout: 2000
        }).then(function (response) {
             res.json({
                playing: {
                    song: response.data.now_playing.song.title,
                    artist: response.data.now_playing.song.artist
                },
                dj: {
                    name: response.data.live.streamer_name || "AutoDJ"
                },
                listeners: {
                    current: response.data.listeners.total,
                    unique: response.data.listeners.unique,
                    
                }
            });
        }).catch(function (error) {
             res.json({
                playing: {
                    song: "Error",
                    artist: "Error"
                },
                dj: {
                    name: "Error" || "AutoDJ"
                },
                listeners: {
                    current: 0,
                    unique: 0,
                    
                }
            });
        })
    
}


exports.aqua = function(req, res){

    axios.get('https://api.itsaqua.net/stats', {
          timeout: 2000
        }).then(function (response) {
             res.json({
                playing: {
                    song: response.data.nowplaying.title,
                    artist: response.data.nowplaying.artist
                },
                dj: {
                    name: response.data.presenter.name || "AutoDJ"
                },
                listeners: {
                    current: response.data.listeners.total,
                    unique: response.data.listeners.unique,
                    
                }
            });
        }).catch(function (error) {
             res.json({
                playing: {
                    song: "Error",
                    artist: "Error"
                },
                dj: {
                    name: "Error" || "AutoDJ"
                },
                listeners: {
                    current: 0,
                    unique: 0,
                    
                }
            });
        })
    
}








exports.bladefm = function(req, res){

    axios.get('https://bladefm.com.au/api/v2/nowplaying', {
          timeout: 2000
        }).then(function (response) {
             res.json({
                playing: {
                    song: response.data.now_playing.title,
                    artist: response.data.now_playing.artist
                },
                dj: {
                    name: "?" || "AutoDJ"
                },
                listeners: {
                    current: 0,
                    unique: 0,
                    
                }
            });
        }).catch(function (error) {
             res.json({
                playing: {
                    song: "Error",
                    artist: "Error"
                },
                dj: {
                    name: "Error" || "AutoDJ"
                },
                listeners: {
                    current: 0,
                    unique: 0,
                    
                }
            });
        })
    
}

exports.redras = function(req, res){

    axios.get('https://redrasfm.com/api/v1/radio.php', {
          timeout: 2000
        }).then(function (response) {
             res.json({
                playing: {
                    song: response.data.data.song.name,
                    artist: response.data.data.song.artist.name
                },
                dj: {
                    name: response.data.data.show.name || "AutoDJ"
                },
                listeners: {
                    current: response.data.data.listeners,
                    unique: response.data.data.listeners,
                    
                }
            });
        }).catch(function (error) {
             res.json({
                playing: {
                    song: "Error",
                    artist: "Error"
                },
                dj: {
                    name: "Error" || "AutoDJ"
                },
                listeners: {
                    current: 0,
                    unique: 0,
                    
                }
            });
        })
    
}

exports.view = function(req, res){

    axios.get('https://radioview.live/view/paradise', {
          timeout: 2000
        }).then(function (response) {
             res.json({
                success: 'true',
                message: [
                    "/paradise",
                    "/harmony",
                    "/beats",
                    "/freshbeat",
                    "/aqua",
                    "/bladefm",
                    "/redras",
                    "/pulse"
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




exports.select = function(req, res){

axios.get('https://radioview.live/view/paradise', {
      timeout: 2000
    }).then(function (response) {
         res.json({
            success: 'true',
            message: 'Join the discord for examples, radioview.live/discord.'
        });
    }).catch(function (error) {
        console.error(chalk.red('[ERROR] ') + error)
        res.json({
            success: 'false',
            message: 'error'
        });
    })

}