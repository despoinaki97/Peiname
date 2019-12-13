import { ordAccount } from './ordaccount';

export class Rating{
    constructor(public id: number,
        public user: ordAccount,
        public comment: string,
        public ratingVal: number){}

        getRating(){
            return new Array(this.ratingVal).fill(0);
        }
        getNRating(){
            var lala = new Array(this.ratingVal).fill(1);
            var nlen = 5-lala.length;
            return Array(nlen).fill(nlen);
        }
}