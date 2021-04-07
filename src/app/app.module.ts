import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LaunchesModule } from "./components/launches/launches.module";

@NgModule({
  imports: [BrowserModule, LaunchesModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
