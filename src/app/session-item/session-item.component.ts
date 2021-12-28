import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  alignement = 'right';
  couleur = 'red';
  @Input() session : any;
  constructor() { }

  ngOnInit(): void {
  }
  inscrire(){
    console.log("nouvelle inscription...");
    this.session.participants = this.session.participants+1;
    console.log(this.session.participants+" Participants");
    if (this.session.participants >= 20)
    {
      this.session.isCompleted = true;
    }
  }

}
