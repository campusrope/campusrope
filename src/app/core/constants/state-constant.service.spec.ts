/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { StateConstantService } from "./state-constant.service";

describe("Service: StateConstant", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateConstantService]
    });
  });

  it("should ...", inject([StateConstantService], (service: StateConstantService) => {
    expect(service).toBeTruthy();
  }));
});
