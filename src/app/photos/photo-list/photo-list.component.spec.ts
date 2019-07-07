import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {PhotoListComponent} from './photo-list.component';
import {ddescribe, beforeEach, it, expect} from '@angular/core/testing/src/testing_internal';

ddescribe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
