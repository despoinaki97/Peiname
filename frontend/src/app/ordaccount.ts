import { Item } from './item';
import { isNull } from 'util';

export class ordAccount {

    public orderedItems: Item[]
    public name: string
    public color: string
    public user_Icon: string
    constructor(name: string, orderedItems?: Item[], color?: string , user_Icon?: string) {
        this.name = name;
        this.orderedItems = [];
        if(orderedItems)this.orderedItems = orderedItems;
        this.color = color;
        if(this.orderedItems){
            this.orderedItems.forEach(element => {
                element.sharedWith = [];
                element.sharedWith.push(this)
            });
        }
        // ordaccoun connect with wharedwith field in item
        this.user_Icon = user_Icon;
    }

    addItem(i) {
        this.orderedItems.push(i);
        // i.sharedWith = [];
        i.sharedWith.push(this)
    }
    public getCalories() {
        var sum = 0;
        this.orderedItems.forEach(element => {
            sum += element.Calories
        });
        return sum;
    }
    public getTotalPrice() {
        var sum = 0;
        this.orderedItems.forEach(element => {
            sum += element.price
        });
        return sum;
    }
    public static addSharedItem(withSomeone: ordAccount[], anItem: Item) {
        var newItem = new Item(anItem.name, anItem.Carbs, anItem.Sugar, anItem.Fat, anItem.Calories, anItem.price / withSomeone.length,[],anItem.item_details)
        newItem.sharedWith = [];
        withSomeone.forEach(element => {
            newItem.sharedWith.push(element); // populate the item's array with everyone
            element.orderedItems.push(newItem);
        })

    }
    
}