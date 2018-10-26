import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// servicios
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { AuthGuard } from '../app/guards/auth.guard';

// modulos
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';

// galery

// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // <------ mandatory dependency for angular-modal-gallery
import 'mousetrap'; // <------ mandatory dependency for angular-modal-gallery
import { ModalGalleryModule } from 'angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// **************************************************************************

// ************************ optional font-awesome 5 ************************
// to install use both `npm i --save @fortawesome/fontawesome` and `npm i --save @fortawesome/fontawesome-free-solid`
// import { faExternalLinkAlt, faPlus, faTimes, faDownload } from '@fortawesome/fontawesome-free-solid';
// import * as fontawesome from '@fortawesome/fontawesome';
// fontawesome.library.add(faExternalLinkAlt, faPlus, faTimes, faDownload);
// *************************************************************************

// component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterPageComponent } from './component/register-page/register-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { PrivadoPageComponent } from './component/privado-page/privado-page.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';
import { ProductoComponent } from './component/producto/producto.component';
import { FooterComponent } from './component/footer/footer.component';
import { PromocionesComponent } from './component/promociones/promociones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivadoPageComponent,
    NotFoundPageComponent,
    ProductoComponent,
    FooterComponent,
    PromocionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    AngularFireAuthModule,
    FlashMessagesModule,
    // NgClass,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ModalGalleryModule.forRoot()
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
