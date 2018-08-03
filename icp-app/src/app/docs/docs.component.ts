import { Component, OnInit} from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

message:boolean;
constructor(private data:DataService) { }

ngOnInit() {
 this.data.currentMessage.subscribe(message => this.message = message);
 this.data.changeMessage(true); 
  }

ngOnDestroy(){
this.data.changeMessage(false); 
}  
}
