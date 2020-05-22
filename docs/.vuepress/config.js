module.exports = {
    title: 'Hello VuePress Docs',
    description: 'Just playing around',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'API', link: '/api/' },
            { text: '其他', link: '/miscellaneous/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '快速开始',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ['', '介绍'],
                        'part1',
                        'part2',
                    ]
                },
                {
                    title: '进阶',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ['', '介绍'],
                        'part1',
                        'part2',
                    ]
                },
            ],
            '/api/': [
                {
                    title: '接口',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ['', '介绍'],
                        'part1',
                        'part2',
                    ]
                }
            ],
        },
    },
    extraWatchFiles: [
        'api/*',
    ]
}
