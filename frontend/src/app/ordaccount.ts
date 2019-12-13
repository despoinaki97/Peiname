import { Item } from './item';
import { isNull } from 'util';

export class ordAccount {
    public _id: any // DB
    public id: number
    public orderedItems: string[]
    public name: string
    public color: string
    public seat: number
    public hasVotedRestaurant: boolean
    public hasVotedCuisine: boolean
    public isHost: boolean
    public user_Icon: string
    constructor(id:number,name: string, orderedItems?: string[], color?: string , user_Icon?: string) {
        this.id = id;
        this.name = name;
        this.orderedItems = [];
       this.orderedItems = orderedItems || [];
        this.color = color;
        // if(this.orderedItems){
        //     this.orderedItems.forEach(element => {
        //         element.sharedWith = [];
        //         element.sharedWith.push(this)
        //     });
        // }
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
        // this.orderedItems.forEach(element => {
        //     sum += element.Calories
        // });
        console.error("NEEDS IMPLEMENTATION GETCALORIES")
        return sum;
    }
    public getTotalPrice() {
        var sum = 0;
        // this.orderedItems.forEach(element => {
        //     sum += element.price
        // });
        console.error("NEEDS IMPLEMENTATION GETOTALPRICE")
        return sum;
    }
    public static addSharedItem(withSomeone: ordAccount[], anItem: Item) {
        // var newItem = new Item(anItem.name, anItem.Carbs, anItem.Sugar, anItem.Fat, anItem.Calories, anItem.price / withSomeone.length,[],anItem.item_details)
        // newItem.sharedWith = [];
        // withSomeone.forEach(element => {
        //     newItem.sharedWith.push(element); // populate the item's array with everyone
        //     element.orderedItems.push(newItem);
        // })
        console.error("NEEDS IMPLEMENTATION addSharedItem")


    }
    
}