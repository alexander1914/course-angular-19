import { Request, Response } from 'express';
import { findCourseById } from '../src/app/db-data';


export function saveCourse(req: Request, res: Response) {

    const id = req.params["id"],
        changes = req.body;

    console.log("Saving course", id, JSON.stringify(changes));

    const course = findCourseById(parseInt(id));

    course.description = changes.description;

    res.status(200).json(course);

}