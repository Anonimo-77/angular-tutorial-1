import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  styleObj = {
    color: '#ff0000'
  }

  @Input() color: string;
  users = [
    {
      username: 'User1',
      pro: false
    },
    {
      username: 'User2',
      pro: true
    },
    {
      username: 'User3',
      pro: false
    },
    {
      username: 'User4',
      pro: false
    },
    {
      username: 'User5',
      pro: true
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
