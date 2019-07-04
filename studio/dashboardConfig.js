export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5d1dde0c3d7ea1e35f5db49c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dkwr4d79',
                  apiId: 'b4634bf8-5948-48e9-b2ef-03576385346a'
                },
                {
                  buildHookId: '5d1dde0ccc1c2c8624456703',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y7vmk1db',
                  apiId: '2660afad-a9f3-40f2-9048-88db364ed375'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ivanmauricio/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y7vmk1db.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
