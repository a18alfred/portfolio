import { DefaultTheme } from 'styled-components';

const osColors = {
    white: '#FFFFFF',
    black: '#000000',
    turquoise: '#3e9697',
    lightGray: '#c3c6ca',
    darkGray: '#86898d',
    blue: '#0000a3',
    darkBlue: '#0000aa',
    red: '#ff0000'
} as const;

export type IOsColors = typeof osColors;

const gradients = {
    checkerBlue: `linear-gradient(45deg, ${osColors.blue} 25%, transparent 25%),
        linear-gradient(-45deg, ${osColors.blue} 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, ${osColors.blue} 75%),
        linear-gradient(-45deg, transparent 75%, ${osColors.blue} 75%)`,
    checkerBlack: `linear-gradient(45deg,  ${osColors.black} 25%,  transparent 25%),  
        linear-gradient(-45deg, ${osColors.black} 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, ${osColors.black} 75%),
        linear-gradient(-45deg, transparent 75%, ${osColors.black} 75%);`,
    startGradientBlue: `linear-gradient(to bottom, #0000a3, #0000b9, #0000cf, #0000e5, #0000fc);`,
    darkGreyGradient: `linear-gradient(to top, #0e141b, #0f151c, #10161d, #10171f, #111820)`,
    mainRedGradient: 'linear-gradient(to right top, #ee0979, #fd2561, #ff4349, #ff5f2e, #ff7b00)'
};

export type IGradients = typeof gradients;

const responsiveBreakPoints = {
    phone: '(max-width: 500px)',
    tablet: '(max-width: 768px)',
    desktop: '(min-width: 800px)'
};

export type IResponsiveBreakPoints = typeof responsiveBreakPoints;

const spacing = {
    none: '0rem',
    xxxs: '0.25rem',
    xxs: '0.5rem',
    xs: '0.75rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '5rem'
};

export type ISpacing = typeof spacing;

export const portfolioStyles = {
    bgColor: '#000000',
    secondaryBg: '#0E141B',
    primaryColor: '#fd2561',
    text: { primary: '#FFFFFF', secondary: '#A2A2A2' },
    zIndex: {
        highestPriority: 777,
        navigation: 78,
        modal: 77,
        lowPriority: 7
    },
    fontSize: { large: '16px', medium: '14px', small: '12px' },
    borderRadius: '5px'
};

export type IPortfolioStyle = typeof portfolioStyles;

export const defaultTheme: DefaultTheme = {
    osColors: osColors,
    gradients: gradients,
    media: responsiveBreakPoints,
    space: spacing,
    portfolio: portfolioStyles
};

export default osColors;
