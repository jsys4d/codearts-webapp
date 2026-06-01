const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongodb-service:27017/codearts';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error MongoDB:', err));

const VisitSchema = new mongoose.Schema({ timestamp: Date });
const Visit = mongoose.model('Visit', VisitSchema);

app.get('/', async (req, res) => {
  await Visit.create({ timestamp: new Date() });
  const count = await Visit.countDocuments();
  res.json({
    status: 'OK',
    app: 'Codearts Solutions WebApp',
    visitas: count,
    pod: process.env.HOSTNAME || 'local'
  });
});

app.get('/health', (req, res) => res.json({ status: 'healthy' }));

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));