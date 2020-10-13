export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f85c6ad1250bd2f3f44de24',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2o6fyw2e',
                  apiId: 'e37baba2-a1bf-453f-99ec-81a7acf0940e'
                },
                {
                  buildHookId: '5f85c6adcdda752fc3152b9e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-8n1x4dia',
                  apiId: '54770d2f-0daa-480f-98d7-0496408b0d62'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/victor-balta/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-8n1x4dia.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
