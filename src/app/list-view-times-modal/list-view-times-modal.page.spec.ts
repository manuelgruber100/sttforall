import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListViewTimesModalPage } from './list-view-times-modal.page';

describe('ListViewTimesModalPage', () => {
  let component: ListViewTimesModalPage;
  let fixture: ComponentFixture<ListViewTimesModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewTimesModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListViewTimesModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
