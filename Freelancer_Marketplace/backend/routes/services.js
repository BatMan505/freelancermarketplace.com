const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Get all services
router.get('/', async (req, res) => {
    const services = await Service.find().populate('freelancer', 'name skills');
    res.json(services);
});

module.exports = router;
