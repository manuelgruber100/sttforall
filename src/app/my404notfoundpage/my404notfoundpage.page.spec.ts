import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { My404notfoundpagePage } from './my404notfoundpage.page';

describe('My404notfoundpagePage', () => {
  let component: My404notfoundpagePage;
  let fixture: ComponentFixture<My404notfoundpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ My404notfoundpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(My404notfoundpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
