import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';
import { SearchComponent } from './search/search.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { SharedModule } from '../../../../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { OneProductComponent } from './one-product/one-product.component';
import { OneProductResolver } from './one-product/one-product.resolver';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './store/reducers/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffect } from './store/effects/products.effect';

@NgModule({
	declarations: [
		ProductsComponent,
		SearchComponent,
		ProductCardComponent,
		ProductsFilterPipe,
		OneProductComponent,
	],
	imports: [
		SharedModule,
		ProductsRoutingModule,
		StoreModule.forFeature('products', productReducer),
		EffectsModule.forFeature([ProductsEffect]),
	],
	providers: [ProductsService, OneProductResolver],
})
export class ProductsModule {}
