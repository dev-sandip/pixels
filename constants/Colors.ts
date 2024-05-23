export const theme = {
  colors: {
    white: "#fff",
    black: "#000",
    grayBg: "#e5e5e5",
    neutral: (opacity: number): string => `rgba(10, 10, 10, ${opacity})`,
  },
  fontWeights: {
    medium: "500",
    semiBold: "600",
    bold: "700",
  },
  radius: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
  },
};
