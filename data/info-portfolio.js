const infoPortfolio = {
    name: 'Axcel Anchante',
    image: 'profileUserSecond.png',
    carrer: 'Backend developer',
    social: [
        {
            name: 'twitter',
            url: 'https://twitter.com/_RunawayAnt'
        },
        {
            name: 'github',
            url: 'https://github.com/RunawayAnt'
        },
        {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/axcel-anchante-6280611a5'
        }
    ],
    progress: [
        {
            title: 'Years of work',
            amount: '1'
        },
        {
            title: 'Cups of coffe',
            amount: '+100'
        },
        {
            title: 'Lines of code',
            amount: '+350'
        }
    ],
    links: [
        {
            name: 'code-sandbox',
            icon: 'code',
            url: 'https://codesandbox.io/u/RunawayAnt'
        },
        {
            name: 'email',
            icon: 'mail',
            url: 'mailto:sik77mo@gmail.com'
        }
    ]
}

const projects = [
    {
        name: 'Github Profile Finder',
        description: 'It is an interactive search engine on github users that allows access to various information about the search.',
        image: 'project-github-search.png',
        repo: 'https://github.com/RunawayAnt/github-user-search-api.git',
        web: 'https://codax-github-search-users.netlify.app/'
    }
]


const skills = [
    {
        area: 'Backend Developer',
        forks: [
            {
                type: 'Languages',
                languages: [
                    {
                        name: 'NodeJS/Javascript',
                        level: 'Advanced'
                    },
                    {
                        name: 'PHP',
                        level: 'Basic'
                    },
                    {
                        name: 'Bash',
                        level: 'Basic'
                    },
                    {
                        name:'SQL',
                        level: 'Intermediate'
                    }
                ]
            }
        ]
    }
]


export { infoPortfolio, skills, projects }



