const Player = require('../models/player');
const Team = require('../models/team');
const redis = require('../../config/redis');



const getAllPlayers = async (req, res) => {
    try {
        const players = await redis.get('players');
        if (players) {
            return res.status(200).json(JSON.parse(players));
        } else {
            const players = await Player.find();
            redis.set('players', JSON.stringify(players));
            return res.status(200).json(players);
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getPlayerById = async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        if (!player) {
            return res.status(404).json({ message: "Player not found" });
        }
        res.json(player);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    const { id } = req.params;
    try {
        const player = await redis.get('player:${id}');
        if (player) {
            res.json(player);
        } else {
            const player = await Player.findById(id);
            if (player) {
                redis.set(`player:${id}`, JSON.stringify(player));
                return res.status(200).json(player);
            } else {
                return res.status(404).json({ message: 'Player not found' });
            }
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getPlayersByTeam = async (req, res, next) => {
    const teamId = req.params.id;
    try {
        const teamPlayers = await redis.get(`teamPlayers:${teamId}`);
        if (teamPlayers) {
            res.status(200).json(JSON.parse(teamPlayers));
        }
        else {
            const teamPlayers = await Team.findById(teamId).populate('players');
            if (teamPlayers) {
                redis.set(`teamPlayers:${teamId}`, JSON.stringify(teamPlayers));
                return res.status(200).json(JSON.parse(teamPlayers));
            } else {
                return res.status(404).json({ message: 'no Players found for this Team' });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};


module.exports = {
    getAllPlayers,
    getPlayerById,
    getPlayersByTeam
};
