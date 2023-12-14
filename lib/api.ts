const WP_API_URL = process.env.WORDPRESS_GRAPHQL_URL;

const fetchAPI = async (query = '', { variables }: Record<string, any> = {}) => {
    const headers = { 'Content-Type': 'application/json'};

    if (!WP_API_URL)
        throw new Error('WordPress API is not defined.');

    const res = await fetch(
        WP_API_URL,
        {
            method: 'POST',
            body: JSON.stringify({
                query,
                variables,
            }),
            headers,
        }
    )

    return res.json();
}

export const getAllPostsWithSlug = async () => {
    const data = await fetchAPI(`
        query {
          posts(first: 50) {
            edges {
              node {
                slug
              }
            }
          }
        }
    `);

    return data?.data.posts.edges;
}

export const getAllPostsForHome = async () => {
    const data = await fetchAPI(`
        query {
          posts(first: 3, where: {orderby: {field: DATE, order: DESC}}) {
            edges {
              node {
                title
                excerpt
                slug
                date
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                categories {
                  edges {
                    node {
                      name
                      slug
                    }
                  }
                }
              }
            }
          }
        }
    `);

    return data?.data.posts.edges;
}

export const getPostAndMorePosts = async (slug: string, idType: string) => {
    const data = await fetchAPI(`
        fragment PostFields on Post {
          title
          excerpt
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
        query getPostAndMorePosts($id: ID!, $idType: PostIdType!) {
          post(id: $id, idType: $idType) {
            ...PostFields
            content
          }
          posts {
            edges {
              node {
                ...PostFields
              }
            }
          }
        }
    `, {
        variables: {
            id: slug,
            idType: idType,
        }
    });

    return data.data;
}
