export class HttpMock {
  public static instance(): any {
    let instance = jasmine.createSpyObj('HTTP', [
      'get',
      'post',
      'put',
      'patch',
      'delete',
      'head',
      'uploadFile',
      'downloadFile',
      'getBasicAuthHeader',
      'useBasicAuth',
      'setHeader',
      'setDataSerializer',
      'clearCookies',
      'removeCookies',
      'disableRedirect',
      'setRequestTimeout',
      'enableSSLPinning',
      'acceptAllCerts'
    ]);
    instance.get.and.returnValue(Promise.resolve({}));
    instance.post.and.returnValue(Promise.resolve({}));
    instance.put.and.returnValue(Promise.resolve({}));
    instance.patch.and.returnValue(Promise.resolve({}));
    instance.delete.and.returnValue(Promise.resolve({}));
    instance.head.and.returnValue(Promise.resolve({}));
    instance.uploadFile.and.returnValue(Promise.resolve({}));
    instance.downloadFile.and.returnValue(Promise.resolve({}));
    instance.getBasicAuthHeader.and.returnValue({});

    return instance;
  }
}
