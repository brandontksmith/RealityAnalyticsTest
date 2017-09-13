/**
 * A Product is a model that holds the product name and number of units sold
 * in a specific month.
 */
export class Product {
	
	public productName = '';
	
	public data = {
		january: 0,
		february: 0,
		march: 0,
		april: 0,
		may: 0,
		june: 0,
		july: 0,
		august: 0,
		september: 0
	}
	
	/**
	 * Construct a new Product.
	 *
	 * @param productName string the name of the product
	 * @param january int the number of units sold
	 * @param february int the number of units sold
	 * @param march int the number of units sold
	 * @param april int the number of units sold
	 * @param may int the number of units sold
	 * @param june int the number of units sold
	 * @param july int the number of units sold
	 * @param august int the number of units sold
	 * @param september int the number of units sold
	 */
	constructor(productName, january, february, march, april, may,
		june, july, august, september) {
		
		this.productName = productName;
		this.data.january = january;
		this.data.february = february;
		this.data.march = march;
		this.data.april = april;
		this.data.may = may;
		this.data.june = june;
		this.data.july = july;
		this.data.august = august;
		this.data.september = september;
	}
	
	/**
	 * Returns an Object in the format expected by Chart.js.
	 */
	toChartData() {
		return {
			label: this.productName,
			data: Object.values(this.data)
		}
	}
}