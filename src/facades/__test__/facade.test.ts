import { DistanceUnit } from '../../definitions/DistanceUnit';
import {
    ConvertAreaForm,
    ConvertDistanceForm,
} from '../../forms/MeasurementForm';
import MeasurementFacade from '../MeasurementFacade';

import should from 'should';
import { AreaUnit } from '../../definitions/AreaUnit';

describe('MeasurementFacade', () => {
    describe('convertDistance', () => {
        it('should convert from meter to kilometer correctly', (done) => {
            const form: ConvertDistanceForm = {
                from: Object.assign({ unit: DistanceUnit.Meter, value: 1000 }),
                toUnit: DistanceUnit.Kilometer,
            };
            MeasurementFacade.convertDistance(form)
                .then((result) => {
                    should(result.value).equal(1);
                })
                .then(done)
                .catch((error) => done(error));
        });

        it('should convert from mile to meter correctly', (done) => {
            const form: ConvertDistanceForm = {
                from: Object.assign({ unit: DistanceUnit.Mile, value: 2 }),
                toUnit: DistanceUnit.Meter,
            };
            MeasurementFacade.convertDistance(form)
                .then((result) => {
                    should(result.value).equal(1609.344 * 2);
                })
                .then(done)
                .catch((error) => done(error));
        });
    });

    describe('convertArea', () => {
        it('should convert from rai to square-meter correctly', (done) => {
            const form: ConvertAreaForm = {
                from: Object.assign({ unit: AreaUnit.Rai, value: 4 }),
                toUnit: AreaUnit.SquareMeter,
            };
            MeasurementFacade.convertArea(form)
                .then((result) => {
                    should(result.value).equal(1600 * 4);
                })
                .then(done)
                .catch((error) => done(error));
        });
    });
});
