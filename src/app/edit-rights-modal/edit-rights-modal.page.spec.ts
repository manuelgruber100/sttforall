import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditRightsModalPage } from './edit-rights-modal.page';

describe('EditRightsModalPage', () => {
  let component: EditRightsModalPage;
  let fixture: ComponentFixture<EditRightsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRightsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditRightsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
