export interface Tag {
    name: string;
    color: string;
}

export const tags: Tag[] = [
    { name: 'Decider', color: 'bg-red-800' },
    { name: 'Formal Verification', color: 'bg-indigo-800' },
    { name: 'Individual Machine', color: 'bg-teal-800' },
    { name: 'Meta', color: 'bg-gray-800' }
];

export interface Contribution {
    id: string;
    title: string;
    date: string;
    authors: string[];
    dependencies: null | string[];
    tags: Tag[];
    number_of_reviews: number;
    number_of_reproductions: null | number;
    number_of_views: number | string;
    number_of_stars: number;
    links?: null | string[];
}

export let mockContribs: Contribution[] = [
    {
        id: '2zr5ys29',
        title: '1RB2LA0LA_2LC---2RA_0RA2RC1LC does not halt',
        date: 'Jul 13',
        authors: ['Jason Yuen'],
        dependencies: null,
        tags: [tags[2], tags[1]],
        number_of_reviews: 0,
        number_of_reproductions: null,
        number_of_views: 10,
        number_of_stars: 1
    },
    {
        id: '5xvr42ix',
        title: 'Coq-BB5',
        date: 'Apr 24',
        authors: ['mxdys'],
        dependencies: ['FAR', 'MITWFAR', 'n-gram CPS', 'busycoq'],
        tags: [tags[0], tags[1]],
        number_of_reviews: 1,
        number_of_reproductions: null,
        number_of_views: 10,
        number_of_stars: 150
    },
    {
        id: 'lxbplez6',
        title: 'Coq formalisation of Cyclers',
        date: 'Jul 2023',
        authors: ['mei'],
        dependencies: ['Cyclers'],
        tags: [tags[0], tags[1]],
        number_of_reviews: 0,
        number_of_reproductions: 2,
        number_of_views: '2.3k',
        number_of_stars: 0,
        links: ['https://discuss.bbchallenge.org/t/decider-cyclers/33']
    },
    {
        id: '1jtod12g',
        title: 'Dafny formalisation of Cyclers',
        date: 'Mar 2022',
        authors: ['Nathan Fenner'],
        dependencies: ['Cyclers'],
        tags: [tags[0], tags[1]],
        number_of_reviews: 0,
        number_of_reproductions: 2,
        number_of_views: '2.3k',
        number_of_stars: 0,
        links: ['https://discuss.bbchallenge.org/t/decider-cyclers/33']
    },
    {
        id: 'fc4jc5fm',
        title: 'Cyclers',
        date: 'Sep 2022',
        authors: ['Tristan Stérin'],
        dependencies: null,
        tags: [tags[0]],
        number_of_reviews: 0,
        number_of_reproductions: 3,
        number_of_views: '2.3k',
        number_of_stars: 0,
        links: ['https://discuss.bbchallenge.org/t/decider-cyclers/33']
    },
    {
        id: 'jb95hfvar',
        title: 'bbchallenge seed database',
        date: 'Dec 2021',
        authors: ['Tristan Stérin'],
        dependencies: null,
        tags: [],
        number_of_reviews: 0,
        number_of_reproductions: 2,
        number_of_views: 0,
        number_of_stars: 0,
        links: [
            'https://github.com/bbchallenge/bbchallenge-seed',
            'https://bbchallenge.org/method',
            'https://discuss.bbchallenge.org/t/reproduction-of-the-seed-database/160',
            'https://discuss.bbchallenge.org/t/re-constructing-the-seed-database/106'
        ]
    }
];