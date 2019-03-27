import { greatMethod } from './great-method';

describe('Great Method Test', () => {
    test('Everything should be great', () => {
        expect(greatMethod()).toEqual('Great!');
    });
});
