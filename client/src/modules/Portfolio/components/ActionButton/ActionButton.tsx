import React, { ReactNode } from 'react';
import * as Styled from './ActionButton.styles';
import AnimationSlide from '../AnimationSlide/AnimationSlide';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
    buttonText: string;
    icon: ReactNode;
    renderAsLink?: boolean;
    href?: string;
    openNewTab?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
    isAnimated?: boolean;
    animationDuration?: number;
}

/**
 *Renders call-to-action button for portfolio screens
 *@function ActionButton
 *@param {boolean} renderAsLink - specifies whether the button will be an <a> link
 *@param {string} href - href of the above link
 * @param {boolean} openNewTab - specifies if link needs to be open in the new tab
 *@param {string} buttonText - text content of button
 *@param {ReactNode} icon - icon react element, should have "action-icon" class to be styled and positioned properly
 *@param {boolean}  isLoading - indicates loading or progress state
 *@param {boolean}  disabled - specifies disabled button state
 * @param {boolean} isAnimated - specifies button presence animation
 * @param {number} animationDuration - animation duration
 *@param {rest} rest - standard button props
 *@returns {JSX.Element} - Rendered ActionButton component
 */
const ActionButton = ({
                          buttonText,
                          icon,
                          renderAsLink,
                          openNewTab,
                          isLoading,
                          disabled,
                          isAnimated,
                          animationDuration = 0.7,
                          href,
                          ...rest
                      }: Props): JSX.Element => {
    if (renderAsLink && href) {
        if (isAnimated) return (
            <AnimationSlide>
                <Styled.BtnWrapper animationDuration={animationDuration}>
                    <Styled.Btn
                        as={'a'}
                        href={href}
                        isLoading={isLoading}
                        target={openNewTab ? '_blank' : '_self'}
                        rel='noopener'
                    >
                        {buttonText}
                        <span>{icon}</span>
                    </Styled.Btn>
                </Styled.BtnWrapper>
            </AnimationSlide>
        );

        return (
            <Styled.Btn
                as={'a'}
                href={href}
                isLoading={isLoading}
                target={openNewTab ? '_blank' : '_self'}
                rel='noopener'
            >
                {buttonText}
                <span>{icon}</span>
            </Styled.Btn>
        );
    }

    if (isAnimated) return (
        <AnimationSlide>
            <Styled.BtnWrapper animationDuration={animationDuration}>
                <Styled.Btn isLoading={isLoading} disabled={disabled} {...rest}>
                    {buttonText}
                    <span>{icon}</span>
                </Styled.Btn>
            </Styled.BtnWrapper>
        </AnimationSlide>
    );

    return (
        <Styled.Btn isLoading={isLoading} disabled={disabled} {...rest}>
            {buttonText}
            <span>{icon}</span>
        </Styled.Btn>
    );
};

export default ActionButton;
