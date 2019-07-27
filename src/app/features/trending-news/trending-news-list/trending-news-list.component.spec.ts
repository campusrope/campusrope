/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { TrendingNewsListComponent } from "./trending-news-list.component";

describe("TrendingNewsListComponent", () => {
  let component: TrendingNewsListComponent;
  let fixture: ComponentFixture<TrendingNewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingNewsListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
