export class DataTableRowExpansionDemo implements OnInit {

    cars: Car[];
    
    cols: any[];
    
    selectedCar: Car;
    
    dialogVisible: boolean;
    
    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
        
        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    }
    
    showCar(car: Car) {
        this.selectedCar = car;
        this.dialogVisible = true;
    }
}