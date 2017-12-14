import { Observable } from 'rxjs/Observable';

export class StorageMock {
  public static instance(): any {
    let instance = jasmine.createSpyObj('Storage', [
      'get',
      'set',
      'remove'
    ]);
    instance.get.and.returnValue(Promise.resolve(true));
    instance.set.and.returnValue(Promise.resolve(true));
    instance.remove.and.returnValue(Promise.resolve(true));
    return instance;
  }
}
