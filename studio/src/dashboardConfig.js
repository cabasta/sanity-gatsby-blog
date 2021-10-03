export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6159b0769d7d4481cc8eb2f6",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-51e9pqmh",
                  apiId: "7c9a8ec8-6905-44c9-bf9c-31e8efd7381c",
                },
                {
                  buildHookId: "6159b076161351eec73c9551",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-jdx8xuby",
                  apiId: "e44c0c92-a636-4049-915d-4d65ecb3f2e6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/cabasta/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-jdx8xuby.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
