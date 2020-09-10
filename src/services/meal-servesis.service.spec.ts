import { TestBed } from '@angular/core/testing';

import { MealServesisService } from './meal-servesis.service';

describe('MealServesisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MealServesisService = TestBed.get(MealServesisService);
    expect(service).toBeTruthy();
  });
});
