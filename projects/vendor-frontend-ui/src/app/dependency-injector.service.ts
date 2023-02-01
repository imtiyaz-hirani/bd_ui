import { Injector } from '@angular/core';

export class DependencyInjector {
  private static injector: Injector;

  static setInjector(injector: Injector) {
    DependencyInjector.injector = injector;
  }

  static getInjector(): Injector {
    return DependencyInjector.injector;
  }
}
