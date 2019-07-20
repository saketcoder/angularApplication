import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AlertModule } from 'ngx-alerts';

@NgModule({
  declarations: [LogoutComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,FormsModule,AlertModule
  ],
  exports:[FormsModule ,LogoutComponent,FooterComponent,HeaderComponent]
})
export class SharedModule { }
