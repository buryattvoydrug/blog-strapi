import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Article($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          title
          description
          content
          author {
            data {
              attributes {
                name
                picture {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          category {
            data {
              attributes {
                slug
                name
              }
            }
          }
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default ARTICLE_QUERY;