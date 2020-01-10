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
                  buildHookId: '5e18c04a637167061c04e3db',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cq57frqq',
                  apiId: 'ce2efb68-a7f6-43a7-836a-969293c22912'
                },
                {
                  buildHookId: '5e18c04af9b928a0b69e927c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-bizbc388',
                  apiId: '248fc772-ce9b-41ff-9556-65c35ce735ab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SuperKleber/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-bizbc388.netlify.com',
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
