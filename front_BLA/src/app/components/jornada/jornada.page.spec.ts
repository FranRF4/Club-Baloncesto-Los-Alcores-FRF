import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { JornadaPage } from './jornada.page';

describe('JornadaPage', () => {
  let component: JornadaPage;
  let fixture: ComponentFixture<JornadaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JornadaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(JornadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
