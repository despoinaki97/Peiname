import { Item } from './item';

export class ordAccount{

    public orderedItems: Item[]
    public name: string
    constructor(name: string,orderedItems?: Item[]){
        this.name = name;
        this.orderedItems = orderedItems;

    }
     
    addItem(i){
        this.orderedItems.push(i);
    }
    getCalories(){
        var sum = 0;
        this.orderedItems.forEach(element => {
            sum += element.Calories
        });
        return sum;
    }
}