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
            next: {
                revalidate: 5
            }
        },
    )

    return res.json();
}

export const getAllPostsWithSlug = async () => {
    const data = await fetchAPI(`
        query {
          posts(first: 50) {
            edges {
              node {
                title
                slug
                date
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

export const getAllPostsForHome = async () => {
    const data = await fetchAPI(`
        query {
          posts(first: 3, where: {orderby: {field: DATE, order: DESC}}) {
            edges {
              node {
                title
                slug
                date
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
                title
                slug
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
    `, {
        variables: {
            id: slug,
            idType: idType,
        }
    });

    return data.data;
}

export const getAllPostWithCategory = async (category: string) => {
    const data = await fetchAPI(`
        query ($categoryName: String) {
          posts(where: {categoryName: $categoryName}) {
            edges {
              node {
                title
                slug
                date
                categories {
                  edges {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
    `, {
        variables: {
            categoryName: category,
        }
    });

    return data?.data.posts.edges;
}

export const getAllCategories = async () => {
    const data = await fetchAPI(`
        query getAllCategories {
          categories {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
    `);

    return data?.data.categories.edges;
}
