import { Item } from './item';

export class ordAccount {

    public orderedItems: Item[]
    public name: string
    public color: string
    constructor(name: string, orderedItems?: Item[], color?: string) {
        this.name = name;
        this.orderedItems = orderedItems;
        this.color = color;
        this.orderedItems.forEach(element => {
            element.sharedWith = [];
            element.sharedWith.push(this)
        });
        // ordaccoun connect with wharedwith field in item
    }

    addItem(i) {
        this.orderedItems.push(i);
    }
    getCalories() {
        var sum = 0;
        this.orderedItems.forEach(element => {
            sum += element.Calories
        });
        return sum;
    }
    getTotalPrice() {
        var sum = 0;
        this.orderedItems.forEach(element => {
            sum += element.price
        });
        return sum;
    }
    addSharedItem(withSomeone: ordAccount[], anItem: Item) {
        withSomeone.push(this); // add me first
        var newItem = new Item(anItem.name, anItem.Carbs, anItem.Sugar, anItem.Fat, anItem.Calories, anItem.price / withSomeone.length)
        newItem.sharedWith = [];
        withSomeone.forEach(element => {
            newItem.sharedWith.push(element); // populate the item's array with everyone
            element.addItem(newItem) // add this item to everyone's list of ordered items
        })

    }
}