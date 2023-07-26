import 'styled-components';
import { IGradients, IOsColors, IPortfolioStyle, IResponsiveBreakPoints, ISpacing } from '../theme/variables';

declare module 'styled-components' {
    export interface DefaultTheme {
        osColors: IOsColors;
        gradients: IGradients;
        media: IResponsiveBreakPoints;
        space: ISpacing;
        portfolio: IPortfolioStyle;
    }
}