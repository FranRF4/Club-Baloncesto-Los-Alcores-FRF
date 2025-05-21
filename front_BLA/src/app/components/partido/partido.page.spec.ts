import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PartidoPage } from './partido.page';

describe('EquipoPage', () => {
  let component: PartidoPage;
  let fixture: ComponentFixture<PartidoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartidoPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PartidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
