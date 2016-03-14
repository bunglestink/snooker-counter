import {App, MenuController, IonicApp, Platform} from 'ionic-angular';
import {CounterPage} from './pages/counter/counter';
import {AboutPage} from './pages/about/about';

// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';


@App({
  template: `
    <ion-menu [content]="content">
      <ion-toolbar primary>
        <ion-title>Snooker</ion-title>
      </ion-toolbar>
      <ion-content>
        <ion-list>
          <button ion-item (click)="openPage(counterPage)">
            Counter
          </button>
          <button ion-item (click)="openPage(aboutPage)">
            About
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-nav id="nav" #content [root]="counterPage"></ion-nav>`,
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  public app: IonicApp;
  public menu: MenuController;
  public counterPage = CounterPage;
  public aboutPage = AboutPage;

  constructor(app: IonicApp, menu: MenuController, platform: Platform) {
    this.app = app;
    this.menu = menu;

    platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }

  openPage(page) {
      this.menu.close();
      const nav = this.app.getComponent('nav');
      nav.setRoot(page);
  }
}
