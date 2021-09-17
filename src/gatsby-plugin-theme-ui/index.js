export default {
  colors: {
    text: "#00d27d",
    headerBackground: "#000",
    headerText: "#00d27d",
    paperBackgroundColor: "white",
    paperHoverBackgroundColor: "#fcfcfc",
    paperHeadingColor: "#1CAEE0",
    paperHoverHeadingColor: "#1f8ded",
    paperBorderColor: "transparent",
    paperDescriptionColor: "rgb(86, 88, 103)",
    collectionBackgroundColor: "#EBEEF1",
    collectionHeading: "##00d27d",
    collectionDescription: "#565867",
    breadcrumbLinkTextColor: "#4f5e6b",
    breadcrumbHoverLinkTextColor: "#242a30",
    breadcrumbTextColor: "#8f919d",
    articleTextColor: "#565867",
    articleDescriptionColor: "#8F919D",
    background: "#fff",
    primary: "#00d27d",
    secondary: "#00D27D",
    muted: "#06FF9A",
    searchTextColor: "rgba(255,255,255,0.7)",
    searchTextFocusColor: "#bec9be",
    searchTextPlaceholderColor: "white",
    searchTextFocusPlaceholderColor: "black",
    comboboxColor: "black",
    iconColor: "#00d27d",
    logoColor: "#00d27d",
  },
  radii: [0, 2, 4, 8],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 900,
  },
  lineHeights: {
    small: 1.2,
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  /* Styles for MDX */
  styles: {
    // the keys used here reference elements in MDX
    h1: {
      // the style object for each element
      // can reference other values in the theme
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 3,
    },
    a: {
      color: "primary",
      ":hover, :focus": {
        color: "secondary",
      },
    },
    blockquote: {
      marginLeft: "1.75rem",
    },
    // more styles can be added as needed
  },
}
