import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './routes/AppRouting.module';

import { AppComponent } from './app.component';
import { DisplayComponent } from './Component/display/display.component';
import { ResultComponent } from './Component/result/result.component';
import { LeaderbordComponent } from './Component/leaderbord/leaderbord.component';
import { RoundpickComponent } from './Component/roundpick/roundpick.component';
import { TitleComponent } from './Component/title/title.component';
import { AppService } from './Service/app.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ResultComponent,
    LeaderbordComponent,
    RoundpickComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
