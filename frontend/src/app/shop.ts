import { Rating } from './rating';


export class Shop {
  constructor(
    public id: number,
    public name: string,
    public ratingVal: number,
    public rating: Rating[]) { }

    getRating(){
      return new Array(this.ratingVal).fill(0);
  }
  getNRating(){
      var lala = new Array(this.ratingVal).fill(1);
      var nlen = 5-lala.length;
      return Array(nlen).fill(nlen);
  }
}