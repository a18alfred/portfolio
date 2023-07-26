import React from 'react';
import { render } from '@testing-library/react';
import Tabs from './Tabs';
import { withReduxAndStyledProviders } from '../../../../../test/testUtils';

describe('Tabs', () => {
    it('should render the component', () => {
        render(withReduxAndStyledProviders(<Tabs />));
    });
});
