import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControllingModalPage } from './controlling-modal.page';

describe('ControllingModalPage', () => {
  let component: ControllingModalPage;
  let fixture: ComponentFixture<ControllingModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllingModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControllingModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
