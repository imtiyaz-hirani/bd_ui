import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const BOOKMARKS_KEY = 'bookmarks';
const WIDGETS_KEY = 'widgets';

@Injectable({
  providedIn: 'root',
})
export class GlobalStorageService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {}

  storeBookmarks(bookmarks: string): boolean {
    const bm = this.getBookmarks();

    if (bm && bm === bookmarks) {
      return false;
    }

    this.storage.set(BOOKMARKS_KEY, bookmarks);

    return true;
  }

  getBookmarks(): string | undefined {
    return this.storage.get(BOOKMARKS_KEY);
  }

  haveBookmarksChanged(bookmarks: string): boolean {
    const bm = this.getBookmarks();
    return bm ? bm !== bookmarks : true;
  }

  storeWidgets(widgets: string): boolean {
    const w = this.getWidgets();

    if (w && w === widgets) {
      return false;
    }

    this.storage.set(WIDGETS_KEY, widgets);

    return true;
  }

  getWidgets(): string | undefined {
    return this.storage.get(WIDGETS_KEY);
  }
}
