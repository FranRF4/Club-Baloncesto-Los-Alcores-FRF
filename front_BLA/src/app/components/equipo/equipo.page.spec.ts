import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EquipoPage } from './equipo.page';

describe('EquipoPage', () => {
  let component: EquipoPage;
  let fixture: ComponentFixture<EquipoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipoPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EquipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
