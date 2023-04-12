const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.set('debug', true);
const connectToDatabase = require('./config/db');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
connectToDatabase();

app.use(express.json());

const leagueRoutes = require('./app/routes/leagueRoutes');
const teamRoutes = require('./app/routes/teamRoutes');
const playerRoutes = require('./app/routes/playerRoutes');

const routes = {
    league: leagueRoutes,
    team: teamRoutes,
    player: playerRoutes
};
app.use('/api', routes.league);
app.use('/api', routes.team);
app.use('/api', routes.player);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});