/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RightPaneComponent } from './right-pane.component';

describe('RightPaneComponent', () => {
  let component: RightPaneComponent;
  let fixture: ComponentFixture<RightPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
