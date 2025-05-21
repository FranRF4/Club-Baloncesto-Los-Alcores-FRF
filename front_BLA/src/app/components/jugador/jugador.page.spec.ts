import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { JugadorPage } from './jugador.page';

describe('Tab3Page', () => {
  let component: JugadorPage;
  let fixture: ComponentFixture<JugadorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JugadorPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(JugadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
