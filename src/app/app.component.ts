import { Component, ViewChild } from '@angular/core';
import { Product } from './models/Product';
import { ChartComponent } from 'angular2-chartjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	
	/**
	 * Enables interaction with Chart.js, such as update, create, reset, etc.
	 */
	@ViewChild(ChartComponent) chartComponent: ChartComponent;
	
	/**
	 * The Object that the form to add new products is bound with.
	 */
	public model = new Product('', 0, 0, 0, 0, 0, 0, 0, 0, 0);
	
	/**
	 * The type of graph to display.
	 */
	public type = 'line';
	
	/**
	 * Data that is shown on the Chart.js graph.
	 */
	public data = {
		labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
		datasets: []
	};
	
	/**
	 * Chart.js options.
	 */
	public options = {
		responsive: true,
		maintainAspectRatio: false
	};
	
	/**
	 * Holds all of the products displayed on the chart.
	 */
	public products = [];
	
	/**
	 * Fired when the input value of an added product changes.
	 * 
	 * @param event any the new value of the input field
	 * @param index the index of the product in the products array
	 * @param product Product the product
	 */
	productChanged(event, index, product) {
		if (!this.validate(product)) {
			return;
		}
		
		this.data.datasets[index] = product.toChartData();
		
		this.chartComponent.chart.update();
	}
	
	/**
	 * Validates the specified product.
	 *
	 * @param product Product the product to validate
	 * @return boolean true if validation passes
	 */
	validate(product) {
		if (product.productName.length == 0) {
			return false;
		}
		
		if (!Number.isInteger(product.data.january) || !Number.isInteger(product.data.february) ||
			!Number.isInteger(product.data.march) || !Number.isInteger(product.data.april) ||
			!Number.isInteger(product.data.may) || !Number.isInteger(product.data.june) ||
			!Number.isInteger(product.data.july) || !Number.isInteger(product.data.august) ||
			!Number.isInteger(product.data.september)) {
			
			return false;
		}
		
		return true;
	}
	
	/**
	 * Fired when the Add Product button is pressed.
	 */
	addProduct() {
		if (!this.validate(this.model)) {
			return;
		}
		
		let p = new Product(this.model.productName, this.model.data.january, this.model.data.february, this.model.data.march,
							this.model.data.april, this.model.data.may, this.model.data.june, this.model.data.july, this.model.data.august,
							this.model.data.september);
		
		this.products.push(p);
		
		this.model = new Product('', 0, 0, 0, 0, 0, 0, 0, 0, 0);
		
		this.data.datasets.push(p.toChartData());
		
		this.chartComponent.chart.update();
	}
}