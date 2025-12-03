import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor() { }

  async ngOnInit() {
    // Hide the splash screen once the app is ready
    try {
      await SplashScreen.hide();
    } catch (error) {
      console.log('SplashScreen not available:', error);
    }
  }
}
