export class FileMock {
  public static instance(): any {
    let instance = jasmine.createSpyObj('File', [
      'getFreeDiskSpace',
      'checkDir',
      'createDir',
      'removeDir',
      'moveDir',
      'copyDir',
      'listDir',
      'removeRecursively',
      'checkFile',
      'createFile',
      'removeFile',
      'writeFile',
      'writeExistingFile',
      'readAsText',
      'readAsDataURL',
      'readAsBinaryString',
      'readAsArrayBuffer',
      'moveFile',
      'copyFile',
      'resolveLocalFilesystemUrl',
      'resolveDirectoryUrl',
      'getDirectory',
      'getFile',

    ]);
    instance.getFile.and.returnValue(Promise.resolve('content'));
    instance.getDirectory.and.returnValue(Promise.resolve('content'));
    instance.resolveDirectoryUrl.and.returnValue(Promise.resolve('content'));
    instance.resolveLocalFilesystemUrl.and.returnValue(Promise.resolve('content'));
    instance.copyFile.and.returnValue(Promise.resolve('content'));
    instance.moveFile.and.returnValue(Promise.resolve('content'));
    instance.readAsArrayBuffer.and.returnValue(Promise.resolve('content'));
    instance.readAsBinaryString.and.returnValue(Promise.resolve('content'));
    instance.readAsDataURL.and.returnValue(Promise.resolve('content'));
    instance.readAsText.and.returnValue(Promise.resolve('content'));
    instance.writeExistingFile.and.returnValue(Promise.resolve(true));
    instance.writeFile.and.returnValue(Promise.resolve(true));
    instance.removeFile.and.returnValue(Promise.resolve(true));
    instance.createFile.and.returnValue(Promise.resolve(true));
    instance.checkFile.and.returnValue(Promise.resolve(true));
    instance.removeRecursively.and.returnValue(Promise.resolve(true));
    instance.listDir.and.returnValue(Promise.resolve(true));
    instance.copyDir.and.returnValue(Promise.resolve(true));
    instance.moveDir.and.returnValue(Promise.resolve(true));
    instance.removeDir.and.returnValue(Promise.resolve(true));
    instance.createDir.and.returnValue(Promise.resolve(true));
    instance.checkDir.and.returnValue(Promise.resolve(true));
    instance.getFreeDiskSpace.and.returnValue(Promise.resolve(1));
    instance.cordovaFileError = 'directory';
    instance.sharedDirectory = 'directory';
    instance.documentsDirectory = 'directory';
    instance.syncedDataDirectory = 'directory';
    instance.tempDirectory = 'directory';
    instance.externalRootDirectory = 'directory';
    instance.externalCacheDirectory = 'directory';
    instance.externalDataDirectory = 'directory';
    instance.applicationDirectory = 'directory';
    instance.applicationStorageDirectory = 'directory';
    instance.dataDirectory = 'directory';
    instance.externalApplicationStorageDirectory = 'directory';
    instance.cacheDirectory = 'directory';

    return instance;
  }
}
