import React from 'react';
import { render } from '@testing-library/react';
import Desktop from './Desktop';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('Desktop component', () => {
    it('renders without crashing', () => {
        const { container } = render(withReduxAndStyledProviders(<Desktop />));
        expect(container).toBeInTheDocument();
    });
});