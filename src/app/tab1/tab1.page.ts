import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public primValor: number;
  public seguValor: number;
  public resul: number;

  constructor() {

  }
  public som() {
    this.resul = this.primValor + this.seguValor;
  }

  public sub() {
    this.resul = this.primValor - this.seguValor;
  }

  public mult() {
    this.resul = this.primValor * this.seguValor;
  }

  public div() {
    this.resul = this.primValor / this.seguValor;
  }

  public limp() {
    this.primValor = null;
    this.seguValor = null;
    this.resul = null;
  }
}