import { Component, Input, OnInit } from '@angular/core';
// declare var jQuery: any;
// declare var $: any;

@Component({
  selector: 'app-select-font',
  templateUrl: './select-font.component.html',
  styleUrls: ['./select-font.component.css']
})
export class SelectFontComponent implements OnInit {

  @Input() img;

  colores: any[] = ['blue', 'AliceBlue', 'Azure', 'BlanchedAlmond', 'BurlyWood', 'Coral', 'Cyan', 'DarkGray',
    'DarkMagenta', 'DarkRed', 'DarkSlateGray', 'DeepPink', 'DodgerBlue', 'Fuchsia', 'Goldenrod', 'Grey',
    'Indigo', 'LavenderBlush', 'LightCoral', 'LightGreen', 'LightSeaGreen', 'LightSteelBlue', 'Linen',
    'MediumBlue', 'MediumSlateBlue', 'MidnightBlue', 'NavajoWhite', 'OliveDrab', 'PaleGoldenrod', 'PapayaWhip',
    'Plum', 'RosyBrown', 'SandyBrown', 'Silver', 'SlateGrey', 'Tan', 'Turquoise', 'WhiteSmoke', 'AntiqueWhite',
    'Beige', 'Blue', 'CadetBlue', 'CornflowerBlue', 'DarkBlue', 'DarkGreen', 'DarkOliveGreen', 'DarkSalmon',
    'DarkSlateGrey', 'DeepSkyBlue', 'FireBrick', 'Gainsboro', 'Gray', 'Honeydew', 'Ivory', 'LawnGreen',
    'LightCyan', 'LightGrey', 'LightSkyBlue', 'LightYellow', 'Magenta', 'MediumOrchid', 'MediumSpringGreen',
    'MintCream', 'Navy', 'Orange', 'PaleGreen', 'PeachPuff', 'PowderBlue', 'RoyalBlue', 'SeaGreen', 'SkyBlue',
    'Snow', 'Teal', 'Violet', 'Yellow', 'Aqua', 'Bisque', 'BlueViolet', 'Chartreuse', 'Cornsilk', 'DarkCyan',
    'DarkGrey', 'DarkOrange', 'DarkSeaGreen', 'DarkTurquoise', 'DimGray', 'FloralWhite', 'GhostWhite', 'Green',
    'HotPink', 'Khaki', 'LemonChiffon', 'LightGoldenrodYellow', 'LightPink', 'LightSlateGray', 'Lime', 'Maroon',
    'MediumPurple', 'MediumTurquoise', 'MistyRose', 'OldLace', 'OrangeRed', 'PaleTurquoise', 'Peru', 'Purple',
    'SaddleBrown', 'Seashell', 'SlateBlue', 'SpringGreen', 'Thistle', 'Wheat', 'YellowGreen', 'Aquamarine',
    'Black', 'Brown', 'Chocolate', 'Crimson', 'DarkGoldenrod', 'DarkKhaki', 'DarkOrchid', 'DarkSlateBlue',
    'DarkViolet', 'DimGrey', 'ForestGreen', 'Gold', 'GreenYellow', 'IndianRed', 'Lavender', 'LightBlue',
    'LightGray', 'LightSalmon', 'LightSlateGrey', 'LimeGreen', 'MediumAquamarine', 'MediumSeaGreen', 'MediumVioletRed',
    'Moccasin', 'Olive', 'Orchid', 'PaleVioletRed', 'Pink', 'Red', 'Salmon', 'Sienna', 'SlateGray',
    'SteelBlue', 'Tomato', 'White',
  ];

  // size = 0;

