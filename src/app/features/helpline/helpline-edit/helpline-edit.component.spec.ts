/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HelplineEditComponent } from './helpline-edit.component';

describe('HelplineEditComponent', () => {
  let component: HelplineEditComponent;
  let fixture: ComponentFixture<HelplineEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelplineEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelplineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
