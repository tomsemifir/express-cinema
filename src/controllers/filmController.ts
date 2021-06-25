import { Cinema } from "../models/cinema";
import { Film } from "../models/film";
import { Seance } from "../models/seance";

class FilmController {

    findAll = async (req, res, next) => {
        res.status(200)
            .send(await Film.find())
            .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
            .send(await Film.findById(req.params.id))
            .end();
        next();
    }

    create = async (req, res, next) => {
        res.status(201)
            .send(await Film.create(req.body))
            .end();
        next();
    }

    update = async (req, res, next) => {
        res.status(200)
            .send(await Film.findByIdAndUpdate(req.params.id, req.body))
            .end();
        next();
    }

    delete = async (req, res, next) => {
        res.status(200)
            .send(await Film.findByIdAndRemove(req.params.id))
            .end()
        next();
    }
}

export const filmController = Object.freeze(new FilmController());


