import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WelcomeComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, FooterComponent, WelcomeComponent],
})
export class CoreModule {}
