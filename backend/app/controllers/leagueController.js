const League = require('../models/league');
const redis = require('../../config/redis');


const getAllLeagues = async (req, res) => {
    try {
        const leagues = await redis.get('leagues');
        if (leagues) {
            return res.status(200).json(JSON.parse(leagues));
        } else {
            const leagues = await League.find();
            redis.set('leagues', JSON.stringify(leagues));
            return res.status(200).json(leagues);
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getLeagueById = async (req, res) => {
    const { id } = req.params;
    try {
        const leagueCache = await redis.get(`league:${id}`);
        if (leagueCache) {
            res.status(200).json(JSON.parse(leagueCache));
            return;
        }
        const league = await League.findById(id).exec();
        if (!league) {
            res.status(404).json({ message: `League with id ${id} not found` });
            return;
        }
        await redis.set(`league:${id}`, JSON.stringify(league));
        res.status(200).json(league);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = {
    getAllLeagues,
    getLeagueById
};
