const path = require('path');

exports.createPages = async function citiesIntoPages({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulCity {
        nodes {
          title
          description
          slug
        }
      }
    }
  `);

  data.allContentfulCity.nodes.forEach((city) => {
    actions.createPage({
      path: `/location/${city.slug}`,
      component: path.resolve(`./src/templates/Location.jsx`),
      context: {
        slug: city.slug,
      },
    });

    console.log(
      `🚀🚀   -   Creating ${city.title} at "/location/${city.slug}"`
    );
  });
};
