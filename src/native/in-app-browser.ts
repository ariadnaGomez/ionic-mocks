import { InAppBrowserObjectMock } from './in-app-browser-object';

export class InAppBrowserMock {
  public static instance(browser?: InAppBrowserObjectMock): any {
    let instance = jasmine.createSpyObj('InAppBrowser', ['create']);
    instance.create.and.returnValue(browser || InAppBrowserObjectMock.instance());

    return instance;
  }
}
