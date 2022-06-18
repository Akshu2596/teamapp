import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teamapp';
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | '' = '';
  teams:string [][] =[]
  
  saveName(member: string){
    this.newMemberName = member;
  }
  
  addMember(){
    if(!this.newMemberName){
      this.errorMessage = 'Name cannot be blank!';
      return;
    }
    this.errorMessage='';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    console.log(this.members);
  }

  saveNumberOfTeams(value: string){
    this.numberOfTeams = Number(value)
  }
 
  generateTeam(){

    if(!this.numberOfTeams || this.numberOfTeams <=0){
      this.errorMessage ='Enter valid number of teams'
      return
    }

    if(this.members.length < this.numberOfTeams){
      this.errorMessage = 'Not enough members'
      return
    }
    this.errorMessage = '';
    //creates the replica of the members array so that the original array is not manipulated
    const allMembers = [...this.members];
    while(allMembers.length){
      for(let i = 0; i < this.numberOfTeams; i++){
        const randomIndex = Math.floor(Math.random() * allMembers.length)
        //removing the member from the main array of members
        const member = allMembers.splice(randomIndex, 1)[0];
        if(!member)
        break;
        //if the teams array exists iterating with i
        if(this.teams[i]){
          //push the member to it
          this.teams[i].push(member)
        } else{
          //create the teams array and add the member to it
          this.teams[i] = [member]
        }
      }
    }
    this.members = []
    this.numberOfTeams = ''
    console.log(this.teams);
  }
}
