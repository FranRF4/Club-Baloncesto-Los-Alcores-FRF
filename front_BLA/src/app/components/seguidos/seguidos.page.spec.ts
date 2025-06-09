import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SeguidosPage } from './seguidos.page';

describe('EquipoPage', () => {
  let component: SeguidosPage;
  let fixture: ComponentFixture<SeguidosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeguidosPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SeguidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
