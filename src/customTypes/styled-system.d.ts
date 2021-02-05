import 'styled-system';
import * as CSS from 'csstype';

declare module 'styled-system' {
  export interface TransformProps<ThemeType extends Theme = RequiredTheme> {
    transform?: ResponsiveValue<CSS.Property.Transform, ThemeType>;
  }

  export interface TextTransformProps<ThemeType extends Theme = RequiredTheme> {
    textTransform?: ResponsiveValue<CSS.Property.TextTransform, ThemeType>;
  }
  export interface CursorProps<ThemeType extends Theme = RequiredTheme> {
    cursor?: ResponsiveValue<CSS.Property.Cursor, ThemeType>;
  }

  export interface TransitionProps<ThemeType extends Theme = RequiredTheme> {
    transition?: ResponsiveValue<CSS.Property.Transition, ThemeType>;
    transitionDelay?: ResponsiveValue<CSS.Property.TransitionDelay, ThemeType>;
    transitionProperty?: ResponsiveValue<CSS.Property.TransitionProperty, ThemeType>;
    transitionTimingFunction?: ResponsiveValue<CSS.Property.TransitionTimingFunction, ThemeType>;
  }
}
