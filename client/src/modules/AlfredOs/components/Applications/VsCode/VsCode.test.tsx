import React from 'react';
import { render } from '@testing-library/react';
import VsCode from './VsCode';
import { withReduxAndStyledProviders } from '../../../../../test/testUtils';

describe('PortfolioExplorer component', () => {
    it('should render without error', () => {
        const { container } = render(withReduxAndStyledProviders(<VsCode appKey='testApp' />));
        expect(container).toBeTruthy();
    });
});