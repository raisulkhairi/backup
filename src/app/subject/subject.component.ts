import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-subject',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
