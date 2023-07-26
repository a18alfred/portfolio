import React from 'react';
import { render } from '@testing-library/react';
import DesktopShortcuts from './DesktopShortcuts';
import { APPLICATIONS } from '../../config/osApps';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('DesktopShortcuts', () => {
    it('should render all shortcuts', () => {
        const { container, getAllByRole } = render(withReduxAndStyledProviders(<DesktopShortcuts />));
        expect(container).toBeInTheDocument();
        const shortcutImgs = getAllByRole('img');
        expect(shortcutImgs.length).toBe(Object.values(APPLICATIONS).length);
    });
});