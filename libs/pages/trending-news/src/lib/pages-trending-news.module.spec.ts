import { async, TestBed } from '@angular/core/testing';
import { PagesTrendingNewsModule } from './pages-trending-news.module';

describe('PagesTrendingNewsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PagesTrendingNewsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PagesTrendingNewsModule).toBeDefined();
  });
});
