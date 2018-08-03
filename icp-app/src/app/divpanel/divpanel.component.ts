import { Component, OnInit} from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-divpanel',
  templateUrl: './divpanel.component.html',
  styleUrls: ['./divpanel.component.css']
})
export class DivpanelComponent implements OnInit {
toggleopen:boolean;

constructor(private data:DataService) { }

closePanel(){
this.data.currenttoggle.subscribe(toggleopen => this.toggleopen = toggleopen);
 this.data.changetoggle(false); 
} 
  ngOnInit() {
  }

}
