import { DistanceUnit } from '../definitions/DistanceUnit';
import { DistanceForm } from '../forms/MeasurementForm';

export abstract class MeasurementDistanceUnit {
    private _value: number;
    private _valueInMeter: number;

    constructor(readonly ratioToMeter: number, readonly unit: DistanceUnit) {}

    public get value(): number {
        return this._value;
    }

    public setValue(v: number) {
        this._value = v;
        this._valueInMeter = v * this.ratioToMeter;
    }

    public get valueInMeter(): number {
        return this._valueInMeter;
    }

    public setValueInMeter(v: number): MeasurementDistanceUnit {
        this._value = v / this.ratioToMeter;
        this._valueInMeter = v;
        return this;
    }

    public convertTo(toUnit: DistanceUnit): MeasurementDistanceUnit {
        return DistanceUnitBuilder.convert(this, toUnit);
    }
}

export class DistanceUnitBuilder {
    static from(form: DistanceForm): MeasurementDistanceUnit {
        switch (form.unit) {
            case DistanceUnit.Mile:
                return new Mile(form.value);
            case DistanceUnit.Meter:
                return new Meter(form.value);
            case DistanceUnit.Kilometer:
                return new Kilometer(form.value);
            case DistanceUnit.Centimeter:
                return new Centimeter(form.value);
            default:
                throw new Error(`Distance unit is not define ${form.unit}`);
        }
    }

    static convert(from: MeasurementDistanceUnit, to: DistanceUnit) {
        switch (to) {
            case DistanceUnit.Mile:
                return Mile.fromMeter(from.valueInMeter);
            case DistanceUnit.Meter:
                return Meter.fromMeter(from.valueInMeter);
            case DistanceUnit.Kilometer:
                return Kilometer.fromMeter(from.valueInMeter);
            case DistanceUnit.Centimeter:
                return Centimeter.fromMeter(from.valueInMeter);
            default:
                throw new Error(`Distance unit is not define ${to}`);
        }
    }
}

export class Mile extends MeasurementDistanceUnit {
    static fromMeter(value: number): Mile {
        return new Mile().setValueInMeter(value);
    }
    constructor(value: number = 0) {
        const type: DistanceUnit = DistanceUnit.Mile;
        const ratioToMeter: number = 1609.344;
        super(ratioToMeter, type);
        super.setValue(value);
    }
}

export class Meter extends MeasurementDistanceUnit {
    static fromMeter(value: number) {
        return new Meter().setValueInMeter(value);
    }
    constructor(value: number = 0) {
        const type: DistanceUnit = DistanceUnit.Meter;
        const ratioToMeter: number = 1;
        super(ratioToMeter, type);
        super.setValue(value);
    }
}

export class Kilometer extends MeasurementDistanceUnit {
    static fromMeter(value: number) {
        return new Kilometer().setValueInMeter(value);
    }
    constructor(value: number = 0) {
        const type: DistanceUnit = DistanceUnit.Kilometer;
        const ratioToMeter: number = 1000;
        super(ratioToMeter, type);
        super.setValue(value);
    }
}

export class Centimeter extends MeasurementDistanceUnit {
    static fromMeter(value: number) {
        return new Centimeter().setValueInMeter(value);
    }
    constructor(value: number = 0) {
        const type: DistanceUnit = DistanceUnit.Centimeter;
        const ratioToMeter: number = 0.01;
        super(ratioToMeter, type);
        super.setValue(value);
    }
}

const unit = new Kilometer(2);
