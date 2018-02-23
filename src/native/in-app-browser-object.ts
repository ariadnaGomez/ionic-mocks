import { Observable } from 'rxjs/Observable';

export class InAppBrowserObjectMock {
  public static instance(): any {
    let instance = jasmine.createSpyObj('InAppBrowserObjectMock', [
      'show',
      'close',
      'hide',
      'executeScript',
      'insertCSS',
      'on',
    ]);
    instance.executeScript.and.returnValue(Promise.resolve({}));
    instance.insertCSS.and.returnValue(Promise.resolve({}));
    instance.on.and.returnValue(Observable.of({}));

    return instance;
  }
}
