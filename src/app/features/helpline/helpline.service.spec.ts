/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { HelplineService } from "./helpline.service";

describe("Service: Helpline", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelplineService]
    });
  });

  it("should ...", inject([HelplineService], (service: HelplineService) => {
    expect(service).toBeTruthy();
  }));
});
