import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivpanelComponent } from './divpanel.component';

describe('DivpanelComponent', () => {
  let component: DivpanelComponent;
  let fixture: ComponentFixture<DivpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
