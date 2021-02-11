import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PercentageListModalPage } from './percentage-list-modal.page';

describe('PercentageListModalPage', () => {
  let component: PercentageListModalPage;
  let fixture: ComponentFixture<PercentageListModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentageListModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PercentageListModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
