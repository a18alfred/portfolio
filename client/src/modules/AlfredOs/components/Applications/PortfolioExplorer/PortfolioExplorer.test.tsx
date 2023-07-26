import React from 'react';
import { render } from '@testing-library/react';
import PortfolioExplorer from './PortfolioExplorer';
import { withReduxAndStyledProviders } from '../../../../../test/testUtils';

describe('PortfolioExplorer component', () => {
    it('should render without error', () => {
        const { container } = render(withReduxAndStyledProviders(<PortfolioExplorer appKey='testApp' />));
        expect(container).toBeTruthy();
    });
});