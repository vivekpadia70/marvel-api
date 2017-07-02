import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations'
import { GetCharactersService } from './get-characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [

    trigger('enterCard', [
      transition('void => *', [
        style({transform: 'translateX(-50%)', opacity: 0}),
        animate('.5s ease-in-out')
      ])
    ])

  ]
})
export class AppComponent {
  Data={};
  Characters: any[] = [];
  loading: boolean = false;
  newload: boolean = false;
  imgage_type: string = 'portrait-fantastic.jpg'
  constructor(private getCharacters: GetCharactersService){}

  ngOnInit(){
    this.loading=true;
    this.getCharacters.getHeroes().subscribe(
      res => this.Data = res,
      err => console.log(err),
      () => this.makeArr(this.Data)
    );
  }

  findMore(){
    this.newload = true;
    this.getCharacters.getNew().subscribe(
      res => this.Data = res,
      err => console.log(err),
      () => this.makeArr(this.Data)
    );
  }

  makeArr(res){
    for(let i of res.data.results){
      this.Characters.push(i);
    }
    this.loading = false;
    this.newload = false;
  }
}
