const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// ...existing code...

app.use(cookieParser());

// ...existing code...
