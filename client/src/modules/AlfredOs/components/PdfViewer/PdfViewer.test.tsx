import React from 'react';
import { render, screen } from '@testing-library/react';
import PdfViewer from './PdfViewer';

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

describe('PdfViewer component', () => {
    it('renders without errors', () => {
        render(<PdfViewer />);
    });
});