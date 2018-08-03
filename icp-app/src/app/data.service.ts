import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private messageSource = new BehaviorSubject(false);
currentMessage = this.messageSource.asObservable();
private toggleSource = new BehaviorSubject(false);
currenttoggle = this.toggleSource.asObservable();

constructor() { }

changeMessage(message: boolean) {
 this.messageSource.next(message)
}

changetoggle(toggleopen:boolean){
this.toggleSource.next(toggleopen = !toggleopen)
  }

}