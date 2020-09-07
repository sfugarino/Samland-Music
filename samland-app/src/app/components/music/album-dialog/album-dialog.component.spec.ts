import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDialogComponent } from './album-dialog.component';

describe('AlbumDialogComponent', () => {
  let component: AlbumDialogComponent;
  let fixture: ComponentFixture<AlbumDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
