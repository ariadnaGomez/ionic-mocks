export class KeyboardMock {
    public static instance(): any {
        let instance = jasmine.createSpyObj('Keyboard', [
          'isOpen',
          'onClose',
          'disableScroll',
          'hideKeyboardAccessoryBar'
          ]);
        instance.isOpen.and.returnValue(false);

        return instance;
    }
}
