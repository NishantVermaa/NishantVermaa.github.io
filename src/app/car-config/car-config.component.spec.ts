import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarConfigComponent } from './car-config.component';
import { CarDataService } from '../apis/car-data.service';

describe('CarConfigComponent', () => {
  let component: CarConfigComponent;
  let fixture: ComponentFixture<CarConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarConfigComponent, CarDataService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CarConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
