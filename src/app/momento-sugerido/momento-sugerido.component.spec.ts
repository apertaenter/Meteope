import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentoSugeridoComponent } from './momento-sugerido.component';

describe('MomentoSugeridoComponent', () => {
  let component: MomentoSugeridoComponent;
  let fixture: ComponentFixture<MomentoSugeridoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentoSugeridoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentoSugeridoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
