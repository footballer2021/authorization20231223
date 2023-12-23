import { RequestHandler } from "express";
import db from "../db";

const getUsers: RequestHandler = (req, res) => {
    db.query('SELECT * FROM players', (error, result) => {
        res.send(result);
    });
};

export { getUsers };