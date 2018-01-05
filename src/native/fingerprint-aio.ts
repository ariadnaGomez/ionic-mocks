export class FingerPrintAIOMock {
  public static instance(): any {
    let instance = jasmine.createSpyObj('FingerPrintAIO', [
      'isAvailable',
      'show'
    ]);
    instance.isAvailable.and.returnValue(Promise.resolve(true));
    instance.show.and.returnValue(Promise.resolve());

    return instance;
  }
}
