import { Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataService } from "../data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
toggleopen:boolean;
message:boolean;
modalRef: BsModalRef;
constructor(private modalService: BsModalService, private data:DataService) { }
openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

openPanel(){
this.data.currenttoggle.subscribe(toggleopen => this.toggleopen = toggleopen); 
this.data.changetoggle(this.toggleopen);

} 

 ngOnInit() { 
 //this.data.currentMessage.subscribe(message => {this.message});
 this.data.currentMessage.subscribe(message => this.message = message)  
  }

}
