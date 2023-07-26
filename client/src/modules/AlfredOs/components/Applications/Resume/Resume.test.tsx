import React from 'react';
import { render } from '@testing-library/react';
import Resume from './Resume';
import { withReduxAndStyledProviders } from '../../../../../test/testUtils';

class IntersectionObserverMock {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserverMock
});

describe('Resume component', () => {
    it('should render without error', () => {
        const { container } = render(withReduxAndStyledProviders(<Resume appKey='resume-app' />));
        expect(container).toBeInTheDocument();
    });
});