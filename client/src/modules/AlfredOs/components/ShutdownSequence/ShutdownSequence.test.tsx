import React from 'react';
import { render } from '@testing-library/react';
import ShutdownSequence from './ShutdownSequence';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('ShutdownSequence', () => {
    it('should render the component without error', async () => {
        const { getByTestId } = render(withReduxAndStyledProviders(<ShutdownSequence />));
        expect(getByTestId('shutdown-sequence-loading')).toBeInTheDocument();
        expect(getByTestId('blinking-cursor')).toBeInTheDocument();
    });
});