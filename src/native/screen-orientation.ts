import { Observable } from 'rxjs/Observable';

export class ScreenOrientationMock {
  public static instance(): any {
    let instance = jasmine.createSpyObj('ScreenOrientation', [
      'lock'
    ]);
    instance.lock.and.returnValue(Promise.resolve(true));
    instance['ORIENTATIONS'] = {
      PORTRAIT: 'portrait'
    };
    return instance;
  }
}
