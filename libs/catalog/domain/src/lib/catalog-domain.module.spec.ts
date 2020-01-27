import { async, TestBed } from '@angular/core/testing';
import { CatalogDomainModule } from './catalog-domain.module';

describe('CatalogDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CatalogDomainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CatalogDomainModule).toBeDefined();
  });
});
