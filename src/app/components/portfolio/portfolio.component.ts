import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  filters: any [] = [
    {
      tag: 'all',
      name: 'All'
    },
    {
      tag: 'web-development',
      name: 'Web Development'
    },
    {
      tag: 'web-design',
      name: 'Web Design'
    },
    {
      tag: 'title-1',
      name: 'Title'
    },
    {
      tag: 'title-2',
      name: 'Title'
    }
  ];

  works: any [] = [
    {
      tag: 'web-development',
      title: '',
      imgUrl: 'assets/img/project-webdevelopment.jpg',
      link: '#'
    },
    {
      tag: 'web-design',
      title: '',
      imgUrl: 'assets/img/project-webdesign.jpg',
      link: '#'
    },
    {
      tag: 'web-development',
      title: '',
      imgUrl: 'assets/img/project-webdevelopment.jpg',
      link: '#'
    },
    {
      tag: 'title-1',
      title: '',
      imgUrl: 'assets/img/project-title1.jpg',
      link: '#'
    },
    {
      tag: 'title-2',
      title: '',
      imgUrl: 'assets/img/project-title2.jpg',
      link: '#'
    },
    {
      tag: 'title-1',
      title: '',
      imgUrl: 'assets/img/project-title1.jpg',
      link: '#'
    },
    {
      tag: 'web-design',
      title: '',
      imgUrl: 'assets/img/project-webdesign.jpg',
      link: '#'
    },
    {
      tag: 'web-development',
      title: '',
      imgUrl: 'assets/img/project-webdevelopment.jpg',
      link: '#'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
