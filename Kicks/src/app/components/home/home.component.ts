import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productos: any = [{ nombre: "Nike", imagen: "https://images-na.ssl-images-amazon.com/images/I/619USIzbDcL._AC_UL1500_.jpg" },
    { nombre: "Adidas", imagen: "https://images-na.ssl-images-amazon.com/images/I/81oh%2B%2BTFVJL._AC_UL1500_.jpg" },
    { nombre: "Puma", imagen: "https://images.puma.net/images/189498/03/sv01/fnd/AUS/w/1000/h/1000/bg/255,255,255"  }]

}
