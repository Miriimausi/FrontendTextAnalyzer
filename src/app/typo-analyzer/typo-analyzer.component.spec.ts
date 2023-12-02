import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypoAnalyzerComponent } from './typo-analyzer.component';

describe('TypoAnalyzerComponent', () => {
  let component: TypoAnalyzerComponent;
  let fixture: ComponentFixture<TypoAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypoAnalyzerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypoAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
