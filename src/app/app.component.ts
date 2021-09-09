import { Component } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';

// interface IUser {
// 	name: string;
// 	info: {
// 		male: boolean;
// 	};
// }

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	public text: string = 'Ngx020921';

	// public user: IUser = {} as IUser;

	// private _salary: number = 3000;
	//
	// public width = 50;
	//
	// public tag = this.domSanitizer.bypassSecurityTrustHtml('<span style="color:red">JS</span>');
	//
	// public constructor(private domSanitizer: DomSanitizer) {}
	//
	// public get salary(): number {
	// 	return Math.round(this._salary * 1.2);
	// }
	//
	// public imgSrc =
	// 	'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
	//
	// public onImgClick(src: string, event: MouseEvent, inputSrc: string) {
	// 	console.log(src);
	// 	console.log(event);
	// 	console.log(inputSrc);
	// }v

	public toggleMenu(event: any) {
		console.log('menu !!!', event);
	}
}
