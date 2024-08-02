import { GET } from '$lib/api';

export async function load({ params }) {
    const contributions = await GET('/contributions');
    return {
        contributions: contributions.data
    };
}