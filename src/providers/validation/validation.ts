import { Injectable } from '@angular/core';
import { Student } from '../student/student'

/*
  Generated class for the ValidationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ValidationProvider {

  constructor() {
    console.log('Hello ValidationProvider Provider');
  }
  // '[^!@#$%&*();:'"/?\|-_+=<,>.]*'
  public validateName(str: string) {
  	let errors: string[] = [];

  	if(str == null || str == '') {
  		errors.push('required field');
  	} else {
	  	if(str.length > 100) {
	  		errors.push('max length');
	  	}
	  	//if(!str.match('[a-zA-Z ]*')) {
	  	//	errors.push('invalid')
	  	//}
  	}

  	return errors;
  }

  public validateBirth(str: string) {
  	let errors: string[] = [];

  	if(str == null || str == '') {
  		errors.push('required field');
  	}

  	return errors;
  }

  public validateGrade(str: string) {
  	let errors: string[] = [];

  	if(str == null || str == '') {
  		errors.push('required field');
  	}

  	return errors;
  }

  public validateZip(str: string) {
  	let errors: string[] = [];

  	if(str == null || str == '') {
  		errors.push('required field');
  	} //else if(str.match('[0-9]{8}') == null) {
  	//	errors.push('invalid')
  	//}

  	return errors;
  }

  public validateStreet(str: string) {
  	let errors: string[] = [];

  	if(str == null || str == '') {
  		errors.push('required field');
  	} else {
	  	if(str.length > 120) {
	  		errors.push('max length');
	  	}
	  	//if(!str.match('[a-zA-Z0-9. ]*')) {
	  	//	errors.push('invalid')
	  	//}
  	}

  	return errors;
  }

  public validateComplement(str: string) {
  	let errors: string[] = [];

  	if(str != null) {
	  	if(str.length > 50) {
	  		errors.push('max length');
	  	}
	  	//if(!str.match('[a-zA-Z0-9. ]*')) {
	  	//	errors.push('invalid')
	  	//}
  	}

  	return errors;
  }

  public validateDistrict(str: string) {
  	let errors: string[] = [];

  	if(str == null || str == '') {
  		errors.push('required field');
  	} else {
	  	if(str.length > 100) {
	  		errors.push('max length');
	  	}
	  	//if(!str.match('[a-zA-Z0-9. ]*')) {
	  	//	errors.push('invalid')
	  	//}
	}

  	return errors;
  }

  public validateState(str: string) {
  	let errors: string[] = [];

  	if(str == null || str == '') {
  		errors.push('required field');
  	}

  	return errors;
  }

  public validateCity(str: string) {
  	let errors: string[] = [];

  	if(str == null || str == '') {
  		errors.push('required field');
  	}

  	return errors;
  }

  public validateMotherName(str: string) {
  	let errors: string[] = [];

  	if(str == null || str == '') {
  		errors.push('required field');
  	} else {
  		if(str.length > 100) {
  			errors.push('max length');
	  	}
	  	//if(!str.match('[a-zA-Z0-9 ]*')) {
	  	//	errors.push('invalid')
	  	//}
  	}

  	return errors;
  }

  private validateID(cpf: string) {
	var digits = [];
	var i, j;

	for(i = 0; i < cpf.length; i++) {
		digits.push(parseInt(cpf.charAt(i)));
	}

	var sum = 0;
	for(i = 0, j = 10; i <= 8; i++, j--) {
		sum += digits[i]*j;
	}

	var rest = (sum*10)%11;
	if(!((digits[9] == 0 && (rest == 0 || rest == 10)) || digits[9] == rest)) {
		return 'invalid';
	}

	sum = 0;
	for(i = 0, j = 11; i <= 9; i++, j--) {
		sum += digits[i]*j;
	}

	rest = (sum*10)%11;
	if(!((digits[10] == 0 && (rest == 0 || rest == 10)) || digits[10] == rest)) {
		return 'invalid';
	}

	return null;
  }

  public validateMotherID(str: string) {
  	let errors: string[] = [];

  	if(str == null || str == '') {
  		errors.push('required field');
  	} else if(str.match('[0-9]{11}') == null) {
  		errors.push('invalid')
  	} else {
  		let error = this.validateID(str);
  		if(error) {
  			errors.push(error);
  		}
  	}

  	return errors;
  }

  public validatePayday(str: string) {
  	let errors: string[] = [];

  	if(str == null || str == '') {
  		errors.push('required field');
  	}

  	return errors;
  }

  public validateNumber(str: string) {
  	let errors: string[] = [];

  	if(str == null || str == '') {
  		errors.push('required field');
  	}

  	return errors;
  }

  public isValid(errors: string[]) {
  	if(errors.length > 0)
  		return false;
	return true;
  }

  public isAllValid(validation: Validation) {
  	if(this.isValid(validation.name) && this.isValid(validation.birth) && this.isValid(validation.grade) && this.isValid(validation.zip) &&
  			this.isValid(validation.street) && this.isValid(validation.number) && this.isValid(validation.complement) &&
  			this.isValid(validation.district) && this.isValid(validation.state) && this.isValid(validation.city) &&
  			this.isValid(validation.motherName) && this.isValid(validation.motherID) && this.isValid(validation.payday))
  		return true;
	return false;
  }

  public validate(model: Student) {
  	let validation = new Validation();

  	validation.name = this.validateName(model.name);
  	validation.birth = this.validateBirth(model.birth);
  	validation.grade = this.validateGrade(model.grade);
  	validation.zip = this.validateZip(model.zip);
  	validation.street = this.validateStreet(model.street);
  	validation.number = this.validateNumber(model.number);
  	validation.complement = this.validateComplement(model.complement);
  	validation.district = this.validateDistrict(model.district);
  	validation.state = this.validateState(model.state);
  	validation.city = this.validateCity(model.city);
  	validation.motherName = this.validateMotherName(model.motherName);
  	validation.motherID = this.validateMotherID(model.motherID);
  	validation.payday = this.validatePayday(model.payday);

  	return validation;
  }

}

export class Validation {
	name: string[] = [];
	birth: string[] = [];
	grade: string[] = [];
	zip: string[] = [];
	street: string[] = [];
	number: string[] = [];
	complement: string[] = [];
	district: string[] = [];
	state: string[] = [];
	city: string[] = [];
	motherName: string[] = [];
	motherID: string[] = [];
	payday: string[] = [];
}
