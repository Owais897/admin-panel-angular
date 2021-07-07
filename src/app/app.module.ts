import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';

import { MyDirectivesDirective } from './directives/my-directives.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FirstCapitalPipe } from './pipes/first-capital.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    TestComponentComponent,
    MyDirectivesDirective,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    MainComponentComponent,
    HighlightDirective,
    FirstCapitalPipe,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  isChecked = true;
}
