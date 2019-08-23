/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { ManageClientService } from "./manage-client.service";

describe("Service: ManageClient", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageClientService]
    });
  });

  it("should ...", inject([ManageClientService], (service: ManageClientService) => {
    expect(service).toBeTruthy();
  }));
});
