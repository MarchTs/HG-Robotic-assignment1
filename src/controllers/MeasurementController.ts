import express, { Request, Response } from 'express';
import MeasurementFacade from '../facades/MeasurementFacade';
import { ConvertAreaForm, ConvertDistanceForm } from '../forms/MeasurementForm';

const router = express.Router();

router.post('/convert/distance', async (req: Request, res: Response) => {
    try {
        const form: ConvertDistanceForm = req.body;
        const result = await MeasurementFacade.convertDistance(form);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.post('/convert/area', async (req: Request, res: Response) => {
    try {
        const form: ConvertAreaForm = req.body;
        const result = await MeasurementFacade.convertArea(form);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

export = router;
