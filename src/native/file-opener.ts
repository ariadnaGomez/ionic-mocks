export class FileOpenerMock {
  public static instance(): any {
    let instance = jasmine.createSpyObj('FileOpener', [
      'open',
      'uninstall',
      'appIsInstalled',
      'hideKeyboardAccessoryBar'
    ]);
    instance.open.and.returnValue(Promise.resolve(true));
    instance.uninstall.and.returnValue(Promise.resolve(true));
    instance.appIsInstalled.and.returnValue(Promise.resolve(true));

    return instance;
  }
}
