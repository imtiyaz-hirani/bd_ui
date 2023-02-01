
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from './core/services/settings.service';
import { VendorFrontendUiComponent } from './vendor-frontend-ui.component';

describe('VendorFrontendUiComponent', () => {
  // let fixture: ComponentFixture<VendorFrontendUiComponent>;
  let fixture: VendorFrontendUiComponent;
  let authService: TranslateService,

    settingsService: SettingsService;
  beforeEach(async(() => {
    fixture = new VendorFrontendUiComponent(
      authService,
      settingsService
    ); // TestBed.createComponent(VendorFrontendUiComponent);
    //component = fixture.componentInstance;
    // fixture.detectChanges();
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [VendorFrontendUiComponent],
    }).compileComponents();
  }));
  it('should create the app', () => {
    expect(fixture.title).toBeTruthy();
  });
});
