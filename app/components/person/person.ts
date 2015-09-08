import { Component, View } from 'angular2/angular2';

@Component({

})
@View({

})
class Person {
	private firstName: string;
	private lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName(): string {
		return this.firstName + ' ' + this.lastName;
	}
}