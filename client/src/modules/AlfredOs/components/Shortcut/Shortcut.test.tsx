import { render } from '@testing-library/react';
import Shortcut, { DesktopShortcutProps } from './Shortcut';
import { withReduxAndStyledProviders } from '../../../../test/testUtils';

describe('Shortcut component', () => {
    const props: DesktopShortcutProps = {
        icon: 'myComputer',
        shortcutName: 'computer',
        appKey: 'computer'
    };

    it('renders the correct icon and name', () => {
        const { getByText, getByRole } = render(withReduxAndStyledProviders(<Shortcut {...props} />));
        const icon = getByRole('img');
        const name = getByText('computer');
        expect(icon).toBeInTheDocument();
        expect(name).toBeInTheDocument();
    });
});
