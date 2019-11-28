import { Component, OnInit } from '@angular/core';
import { ordAccount } from '../../ordaccount';
import { Item } from '../../item';
@Component({
  selector: 'ami-fullstack-tv-payment',
  templateUrl: './tv-payment.component.html',
  styleUrls: ['./tv-payment.component.scss']
})
export class TvPaymentComponent implements OnInit {

  constructor() { }
  public innerWidth: any;
  public innerHeight: any;

  giorgos = new ordAccount("Giorgos.S", [
    new Item("Pita gyro kotopoulo ", 300, 50, 60, 650, 3.5),
    new Item("Krepa Sokolata Banana", 110, 220, 210, 760, 5)
  ], "#0057FF")
  despoina = new ordAccount("Despoina.S", [

    new Item("Pizza Anana", 300, 50, 60, 600, 10),
  ], "#FF00F5")
  kostas = new ordAccount("Kostas.D", [
    new Item("Fileto Kotopoulo Merida", 120, 40, 80, 420, 6),
    new Item("Coca Cola", 50, 120, 0, 620, 2)
  ], "#1ED847")


  Users = [this.giorgos, this.despoina, this.kostas];

  ngOnInit() {
    this.giorgos.addSharedItem([
      this.despoina,
      this.kostas
    ], new Item("Ceasar's Salad", 100, 20, 40, 320, 9))
    this.giorgos.addSharedItem([
      this.despoina
    ], new Item("Pizza Margharita", 100, 20, 40, 320, 10))

    this.innerWidth = (window.innerWidth * 90 / 100) / this.Users.length;
    this.innerHeight = window.innerHeight * 0.9;
  }



}
