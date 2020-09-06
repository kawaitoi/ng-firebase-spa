import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/interfaces/pet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

pet:Pet={

  name: 'テスト222',
  level: 4,
  exp: 300,
  avatarURL: '/assets/images/pet-1.png'
}

  constructor() { }

  ngOnInit(): void {
  }

}
