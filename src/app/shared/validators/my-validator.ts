import { AbstractControl } from "@angular/forms";

export function MyValidator(control: AbstractControl) {

   // se il valore non inizia con "sal" restituiamo un errore

  if(!control.value.startsWith("sal")) {
    return {
      myValidator: true
    }
  }
  return null;

}

