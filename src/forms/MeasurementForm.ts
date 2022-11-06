import { IsDefined, IsEnum, IsNumber, ValidateNested } from 'class-validator';
import { AreaUnit } from '../definitions/AreaUnit';
import { DistanceUnit } from '../definitions/DistanceUnit';

export class DistanceForm {
    @IsEnum(DistanceUnit)
    @IsDefined()
    unit: DistanceUnit;

    @IsNumber()
    value: number;
}

export class ConvertDistanceForm {
    @ValidateNested({ context: DistanceForm })
    from: DistanceForm;

    @IsEnum(DistanceUnit)
    @IsDefined()
    toUnit: DistanceUnit;
}

export class AreaForm {
    @IsEnum(AreaUnit)
    @IsDefined()
    unit: AreaUnit;

    @IsNumber()
    value: number;
}

export class ConvertAreaForm {
    @ValidateNested({ context: AreaForm })
    from: AreaForm;

    @IsEnum(AreaUnit)
    @IsDefined()
    toUnit: AreaUnit;
}
