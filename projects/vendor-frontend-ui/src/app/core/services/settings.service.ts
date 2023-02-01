import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { FrontendSetting } from '../models/frontend-setting';
import { WidgetMetaData } from '../../shared/widgets/widget-meta-data';
import { TileDataSource } from '../models/tile-data-source';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  static readonly BOOKMARKS_KEY = 'bookmarks';
  static readonly WIDGETS_KEY = 'widgets';
  static readonly KPI_KEY = 'kpi';
  static readonly LANGUAGE_KEY = 'lang';
  static readonly EMPTY_KEY = 'empty';

  private baseUrl = '/backend/frontendsettings/api/v1/settings';

  private userSettings$: Observable<FrontendSetting[]>;

  constructor(private httpClient: HttpClient) {}

  get userSettings(): Observable<FrontendSetting[]> {
    if (!this.userSettings$) {
      // this.userSettings$ = this.loadUserSettings().pipe(shareReplay(1));
    }

    return this.userSettings$;
  }

  private loadUserSettings() {
    return this.httpClient
      .get<FrontendSetting[]>(`${this.baseUrl}`, { observe: 'body' })
      .pipe(catchError(() => of([] as FrontendSetting[])));
  }

  saveUserLanguage(language: string) {
    this.httpClient
      .put(`${this.baseUrl}`, {
        key: SettingsService.LANGUAGE_KEY,
        payload: { language },
      } as FrontendSetting)
      .subscribe();
    this.invalidateCache();
  }

  saveBookmarks(bookmarks: MenuItem[][]) {
    this.httpClient
      .put(this.baseUrl, {
        key: SettingsService.BOOKMARKS_KEY,
        payload: bookmarks,
      } as FrontendSetting)
      .subscribe();
    this.invalidateCache();
  }

  saveWidgets(widgets: WidgetMetaData[]) {
    this.httpClient
      .put(this.baseUrl, {
        key: SettingsService.WIDGETS_KEY,
        payload: widgets,
      } as FrontendSetting)
      .subscribe();
    this.invalidateCache();
  }

  saveTileDataGrid(tileData: TileDataSource[], applicationName: string) {
    this.httpClient
      .put(this.baseUrl, {
        application: applicationName,
        key: SettingsService.KPI_KEY,
        payload: tileData,
      } as FrontendSetting)
      .subscribe();
    this.invalidateCache();
  }

  private invalidateCache() {
    this.userSettings$ = null;
  }
}
