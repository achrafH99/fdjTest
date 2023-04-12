const Team = require('../models/team');
const League = require('../models/league');
const redis = require('../../config/redis');

const getAllTeams = async (req, res) => {
    try {
        const teams = await redis.get('teams');
        if (teams) {
            return res.status(200).json(JSON.parse(teams));
        } else {
            const teams = await Team.find();
            redis.set('teams', JSON.stringify(teams));
            return res.status(200).json(teams);
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getTeamById = async (req, res) => {
    const { id } = req.params;
    try {
        const team = await redis.get('team:${id}');
        if (team) {
            res.json(team);
        } else {
            const team = await Team.findById(id);
            if (team) {
                redis.set(`team:${id}`, JSON.stringify(team));
                return res.status(200).json(team);
            } else {
                return res.status(404).json({ message: 'Team not found' });
            }
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getTeamsByLeague = async (req, res, next) => {
    const id = req.params.id;
    try {
        const leagueTeams = await redis.get(`leagueTeams:${id}`);
        if (leagueTeams) {
            res.status(200).json(JSON.parse(leagueTeams));
        }
        else {
            const leagueTeams = await League.findById(id).populate('teams');
            if (leagueTeams) {
                redis.set(`leagueTeams:${id}`, JSON.stringify(leagueTeams));
                return res.status(200).json(JSON.parse(leagueTeams));
            } else {
                return res.status(404).json({ message: 'no Teams found for this League' });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};


module.exports = {
    getAllTeams,
    getTeamById,
    getTeamsByLeague
};
