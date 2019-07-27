import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RightpaneComponent } from "./rightpane.component";

describe("RightpaneComponent", () => {
  let component: RightpaneComponent;
  let fixture: ComponentFixture<RightpaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RightpaneComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightpaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
