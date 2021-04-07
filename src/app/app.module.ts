import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LaunchesModule } from "./components/launches/launches.module";

@NgModule({
  imports: [BrowserModule, LaunchesModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
