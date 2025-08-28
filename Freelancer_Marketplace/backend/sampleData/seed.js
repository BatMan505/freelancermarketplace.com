const mongoose = require('mongoose');
const connectDB = require('../config/db');
const User = require('../models/User');
const Service = require('../models/Service');

connectDB();

const seedData = async () => {
    await User.deleteMany();
    await Service.deleteMany();

    const freelancer1 = await User.create({
        name: 'Alice',
        email: 'alice@example.com',
        password: 'password123',
        role: 'freelancer',
        skills: ['React', 'Node.js']
    });

    const freelancer2 = await User.create({
        name: 'Bob',
        email: 'bob@example.com',
        password: 'password123',
        role: 'freelancer',
        skills: ['Python', 'Django']
    });

    await Service.create({
        freelancer: freelancer1._id,
        title: 'Build a React Website',
        description: 'I will build a modern React website',
        price: 200,
        deliveryTime: '3 days',
        category: 'Web Development'
    });

    await Service.create({
        freelancer: freelancer2._id,
        title: 'Python Automation Script',
        description: 'I will create an automation script in Python',
        price: 100,
        deliveryTime: '2 days',
        category: 'Automation'
    });

    console.log('Sample data inserted');
    process.exit();
};

seedData();


