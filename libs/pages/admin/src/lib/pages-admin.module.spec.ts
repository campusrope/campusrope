import { async, TestBed } from '@angular/core/testing';
import { PagesAdminModule } from './pages-admin.module';

describe('PagesAdminModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PagesAdminModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PagesAdminModule).toBeDefined();
  });
});
