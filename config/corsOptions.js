const whitelist = [
    'https://www.google.com',
    process.env.Website,
    'http://127.0.0.1:5500',
    'http://localhost:5173',
];

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;