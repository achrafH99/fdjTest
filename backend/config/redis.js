const Redis = require('ioredis');

const redis = new Redis({
    port: 6379,
    host: '127.0.0.1',
    retryStrategy: (times) => {
        return Math.min(times * 2000, 20000);
    },
});

redis.on('error', (err) => {
    console.error('Error :', err);
});

redis.on('connect', () => {
    console.log('Connected');
});

module.exports = redis;