  listStyles = [

    { fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 'bold' },
    { fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal' },
    { fontFamily: 'Playfair Display', fontStyle: 'normal', fontWeight: 'bold' },
    { fontFamily: 'Allerta', fontStyle: 'normal', fontWeight: 'bold' },
    { fontFamily: 'Montserrat Alternates', fontStyle: 'normal', fontWeight: 'bold' },
    { fontFamily: 'Oswald', fontStyle: 'normal', fontWeight: 'normal' },
    { fontFamily: 'Merriweather', fontStyle: 'normal', fontWeight: 'normal' },
    { fontFamily: 'Great Vibes', fontStyle: 'normal', fontWeight: 'normal' },
    { fontFamily: 'Carter One', fontStyle: 'normal', fontWeight: 'normal' },
    { fontFamily: 'Indie Flower', fontStyle: 'normal', fontWeight: 'bold' },
    { fontFamily: 'Allura', fontStyle: 'italic', fontWeight: 'bold' },
    { fontFamily: 'Bungee Shade', fontStyle: 'normal', fontWeight: 'bold' },
    { fontFamily: 'Fredericka the Great', fontStyle: 'normal', fontWeight: 'normal' },
    { fontFamily: 'Faster One', fontStyle: 'normal', fontWeight: 'normal' },
    { fontFamily: 'Nosifer', fontStyle: 'normal', fontWeight: 'normal' },
    { fontFamily: 'Bungee Shade', fontStyle: 'normal', fontWeight: 'normal' },
    { fontFamily: 'Special Elite', fontStyle: 'normal', fontWeight: 'normal' },
  ];


  titulo;
  cuerpo;
  colorFont;
  fontWeight;
  styleBackgroundColor;
  fontStyle;
  fontFamily;
  fontFamily2;
  fontSizeTitulo;
  fontSizeBody;
  colorLetra;
  ancho;
  cantTile;
  cantBody;
  coef = 0.56;

  constructor() { }

  ngOnInit() {

    this.colorLetra = this.colores[95];
    this.styleBackgroundColor = this.colores[96];
    this.fontWeight = this.listStyles[0].fontWeight;
    this.fontStyle = this.listStyles[0].fontStyle;
    this.fontFamily = this.listStyles[0].fontFamily;

    this.fontFamily2 = this.listStyles[0];


    this.fontSizeTitulo = 130;
    this.fontSizeBody = 130;

    this.ancho = document.getElementById('sidebar').clientWidth;
    this.cantTile = 0;
    this.cantBody = 0;
    this.titulo = 'Ingrese titulo';
    this.cuerpo = 'texto';

    this.onKey('myStyles');
    this.onKey('myStyles2');
  }

  onKey(style: any) {

    this.CualculaCant(style);
    var cal = 0;
    var tam = 0;
    if (style == 'myStyles') {
      tam = this.fontSizeTitulo;
      cal = (this.coef * tam) * (this.cantTile + 5);
    } else if (style == 'myStyles2') {
      tam = this.fontSizeBody;
      cal = (this.coef * tam) * (this.cantBody + 5);
    }
    if (cal > this.ancho) {
      this.resta(style); this.onKey(style);
    } else if (cal < (this.ancho - (this.coef * tam * 2))) {
      this.suma(style); this.onKey(style);
    }
  }


  suma(style: any) {
    if (style == 'myStyles') {
      this.fontSizeTitulo = this.fontSizeTitulo + 1;
    } else if (style == 'myStyles2') {
      this.fontSizeBody = this.fontSizeBody + 1;
    }
  }

  resta(style: any) {
    if (style == 'myStyles') {
      this.fontSizeTitulo = this.fontSizeTitulo - 1;
    } else if (style == 'myStyles2') {
      this.fontSizeBody = this.fontSizeBody - 1;
    }
  }

  setStyles(styles: any) {
    this.fontWeight = styles.fontWeight;
    this.fontStyle = styles.fontStyle;
    this.fontFamily = styles.fontFamily;
  }

  CualculaCant(style: any) {
    if (style == 'myStyles') {
      this.cantTile = this.titulo.length;
    } else if (style == 'myStyles2') {
      this.cantBody = this.cuerpo.length;
    }
  }
}
