export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5fa9011b2629f46e974d51e1',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-37zuhdrg',
                  apiId: '5f90a3e1-5446-4c9f-853a-25a38390df8c'
                },
                {
                  buildHookId: '5fa9011c2629f462cd4d5958',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-ewkbmdyr',
                  apiId: 'c0abfbd0-9946-4f5a-a075-adcbadb39be2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/melsorrells23/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-ewkbmdyr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
