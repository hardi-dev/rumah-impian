export const isRetina = (x1: string, x2: string): string => {
  try {
    return window.devicePixelRatio >= 2 ? x2 : x1;
  } catch (error) {
    return x1
  }
};