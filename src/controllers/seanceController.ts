import { Seance } from "../models/seance";

class SeanceController {

    findAll = async (req, res, next) => {
        res.status(200)
            .send(await Seance.find().populate("film").populate({path : 'cinema', populate : {path : 'salles'}}))
            .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
            .send(await Seance.findById(req.params.id).populate("film").populate({path : 'cinema', populate : {path : 'salles'}}))
            .end();
        next();
    }
    
    create = async (req, res, next) => {
        res.status(201)
            .send(await Seance.create(req.body))
            .end();
        next();
    }

    update = async (req, res, next) => {
        res.status(200)
            .send(await Seance.findByIdAndUpdate(req.params.id, req.body))
            .end();
        next();
    }

    delete = async (req, res, next) => {
        res.status(200)
            .send(await Seance.findByIdAndRemove(req.params.id))
            .end()
        next();
    }
}

export const seanceController = Object.freeze(new SeanceController());


