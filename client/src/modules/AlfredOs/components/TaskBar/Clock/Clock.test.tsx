import React from 'react';
import { render } from '@testing-library/react';
import Clock from './Clock';

describe('Clock', () => {
    it('should render the component', () => {
        render(<Clock />);
    });

    it('should display the current time', () => {
        // Mock the Date object to always return a fixed time
        jest.spyOn(global, 'Date').mockImplementation(() => ({
            getHours: jest.fn().mockReturnValue(10),
            getMinutes: jest.fn().mockReturnValue(30)
        } as unknown as Date));

        const { getByText } = render(<Clock />);
        const timeElement = getByText('10:30');

        // Assert that the component displays the correct time
        expect(timeElement).toBeInTheDocument();
    });
});
