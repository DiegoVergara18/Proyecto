import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Share } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Customers', url: '/customers', icon: 'clipboard' },
    { title: 'Cities', url: '/cities', icon: 'location' },
    { title: 'Login', url: '/login', icon: 'log-in' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
  shareApp(){

  
  Share['share']({
    title: 'Título del compartido',
    text: 'Texto que deseas compartir',
    url: 'http://ionicframework.com',
  
  });
  }
}

