import tap from '../src/tap';

describe('tap', () => {
    it('returns the initial value', () => {
        let value = 'initial';

        expect(tap(value, function (value) {
            // do nothing
        })).toBe('initial');
    });

    it('invokes the callback', () => {
        let value = 'initial';

        let callbackInvoked = false;

        tap(value, function (value) {
            callbackInvoked = true;
        })

        expect(callbackInvoked).toBe(true);
    });

    it('invokes the callback only once', () => {
        let value = 'initial';

        let callbackInvokedCount = 0;

        tap(value, function (value) {
            callbackInvokedCount += 1;
        })

        expect(callbackInvokedCount).toBe(1);
    });

    it('passes the value as first argument in the callback', () => {
        let value = 'initial';

        tap(value, function (value) {
            expect(value).toBe('initial');
        })
    });

    it('does not return the callback return value', () => {
        let value = 'initial';

        expect(tap(value, function (value) {
            return 'changed';
        })).not.toBe('changed');
    });

    it('does not return a changed value', () => {
        let value = 'initial';

        expect(tap(value, function (value) {
            value = 'changed';
        })).not.toBe('changed');
    });
});
