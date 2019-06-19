import { async, TestBed } from '@angular/core/testing';
import { PagesLoginModule } from './pages-login.module';

describe('PagesLoginModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PagesLoginModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PagesLoginModule).toBeDefined();
  });
});
