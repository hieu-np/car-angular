import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import { MenubarModule } from 'primeng/menubar';
import { NavComponent } from './components/nav/nav.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { GalleriaModule } from 'primeng/galleria';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { PhotoService } from './service/photoservice';
@NgModule({
  declarations: [AppComponent, NavComponent, SlideshowComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    MenubarModule,
    GalleriaModule,
    TabMenuModule,
    TabViewModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
