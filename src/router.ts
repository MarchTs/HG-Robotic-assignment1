import express from 'express';
import MeasurementController from './controllers/MeasurementController';
import SwaggerController from './controllers/SwaggerController';

const router = express.Router();

router.use('/measurement', MeasurementController);
router.use('/docs/swagger', SwaggerController);

export = router;
