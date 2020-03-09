import { Validators, AbstractControl, ValidatorFn } from '@angular/forms';

export class KbValidators {
  public static min(minValue: any): ValidatorFn {
    // tslint:disable-next-line:prefer-immediate-return
    const func: ValidatorFn = (c: AbstractControl): { [key: string]: any } => {
      if (!!Validators.required(c) || (!minValue && minValue !== 0)) {
        return undefined;
      }
      const v: number = c.value;
      return v < minValue ? { min: { minValue, actualValue: v } } : undefined;
    };
    return func;
  }

  public static max(maxValue: any): ValidatorFn {
    // tslint:disable-next-line:prefer-immediate-return
    const func: ValidatorFn = (c: AbstractControl): { [key: string]: any } => {
      if (!!Validators.required(c) || (!maxValue && maxValue !== 0)) {
        return undefined;
      }
      const v: number = c.value;
      return v > maxValue ? { max: { maxValue, actualValue: v } } : undefined;
    };
    return func;
  }

  public static numberRequired(c: AbstractControl): { [key: string]: any } {
    return Number.isNaN(c.value) ? { required: true } : undefined;
  }
}
