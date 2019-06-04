import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { StudentProvider, Student, StudentList } from '../../providers/student/student';

import { EditStudentPage } from '../edit-student/edit-student'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	students: StudentList[];

	constructor(public navCtrl: NavController, private studentProvider: StudentProvider, private toast: ToastController) {
	}

	ionViewDidEnter() {
		this.studentProvider.getAll()
			.then((result) => {
				this.students = result;
				console.log(this.students);
			})
			.catch(() => {
				this.studentProvider.clear();
			});
	}

	addStudent() {
		this.navCtrl.push('EditStudentPage');
	}

	editStudent(item: StudentList) {
		this.navCtrl.push('EditStudentPage', {key: item.key, student: item.student});
	}

	removeStudent(item: StudentList) {
		this.studentProvider.remove(item.key)
			.then(() => {
				// Removendo o aluno do array de itens
				var index = this.students.indexOf(item);
				this.students.splice(index, 1);
				this.toast.create({
					message: 'Aluno removido',
					duration: 3000,
					position: 'bottom'
				}).present();
			});
	}

}
