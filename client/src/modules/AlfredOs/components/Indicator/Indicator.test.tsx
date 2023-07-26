import React from 'react';
import { render } from '@testing-library/react';
import Indicator from './Indicator';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('Indicator', () => {
    it('renders draggable and resizable indicator without error', () => {
        const indicatorRef = React.createRef<HTMLDivElement>();
        const { getByTestId } = render(
            withReduxAndStyledProviders(<Indicator indicatorRef={indicatorRef} />)
        );
        const draggable = getByTestId('draggable');
        expect(draggable).toBeInTheDocument();
    });
});
