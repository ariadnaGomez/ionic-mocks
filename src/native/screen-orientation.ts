import { Observable } from 'rxjs/Observable';

export class ScreenOrientation {
  public static instance(networkType: string): any {
    let instance = jasmine.createSpyObj('ScreenOrientation', [
      'lock'
    ]);
    instance.lock.and.returnValue(Observable.empty());
    return instance;
  }
}
