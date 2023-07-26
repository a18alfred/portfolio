import React from 'react';
import { render } from '@testing-library/react';
import Icon from './Icon';

describe('Icon component', () => {
    it('should render an image element', () => {
        const { getByAltText } = render(<Icon icon='computerBig' />);
        const imageElement = getByAltText('computerBig');
        expect(imageElement).toBeInTheDocument();
    });

    it('should apply style and size props', () => {
        const { getByAltText } = render(<Icon icon='computerBig' style={{ color: 'red' }} size={20} />);
        const imageElement = getByAltText('computerBig');
        expect(imageElement).toHaveStyle('color: red');
        expect(imageElement).toHaveStyle('width: 20px');
        expect(imageElement).toHaveStyle('height: 20px');
    });
});