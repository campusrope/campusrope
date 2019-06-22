/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeCenterMenuComponent } from './home-center-menu.component';

describe('HomeCenterMenuComponent', () => {
  let component: HomeCenterMenuComponent;
  let fixture: ComponentFixture<HomeCenterMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCenterMenuComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCenterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
