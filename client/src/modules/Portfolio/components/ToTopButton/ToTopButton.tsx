import * as Styled from './ToTopButton.styles';
import { BsChevronUp } from 'react-icons/bs';
import React, { MouseEvent } from 'react';

/**
 Renders scroll to top button.
 @function
 @returns {JSX.Element} - Scroll to top button
 */
const ToTopButton: React.FC = () => {
    const toTopHandler = (e: MouseEvent) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Styled.Btn
            onClick={toTopHandler}
        >
            <BsChevronUp />
        </Styled.Btn>
    );
};

export default ToTopButton;
