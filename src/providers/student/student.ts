import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

/*
  Generated class for the StudentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentProvider {
	
	constructor(private storage: Storage, private datepipe: DatePipe) {
		console.log('Hello StudentProvider Provider');
	}

	public insert(student: Student) {
		let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
		return this.save(key, student);
	}

	public update(key: string, student: Student) {
		return this.save(key, student);
	}

	public save(key: string, student: Student) {
		return this.storage.set(key, student);
	}

	public remove(key: string) {
		return this.storage.remove(key);
	}

	public getAll() {
		let students: StudentList[] = [];

		return this.storage.forEach((value: Student, key: string, iterationNumber: Number) => {
			let student = new StudentList();
			student.key = key;
			student.student = value;
			students.push(student);
		})
			.then(() => {
				return Promise.resolve(students);
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	}

	public clear() {
		return this.storage.clear();
	}

}

export class Student {
	name: string;
	birth: string;
	grade: string;
	zip: string;
	street: string;
	number: string;
	complement: string;
	district: string;
	state: string;
	city: string;
	motherName: string;
	motherID: string;
	payday: string;
}

export class StudentList {
	key: string;
	student: Student;
}
