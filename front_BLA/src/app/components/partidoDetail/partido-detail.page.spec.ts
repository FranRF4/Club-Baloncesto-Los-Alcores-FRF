import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PartidoDetailPage } from './partido-detail.page';

describe('EquipoPage', () => {
  let component: PartidoDetailPage;
  let fixture: ComponentFixture<PartidoDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartidoDetailPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PartidoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
