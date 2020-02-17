import { FormArray, ValidatorFn } from '@angular/forms';

export class MinhaValidacao{


  public static unique(array: FormArray) {

    if (array == null || array == undefined) {     
      return null;
    }

    const values = array.controls;

    for (let i = 0; i < values.length; i++) {
      for (let j = i+1; j < values.length; j++) {
        if (values[i].value === values[j].value) {
          return { uniqueError: true };
        }
      }
    }

    return null;
  }


}
