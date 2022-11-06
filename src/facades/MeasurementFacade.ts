import { ConvertAreaForm, ConvertDistanceForm } from '../forms/MeasurementForm';
import { UnitMessage } from '../messages/UnitMessage';
import { AreaUnitBuilder } from '../models/MeasurementAreaUnit';
import { DistanceUnitBuilder } from '../models/MeasurementDistanceUnit';

class MeasurementFacade {
    async convertDistance(form: ConvertDistanceForm): Promise<UnitMessage> {
        const fromUnit = DistanceUnitBuilder.from(form.from);
        const toUnit = fromUnit.convertTo(form.toUnit);
        const message: UnitMessage = {
            value: toUnit.value,
            unit: `${toUnit.unit}`,
        };
        return new Promise((resolve) => resolve(message));
    }
    async convertArea(form: ConvertAreaForm): Promise<UnitMessage> {
        const fromUnit = AreaUnitBuilder.from(form.from);
        const toUnit = fromUnit.convertTo(form.toUnit);
        const message: UnitMessage = {
            value: toUnit.value,
            unit: `${toUnit.unit}`,
        };
        return new Promise((resolve) => resolve(message));
    }
}
export = new MeasurementFacade();
