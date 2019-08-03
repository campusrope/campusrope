/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HelplineAddComponent } from './helpline-add.component';

describe('HelplineAddComponent', () => {
  let component: HelplineAddComponent;
  let fixture: ComponentFixture<HelplineAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelplineAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelplineAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
