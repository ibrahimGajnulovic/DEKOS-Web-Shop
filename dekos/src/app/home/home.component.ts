import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownLong, fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  faDownArrow = faDownLong

  ngOnInit(): void {
  }

}
