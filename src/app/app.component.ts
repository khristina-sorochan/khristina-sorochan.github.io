import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  socials: any [] = [
    {
      name: 'Linkedin',
      iconUrl: '/assets/img/LinkedIn.svg',
      link: 'https://www.linkedin.com/in/kristina-sorochan-8842681b8/'
    },
    {
      name: 'Github',
      iconUrl: '/assets/img/Github.svg',
      link: 'https://github.com/khristina-sorochan'
    },
    {
      name: 'Behance',
      iconUrl: '/assets/img/Behance.svg',
      link: 'https://www.behance.net/khristinasorochan'
    },
    {
      name: 'Facebook',
      iconUrl: '/assets/img/Facebook.svg',
      link: '#'
    },
    {
      name: 'Instagram',
      iconUrl: '/assets/img/Instagram.svg',
      link: '#'
    }
  ];

  constructor() { }

  openNav(): void {
    document.getElementById("mySidenav").style.width = "100%";
  }

  closeNav(): void {
    document.getElementById("mySidenav").style.width = "0";
  }

  scrollToContent(): void {
    const content = document.getElementById('content');
    content.scrollIntoView();
  }

  scrollToTop(): void {
    window.scroll(0, 0);
  }

}
