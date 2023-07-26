import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Slider from './Slider';
import { withReduxAndStyledProviders } from '../../../../../test/testUtils';

describe('Slider', () => {
    test('renders without crashing', () => {
        render(withReduxAndStyledProviders(<Slider min={0} max={100} />));
    });

    test('calls onChange callback', () => {
        const onChange = jest.fn();
        const { container } = render(withReduxAndStyledProviders(<Slider min={0} max={100} onChange={onChange} />));
        const handle = screen.getByTestId('slider-handle');
        fireEvent.mouseDown(handle);
        fireEvent.mouseMove(container, { clientY: 70 });
        fireEvent.mouseUp(handle);
        expect(onChange).toHaveBeenCalled();
    });
});
