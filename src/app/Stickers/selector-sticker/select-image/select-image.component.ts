import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
  styleUrls: ['./select-image.component.css']
})
export class SelectImageComponent implements OnInit {

  src1;

  iconos: any[] = [];

  img;

  constructor() { }

  ngOnInit() {
    this.src1 = "https://www.stickerkid.es/media/icons/Adventure/";
    this.iconos = [
      this.src1 + 'astronaute1.png',
      this.src1 + 'aviateur.png',
      this.src1 + 'chevalier.png',
      this.src1 + 'dinoblue.png',
      this.src1 + 'dinogreen.png',
      this.src1 + 'dinored.png',
      this.src1 + 'dinoyellow.png',
      this.src1 + 'fireman1.png',
      this.src1 + 'indianboy1.png',
      this.src1 + 'indiangirl1.png',
      this.src1 + 'king1.png',
      this.src1 + 'knight1.png',
      this.src1 + 'pirate1.png',
      this.src1 + 'pirate2.png',
      this.src1 + 'princess.png',
      this.src1 + 'robber.png',
      this.src1 + 'robot1.png',
      this.src1 + 'robot3.png',
      this.src1 + 'scout.png',
      this.src1 + 'spacecat.png',
      this.src1 + 'spacedog.png',
      this.src1 + 'spacekoala.png',
    ];

    this.img = this.iconos[0];
  }

  setImagen(item: any) {
    this.img = item;
  }

}
