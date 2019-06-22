import { async, TestBed } from '@angular/core/testing';
import { PagesHelplineModule } from './pages-helpline.module';

describe('PagesHelplineModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PagesHelplineModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PagesHelplineModule).toBeDefined();
  });
});
