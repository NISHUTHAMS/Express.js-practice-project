const express = require('express');
const app = express();

// Custom middleware
const requestTimeStampLogger = (req, res, next) => {
    const timeStamp = new Date().toISOString();
    console.log(`${timeStamp} from ${req.method} to ${req.url}`);
    next();
};

// Use middleware
app.use(requestTimeStampLogger);

// Routes
app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

// Server
app.listen(3000, () => {
    console.log('Server is now running on port 3000');
});
