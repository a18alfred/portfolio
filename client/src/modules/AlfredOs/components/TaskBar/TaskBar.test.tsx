import React from 'react';
import { render } from '@testing-library/react';
import TaskBar from './TaskBar';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('TaskBar', () => {
    it('should render the component without error', async () => {
        const { getByTestId } = render(withReduxAndStyledProviders(<TaskBar />));
        expect(getByTestId('task-bar-test-id')).toBeInTheDocument();
    });
});