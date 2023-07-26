import React from 'react';
import { render } from '@testing-library/react';
import ThisComputer from './ThisComputer';
import { withReduxAndStyledProviders } from '../../../../../test/testUtils';

describe('ThisComputer component', () => {
    it('should render without error', () => {
        const { container } = render(withReduxAndStyledProviders(<ThisComputer appKey='resume-app' />));
        expect(container).toBeInTheDocument();
    });
});