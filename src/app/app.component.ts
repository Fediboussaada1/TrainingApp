import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training-app';
  session_name ="Formation angular"
  nbpart: number =0;
  firstSession = {
    id : 1,
    name : "formation web",
    track : "MEAN stack",
    date : new Date('2018-06-13'),
    local : "Lyon",
    duree : 3,
    participants: 0 
  };
  nbrParticipantsChange(event:any){
    this.nbpart = event.value;
  }
}
