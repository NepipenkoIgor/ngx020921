import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
	selector: 'ngx-classwork-one-product',
	templateUrl: './one-product.component.html',
	styleUrls: ['./one-product.component.css'],
})
export class OneProductComponent implements OnInit {
	public product$ = this.activatedRoute.data.pipe(pluck('product'));

	public constructor(private readonly activatedRoute: ActivatedRoute) {}

	public ngOnInit(): void {
		this.activatedRoute.params.subscribe((v) => {
			console.log(v['id']);
		});
		this.activatedRoute.paramMap.subscribe((v) => {
			console.log(v.get('id'));
		});
		this.activatedRoute.queryParams.subscribe((v) => {
			console.log(v);
		});
	}
}
