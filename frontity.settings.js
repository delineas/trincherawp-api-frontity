const settings = {
  name: "my-app",
  state: {
    frontity: {
      url: "https://test.frontity.io",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development"
    }
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Aspernatur", "/aspernatur-nihil-ea-nulla/"],
            ["Totam", "/totam-asperiores-dolores-alias/"],
            ["Aspernatur", "/aspernatur-nihil-ea-nulla/"],
            ["About Us", "/about-us/"]
          ],
          featured: {
            showOnList: false,
            showOnPost: false
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://wordpress-232126-1164206.cloudwaysapps.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
