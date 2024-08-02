import { GET } from '$lib/api';

export async function load({ params }) {
    const contributors = await GET('/contributors');
    return {
        contributors: contributors.data
    };
}