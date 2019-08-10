/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { TrendingNewsService } from "./trending-news.service";

describe("Service: TrendingNews", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrendingNewsService]
    });
  });

  it("should ...", inject([TrendingNewsService], (service: TrendingNewsService) => {
    expect(service).toBeTruthy();
  }));
});
