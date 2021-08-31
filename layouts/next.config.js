module.exports = {
  images: {
    loader: "imgix",
  },
  sassOptions: {
    prependData: `
        @import "./styles/variables.scss";
      `,
  },
};
