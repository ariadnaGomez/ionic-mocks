export class AppVersionMock {
  public static instance(): any {
    let instance = jasmine.createSpyObj('AppVersion', [
      'getAppName',
      'getPackageName',
      'getVersionCode',
      'getVersionNumber'
    ]);
    instance.getAppName.and.returnValue(Promise.resolve('Awesome app'));
    instance.getPackageName.and.returnValue(Promise.resolve('com.awesome.app'));
    instance.getVersionCode.and.returnValue(Promise.resolve('1.3'));
    instance.getVersionNumber.and.returnValue(Promise.resolve('2.4'));

    return instance;
  }
}
