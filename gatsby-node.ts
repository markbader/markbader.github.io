import path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';

exports.onCreateNode = ({ node, actions, getNode }: any) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: 'data' });
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        });
    }
};

exports.createPages = async ({ graphql, actions }: any) => {
    const { createPage } = actions;

    const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              topic
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

    const posts = result.data.allMarkdownRemark.edges;

    const topics = [...new Set(posts.map(({ node }: any) => node.frontmatter.topic))];
    topics.forEach((topic) => {
        createPage({
            path: `/${topic}`,
            component: path.resolve('./src/templates/topic.tsx'),
            context: {
                topic,
            },
        });
    });

    posts.forEach(({ node }: any) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/article.tsx'),
            context: {
                slug: node.fields.slug,
            },
        });
    });
};
