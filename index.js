const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api/tasks', taskRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
