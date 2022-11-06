import { AreaUnit } from '../definitions/AreaUnit';
import { AreaForm } from '../forms/MeasurementForm';

abstract class MeasurementAreaUnit {
    private _value: number;
    private _valueInSqMeter: number;

    constructor(readonly ratioToSqMeter: number, readonly unit: AreaUnit) {}

    public get value(): number {
        return this._value;
    }

    public setValue(v: number) {
        this._value = v;
        this._valueInSqMeter = v * this.ratioToSqMeter;
    }

    public get valueInSqMeter(): number {
        return this._valueInSqMeter;
    }

    public setValueInSqMeter(v: number) {
        this._value = v / this.ratioToSqMeter;
        this._valueInSqMeter = v;
        return this;
    }

    public convertTo(toUnit: AreaUnit): MeasurementAreaUnit {
        return AreaUnitBuilder.convert(this, toUnit);
    }
}

export class AreaUnitBuilder {
    static from(form: AreaForm): MeasurementAreaUnit {
        switch (form.unit) {
            case AreaUnit.Rai:
                return new Rai(form.value);
            case AreaUnit.SquareMile:
                return new SquareMile(form.value);
            case AreaUnit.SquareMeter:
                return new SquareMeter(form.value);
            default:
                throw new Error('Area unit is not define');
        }
    }

    static convert(from: MeasurementAreaUnit, to: AreaUnit) {
        switch (to) {
            case AreaUnit.SquareMeter:
                return SquareMeter.fromSqMeter(from.valueInSqMeter);
            case AreaUnit.Rai:
                return Rai.fromSqMeter(from.valueInSqMeter);
            case AreaUnit.SquareMile:
                return SquareMile.fromSqMeter(from.valueInSqMeter);
            default:
                throw new Error('Area unit is not define');
        }
    }
}

export class SquareMeter extends MeasurementAreaUnit {
    static fromSqMeter(value: number) {
        return new SquareMeter().setValueInSqMeter(value);
    }
    constructor(value: number = 0) {
        const type: AreaUnit = AreaUnit.SquareMeter;
        const ratioToSqMeter: number = 1;
        super(ratioToSqMeter, type);
        super.setValue(value);
    }
}

export class Rai extends MeasurementAreaUnit {
    static fromSqMeter(value: number) {
        return new Rai().setValueInSqMeter(value);
    }
    constructor(value: number = 0) {
        const type: AreaUnit = AreaUnit.Rai;
        const ratioToSqMeter: number = 1600;
        super(ratioToSqMeter, type);
        super.setValue(value);
    }
}

export class SquareMile extends MeasurementAreaUnit {
    static fromSqMeter(value: number) {
        return new SquareMile().setValueInSqMeter(value);
    }
    constructor(value: number = 0) {
        const type: AreaUnit = AreaUnit.SquareMile;
        const ratioToSqMeter: number = 2589988.1;
        super(ratioToSqMeter, type);
        super.setValue(value);
    }
}
