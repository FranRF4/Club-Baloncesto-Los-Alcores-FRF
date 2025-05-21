import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TemporadaPage } from './temporada.page';

describe('TemporadaPage', () => {
  let component: TemporadaPage;
  let fixture: ComponentFixture<TemporadaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemporadaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TemporadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
