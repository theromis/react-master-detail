import { AppStore, initialState } from 'state';
import createMockStore from 'redux-mock-store';

export const testState: AppStore = {
    example: initialState
};

export const createTestStore = () => {
    const mockStore = createMockStore<AppStore, any>([]);
    return mockStore(testState);
};