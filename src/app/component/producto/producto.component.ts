import { Component, OnInit, NgModule, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  AccessibilityConfig, Action, AdvancedLayout, ButtonEvent,
  ButtonsConfig, ButtonsStrategy, ButtonType,
  Description, DescriptionStrategy, GalleryService,
  DotsConfig, GridLayout, Image, ImageModalEvent, LineLayout,
  PlainGalleryConfig, PlainGalleryStrategy, PreviewConfig
} from 'angular-modal-gallery';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  texto1;
  colorFont;
  styleWeight;
  styleBackgroundColor;
  styleFont;
  familyFont;
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
  fontWeight: any[] = [
    'normal',
    'bold',
    'bolder',
    'lighter',
    'initial',
    '900',
  ];

  styles: any[] = [
    'normal',
    'italic',
    'oblique'
  ];
  size = 0;

  myStyles = {
    'background-color': 'lime',
    'color': 'red',
    'font-size': '20px',
    'font-weight': 'bold',
    'font-': 'Aguafina Script',
    'font-style': 'normal',
  };

  fontFamylist: any[] = [
    'Krub', 'Open Sans', 'Roboto', 'Mali', 'Lato', 'Montserrat', 'Niramit', 'Roboto Condensed',
    'Source Sans Pro', 'Oswald', 'Chakra Petch', 'Raleway', 'Slabo 27px', 'PT Sans', 'K2D',
    'Merriweather', 'Roboto Slab', 'Noto Sans',
    'Open Sans Condensed',
    'Ubuntu',
    'Charmonman',
    'Poppins',
    'Playfair Display',
    'Roboto Mono',
    'Muli',
    'Rosario',
    'PT Serif',
    'Lora',
    'Titillium Web',
    'Arimo',
    'PT Sans Narrow',
    'Nunito',
    'Mukta',
    'Inconsolata',
    'Noto Serif',
    'Fira Sans',
    'Nanum Gothic',
    'Bai Jamjuree',
    'Rubik',
    'Dosis',
    'Work Sans',
    'Crimson Text',
    'Quicksand',
    'Indie Flower',
    'Bitter',
    'Oxygen',
    'Anton',
    'KoHo',
    'Libre Baskerville',
    'Fjalla One',
    'Josefin Sans',
    'Hind',
    'Cabin',
    'Arvo',
    'Libre Franklin',
    'Nunito Sans',
    'Lobster',
    'Karla',
    'Exo 2',
    'Noto Sans KR',
    'Abel',
    'Yanone Kaffeesatz',
    'Pacifico',
    'Hind Guntur',
    'Varela Round',
    'Merriweather Sans',
    'Shadows Into Light',
    'Source Code Pro',
    'Asap',
    'Hind Siliguri',
    'Acme',
    'Dancing Script',
    'Source Serif Pro',
    'Archivo Narrow',
    'Patrick Hand',
    'Abril Fatface',
    'Noto Sans JP',
    'Bree Serif',
    'Kanit',
    'Gloria Hallelujah',
    'Exo',
    'Questrial',
    'Cairo',
    'Signika',
    'Ubuntu Condensed',
    'Comfortaa',
    'Encode Sans Condensed',
    'Amatic SC',
    'Fascinate Inline',
    'Heebo',
    'Kodchasan',
    'Fahkwang',
    'EB Garamond',
    'Righteous',
    'Maven Pro',
    'Vollkorn',
    'Play',
    'Ultra',
    'Catamaran',
    'Crete Round',
    'Teko',
    'Cinzel',
    'Domine',
    'Francois One',
    'Rokkitt',
    'Rajdhani',
    'Permanent Marker',
    'Cuprum',
    'PT Sans Caption',
    'Patua One',
    'Alegreya',
    'ABeeZee',
    'Fira Sans Condensed',
    'Pathway Gothic One',
    'Courgette',
    'Assistant',
    'Noticia Text',
    'Istok Web',
    'Old Standard TT',
    'Alegreya Sans',
    'Satisfy',
    'Black Han Sans',
    'Hind Madurai',
    'News Cycle',
    'Great Vibes',
    'Cardo',
    'Srisakdi',
    'Ropa Sans',
    'Cormorant Garamond',
    'Archivo Black',
    'Kaushan Script',
    'Prompt',
    'Amiri',
    'Fredoka One',
    'Quattrocento Sans',
    'Orbitron',
    'Tinos',
    'Economica',
    'Cookie',
    'Barlow',
    'Kalam',
    'Poiret One',
    'Lobster Two',
    'Kirang Haerang',
    'Concert One',
    'Caveat',
    'Alfa Slab One',
    'Didact Gothic',
    'Cantarell',
    'Volkhov',
    'Quattrocento',
    'Luckiest Guy',
    'Passion One',
    'Khand',
    'Monda',
    'Chivo',
    'Basic',
    'Diplomata',
    'Handlee',
    'Pontano Sans',
    'Nanum Myeongjo',
    'Playfair Display SC',
    'Russo One',
    'Lalezar',
    'Cabin Condensed',
    'Josefin Slab',
    'Gudea',
    'Monoton',
    'Sacramento',
    'Vidaloka',
    'Noto Serif KR',
    'Noto Serif JP',
    'Zilla Slab',
    'Yantramanav',
    'Hind Vadodara',
    'Fira Sans Extra Condensed',
    'Armata',
    'Frank Ruhl Libre',
    'Paytone One',
    'Marck Script',
    'Bangers',
    'Neuton',
    'VT323',
    'Sanchez',
    'Hammersmith One',
    'Amaranth',
    'Boogaloo',
    'Philosopher',
    'Covered By Your Grace',
    'Barlow Condensed',
    'Merienda',
    'Sorts Mill Goudy',
    'IBM Plex Sans',
    'Taprom',
    'Sigmar One',
    'Enriqueta',
    'Montserrat Alternates',
    'Overpass',
    'Neucha',
    'Architects Daughter',
    'Audiowide',
    'Signika Negative',
    'Martel',
    'Glegoo',
    'Pragati Narrow',
    'Gentium Basic',
    'Prata',
    'Yrsa',
    'Ruda',
    'Suwannaphum',
    'PT Mono',
    'Special Elite',
    'Changa',
    'Unica One',
    'Kreon',
    'Shadows Into Light Two',
    'Parisienne',
    'Barlow Semi Condensed',
    'Yellowtail',
    'Bad Script',
    'Khula',
    'Bevan',
    'Alice',
    'Sintony',
    'Jura',
    'Gentium Book Basic',
    'Advent Pro',
    'Antic Slab',
    'Mukta Vaani',
    'Homemade Apple',
    'Caveat Brush',
    'Electrolize',
    'Adamina',
    'Arbutus Slab',
    'Sawarabi Mincho',
    'M PLUS 1p',
    'Loved by the King',
    'Carter One',
    'Actor',
    'Julius Sans One',
    'Gothic A1',
    'Gochi Hand',
    'Cabin Sketch',
    'Sarala',
    'Allura',
    'PT Serif Caption',
    'Varela',
    'Rancho',
    'Damion',
    'Coda',
    'Rambla',
    'Lusitana',
    'Playball',
    'Nothing You Could Do',
    'Chewy',
    'Oleo Script',
    'Aldrich',
    'Rock Salt',
    'Karma',
    'Notable',
    'Fugaz One',
    'Allerta',
    'Cantata One',
    'Alegreya Sans SC',
    'Taviraj',
    'Press Start 2P',
    'Scada',
    'Alex Brush',
    'Titan One',
    'Nobile',
    'Hanuman',
    'Ubuntu Mono',
    'Spinnaker',
    'Black And White Picture',
    'Saira',
    'Viga',
    'Marmelad',
    'Lustria',
    'Nanum Pen Script',
    'Kameron',
    'Overlock',
    'Marcellus',
    'Molengo',
    'Michroma',
    'Quantico',
    'Aguafina Script',
  ];


  name: string;

  imageIndex = 1;
  galleryId = 1;




  constructor(private galleryService: GalleryService) {
    this.name = `${VERSION.full}`;
  }


  // tslint:disable-next-line:member-ordering
  customPlainGalleryRowConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  // tslint:disable-next-line:member-ordering
  customPlainGalleryColumnConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  // tslint:disable-next-line:member-ordering
  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  // tslint:disable-next-line:member-ordering
  plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '80px', height: '80px' }, { length: 2, wrap: true }, 'flex-start')
  };

  // tslint:disable-next-line:member-ordering
  plainGalleryRowSpaceAround: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '50px', height: '50px' }, { length: 2, wrap: true }, 'space-around')
  };

  // tslint:disable-next-line:member-ordering
  plainGalleryRowATags: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '95px', height: '63px' }, { length: 4, wrap: true }, 'flex-start'),
    // when advanced is defined, additionalBackground: '50% 50%/cover' will be used by default.
    // I added this here, to be more explicit.
    advanced: { aTags: true, additionalBackground: '50% 50%/cover' }
  };

  // tslint:disable-next-line:member-ordering
  plainGalleryColumn: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.COLUMN,
    layout: new LineLayout({ width: '50px', height: '50px' }, { length: 3, wrap: true }, 'flex-start')
  };

  // tslint:disable-next-line:member-ordering
  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout({ width: '80px', height: '80px' }, { length: 3, wrap: true })
  };

  images: Image[] = [
    new Image(
      0,
      { // modal
        img: 'assets/images/producto/Producto_10.png',
        // extUrl: 'http://www.google.com'
        description: 'Description 1'
      }
    ),
    new Image(
      1,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img2.png',
        description: 'Description 2'
      }
    ),
    new Image(
      2,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img3.jpg',
        description: 'Description 3',
        extUrl: 'http://www.google.com'
      },
      { // plain
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/img3.png',
        title: 'custom title 2',
        alt: 'custom alt 2',
        ariaLabel: 'arial label 2'
      }
    ),
    new Image(
      3,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img4.jpg',
        description: 'Description 4',
        extUrl: 'http://www.google.com'
      }
    ),
    new Image(
      4,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img5.jpg'
      },
      { // plain
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/img5.jpg'
      }
    )
  ];


  // array with a single image inside (the first one)
  singleImage: Image[] = [this.images[0]];

  dotsConfig: DotsConfig = {
    visible: false
  };

  customDescription: Description = {
    strategy: DescriptionStrategy.ALWAYS_VISIBLE,
    imageText: 'Look this image ',
    numberSeparator: ' of ',
    beforeTextDescription: ' => '
  };

  customDescriptionStyle: Description = {
    strategy: DescriptionStrategy.ALWAYS_VISIBLE,
    imageText: 'Look this image ',
    numberSeparator: ' of ',
    beforeTextDescription: ' => ',
    style: {
      bgColor: 'rgba(255,0,0,.5)',
      textColor: 'blue',
      marginTop: '3px',
      marginBottom: '0px',
      marginLeft: '5px',
      marginRight: '5px',
      position: 'absolute',
      top: '0px',
      height: '25px'
      // be careful to use width, in particular with % values
    }
  };

  customDescriptionHideIfEmpty: Description = {
    strategy: DescriptionStrategy.HIDE_IF_EMPTY,
    imageText: 'Look this image ',
    numberSeparator: ' of ',
    beforeTextDescription: ' => '
  };

  customFullDescription: Description = {
    strategy: DescriptionStrategy.ALWAYS_VISIBLE,
    // you should build this value programmaticaly with the result of (show)="..()" event
    customFullDescription: 'Custom description of the current visible image'
    // if customFullDescription !== undefined, all other fields will be ignored
    // imageText: '',
    // numberSeparator: '',
    // beforeTextDescription: '',
  };

  customFullDescriptionHidden: Description = {
    strategy: DescriptionStrategy.ALWAYS_HIDDEN,
    // you should build this value programmaticaly with the result of (show)="..()" event
    customFullDescription: 'Custom description of the current visible image'
    // if customFullDescription !== undefined, all other fields will be ignored
    // imageText: '',
    // numberSeparator: '',
    // beforeTextDescription: '',
  };

  // customButtonsSize: ButtonSize = {
  //   width: 10,
  //   height: 10,
  //   unit: 'px'
  // };

  buttonsConfigDefault: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  };
  buttonsConfigSimple: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.SIMPLE
  };
  buttonsConfigAdvanced: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.ADVANCED
  };
  buttonsConfigFull: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.FULL
  };

  // default buttons but extUrl will open the link in a new tab instead of the current one
  // this requires to specify all buttons manually (also if they are not really custom)
  customButtonsConfigExtUrlNewTab: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      {
        className: 'ext-url-image',
        type: ButtonType.EXTURL,
        extUrlInNewTab: true // <--- this is the important thing to understand this example
      },
      {
        className: 'download-image',
        type: ButtonType.DOWNLOAD
      },
      {
        className: 'close-image',
        type: ButtonType.CLOSE
      }
    ]
  };

  customButtonsFontAwesomeConfig: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      {
        className: 'fas fa-plus white',
        type: ButtonType.CUSTOM,
        ariaLabel: 'custom plus aria label',
        title: 'custom plus title',
        fontSize: '20px'
      },
      {
        className: 'fas fa-times white',
        type: ButtonType.CLOSE,
        ariaLabel: 'custom close aria label',
        title: 'custom close title',
        fontSize: '20px'
      },
      {
        className: 'fas fa-download white',
        type: ButtonType.DOWNLOAD,
        ariaLabel: 'custom download aria label',
        title: 'custom download title',
        fontSize: '20px'
      },
      {
        className: 'fas fa-external-link-alt white',
        type: ButtonType.EXTURL,
        ariaLabel: 'custom exturl aria label',
        title: 'custom exturl title',
        fontSize: '20px'
      }
    ]
  };

  previewConfigOneImage: PreviewConfig = {
    visible: true,
    number: 1
  };

  previewConfigNoArrows: PreviewConfig = {
    visible: true,
    arrows: false
  };

  previewConfigNoClickable: PreviewConfig = {
    visible: true,
    clickable: false
  };

  // TODO still not implemented
  previewConfigAlwaysCenter: PreviewConfig = {
    visible: true
  };

  previewConfigCustomSize: PreviewConfig = {
    visible: true,
    size: { width: '30px', height: '30px' }
  };

  accessibilityConfig: AccessibilityConfig = {
    backgroundAriaLabel: 'CUSTOM Modal gallery full screen background',
    backgroundTitle: 'CUSTOM background title',

    plainGalleryContentAriaLabel: 'CUSTOM Plain gallery content',
    plainGalleryContentTitle: 'CUSTOM plain gallery content title',

    modalGalleryContentAriaLabel: 'CUSTOM Modal gallery content',
    modalGalleryContentTitle: 'CUSTOM modal gallery content title',

    loadingSpinnerAriaLabel: 'CUSTOM The current image is loading. Please be patient.',
    loadingSpinnerTitle: 'CUSTOM The current image is loading. Please be patient.',

    mainContainerAriaLabel: 'CUSTOM Current image and navigation',
    mainContainerTitle: 'CUSTOM main container title',
    mainPrevImageAriaLabel: 'CUSTOM Previous image',
    mainPrevImageTitle: 'CUSTOM Previous image',
    mainNextImageAriaLabel: 'CUSTOM Next image',
    mainNextImageTitle: 'CUSTOM Next image',

    dotsContainerAriaLabel: 'CUSTOM Image navigation dots',
    dotsContainerTitle: 'CUSTOM dots container title',
    dotAriaLabel: 'CUSTOM Navigate to image number',

    previewsContainerAriaLabel: 'CUSTOM Image previews',
    previewsContainerTitle: 'CUSTOM previews title',
    previewScrollPrevAriaLabel: 'CUSTOM Scroll previous previews',
    previewScrollPrevTitle: 'CUSTOM Scroll previous previews',
    previewScrollNextAriaLabel: 'CUSTOM Scroll next previews',
    previewScrollNextTitle: 'CUSTOM Scroll next previews'
  };

  openImageModalRow(image: Image) {
    console.log('Opening modal gallery from custom plain gallery row, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new AdvancedLayout(index, true) });
  }

  openImageModalColumn(image: Image) {
    console.log('Opening modal gallery from custom plain gallery column, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    this.customPlainGalleryColumnConfig = Object.assign({},
      this.customPlainGalleryColumnConfig, { layout: new AdvancedLayout(index, true) });
  }

  // openImageModalRowDescription(image: Image) {
  //   console.log('Opening modal gallery from custom plain gallery row and description, with image: ', image);
  //   const index: number = this.getCurrentIndexCustomLayout(image, this.imagesRect);
  //   this.customPlainGalleryRowDescConfig = Object.assign({},
  //     this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  // }

  onButtonBeforeHook(event: ButtonEvent) {
    console.log('onButtonBeforeHook ', event);

    if (!event || !event.button) {
      return;
    }

    // Invoked after a click on a button, but before that the related
    // action is applied.
    // For instance: this method will be invoked after a click
    // of 'close' button, but before that the modal gallery
    // will be really closed.

    if (event.button.type === ButtonType.DELETE) {
      // remove the current image and reassign all other to the array of images

      console.log('delete in app with images count ' + this.images.length);

      this.images = this.images.filter((val: Image) => event.image && val.id !== event.image.id);
    }
  }

  onButtonAfterHook(event: ButtonEvent) {
    console.log('onButtonAfterHook ', event);

    if (!event || !event.button) {
      return;
    }

    // Invoked after both a click on a button and its related action.
    // For instance: this method will be invoked after a click
    // of 'close' button, but before that the modal gallery
    // will be really closed.
  }

  onCustomButtonBeforeHook(event: ButtonEvent, galleryId: number | undefined) {
    console.log('onCustomButtonBeforeHook with galleryId=' + galleryId + ' and event: ', event);
    if (!event || !event.button) {
      return;
    }
    // Invoked after a click on a button, but before that the related
    // action is applied.

    if (event.button.type === ButtonType.CUSTOM) {
      console.log('adding a new random image at the end');
      this.addRandomImage();

      setTimeout(() => {
        this.galleryService.openGallery(galleryId, this.images.length - 1);
      }, 0);
    }
  }

  onCustomButtonAfterHook(event: ButtonEvent, galleryId: number | undefined) {
    console.log('onCustomButtonAfterHook with galleryId=' + galleryId + ' and event: ', event);
    if (!event || !event.button) {
      return;
    }
    // Invoked after both a click on a button and its related action.
  }

  onImageLoaded(event: ImageModalEvent) {
    // angular-modal-gallery will emit this event if it will load successfully input images
    console.log('onImageLoaded action: ' + Action[event.action]);
    console.log('onImageLoaded result:' + event.result);
  }

  onVisibleIndex(event: ImageModalEvent) {
    console.log('onVisibleIndex action: ' + Action[event.action]);
    console.log('onVisibleIndex result:' + event.result);
  }

  onIsFirstImage(event: ImageModalEvent) {
    console.log('onIsFirstImage onfirst action: ' + Action[event.action]);
    console.log('onIsFirstImage onfirst result:' + event.result);
  }

  onIsLastImage(event: ImageModalEvent) {
    console.log('onIsLastImage onlast action: ' + Action[event.action]);
    console.log('onIsLastImage onlast result:' + event.result);
  }

  onCloseImageModal(event: ImageModalEvent) {
    console.log('onClose action: ' + Action[event.action]);
    console.log('onClose result:' + event.result);
    // reset custom plain gallery config
    this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new AdvancedLayout(-1, true) });
    this.customPlainGalleryColumnConfig = Object.assign({}, this.customPlainGalleryColumnConfig, { layout: new AdvancedLayout(-1, true) });
    this.customPlainGalleryRowDescConfig = Object.assign({},
      this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(-1, true) });
  }

  addRandomImage() {
    const imageToCopy: Image = this.images[Math.floor(Math.random() * this.images.length)];
    const newImage: Image = new Image(this.images.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    this.images = [...this.images, newImage];
  }

  openModalViaService(id: number | undefined, index: number) {
    console.log('opening gallery with index ' + index);
    this.galleryService.openGallery(id, index);
  }

  trackById(index: number, item: Image) {
    return item.id;
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }


  ngOnInit() {
    // this.colorFont = this.colores[1];
    this.myStyles.color = this.colores[60];
    this.styleWeight = this.fontWeight[1];
    this.styleBackgroundColor = this.colores[0];
    this.styleFont = this.styles[0];
    this.familyFont = this.fontFamylist[0];
    this.size = 50;
    this.myStyles['font-size'] = this.size + 'px';

  }


  suma() {
    this.size = this.size + 1;
    this.myStyles['font-size'] = this.size + 'px';
  }

  resta() {
    this.size = this.size - 1;
    this.myStyles['font-size'] = this.size + 'px';
  }

  setStyles() {
    this.myStyles['font-weight'] = this.styleWeight;
  }

  setBackgroundColor() {
    this.myStyles['background-color'] = this.styleBackgroundColor;
  }

  setStylesFont() {
    this.myStyles['font-style'] = this.styleFont;
  }

  setFontFamily() {
    this.myStyles['font-family'] = this.familyFont;
  }




}
