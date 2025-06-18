

import express from 'express';
import { Application } from "express";
import { getAllCourses } from './server/get-courses.route';
import { saveCourse } from './server/save-course.route';
const cors = require('cors');

const bodyParser = require('body-parser');

const app: Application = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').put(saveCourse);



const httpServer = app.listen(9000, () => {
    const address = httpServer.address();
    if (address) { // Check if address is not null or undefined
        if (typeof address === 'string') {
            // If the address is a string (e.g., a named pipe), handle it
            console.log(`HTTP REST API Server running at ${address}`);
        } else {
            // Otherwise, it's an AddressInfo object
            console.log("HTTP REST API Server running at http://localhost:" + address.port);
        }
    } else {
        console.error("Failed to get server address.");
    }
});