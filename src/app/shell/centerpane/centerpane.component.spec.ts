import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterpaneComponent } from './centerpane.component';

describe('CenterpaneComponent', () => {
  let component: CenterpaneComponent;
  let fixture: ComponentFixture<CenterpaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterpaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterpaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
