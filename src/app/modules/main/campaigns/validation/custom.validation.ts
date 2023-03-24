import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function customValidator(prevValue: String, inputName : String, templateId? : Number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    
    const currValue = control.value;
    const emailRegex = RegExp(/^[a-zA-Z0-9]+\.?[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]{2,3}$/);
    const commonRegex = RegExp(/^[^\s].+[^\s]$/);

    if(templateId && templateId !== 1 && (inputName === "reward type")){
      return null;
    }
    
    if(inputName === "reward amount"){
      if(templateId ===1){
        if(currValue === null){
          return { isInvalid: true, message: `${inputName} is required` };
        }
        
        if(currValue.toString().length >5){
          return { isInvalid: true, message: `length of ${inputName} should be less than 6` };
        }
        
        if(Number(currValue) === 0){
          return { isInvalid: true, message: `${inputName} should be greater than 0` };
        }
        
        if(Number(currValue) % 100){
          return { isInvalid: true, message: `${inputName} should be multiple of 100` };
        }
      }
      return null;
    }

    if(inputName === "sender email"){
      if(currValue === null || currValue === ''){
        return { isInvalid: true, message: `${inputName} is required` };
      }
      
      if(!emailRegex.test(currValue)){
        return { isInvalid: true, message: `${inputName} should be in proper format` };
      }
      return null;
    }
    
    if (currValue != null && currValue == '') {
        return { isInvalid: true, message: `${inputName} is required` };
    }

    if((currValue.length === 1 && currValue[0] === ' ') || (currValue.length === 2 && (currValue[0] === ' ' || currValue[1] === ' '))){
      return { isInvalid: true, message: `${inputName} should not contain white spaces at the begining and ending of text` };
    }

    if(!commonRegex.test(currValue) && currValue.length > 2){
      return { isInvalid: true, message: `${inputName} should not contain white spaces at the begining and ending of text` };
    }

    if (currValue.toString().toLowerCase() === prevValue.toString().toLowerCase()) {
      return { isInvalid: true, message: `Please edit ${inputName} field` };
    }
    
    return null;
  };
}
