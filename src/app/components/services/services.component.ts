import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: any [] = [
    {
      iconUrl: 'assets/img/iconfinder_window-javascript-coding_532714.svg',
      title: 'Web Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
    },
    {
      iconUrl: 'assets/img/iconfinder_browser-web-content_532739.svg',
      title: 'Web Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
    },
    {
      iconUrl: 'assets/img/iconfinder_computer-devices-responsive_532706.svg',
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
    },
    {
      iconUrl: 'assets/img/iconfinder_clean-code-window_532737.svg',
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
