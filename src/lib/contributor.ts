export interface Contributor {
    id: string;
    local_handle: string;
    display_name: string;
    links: string[];
}

export const mockContributors: Contributor[] = [
    {
        id: '1',
        local_handle: 'int-y1',
        display_name: 'Jason Yuen',
        links: [],
    },
    {
        id: '2',
        local_handle: 'mxdys',
        display_name: 'mxdys',
        links: [],
    },
    {
        id: '3',
        local_handle: 'mei',
        display_name: 'mei',
        links: [],
    },
    {
        id: '4',
        local_handle: 'cosmo',
        display_name: 'Tristan Stérin',
        links: []
    }
];

