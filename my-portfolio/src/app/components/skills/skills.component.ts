import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: any [] = [
    {
      name: 'HTML5/CSS3',
      value: '95'
    },
    {
      name: 'Java Script',
      value: '90'
    },
    {
      name: 'Flexbox',
      value: '95'
    },
    {
      name: 'Bootstrap',
      value: '75'
    },
    {
      name: 'GitHub',
      value: '60'
    },
    {
      name: 'Angular',
      value: '75'
    },
    {
      name: 'Adobe Photoshop',
      value: '95'
    },
    {
      name: 'Adobe Lightroom',
      value: '90'
    },
    {
      name: 'Prototyping',
      value: '95'
    },
    {
      name: 'Figma',
      value: '50'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
