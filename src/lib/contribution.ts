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