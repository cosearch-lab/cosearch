import { GET } from '$lib/api';

export async function load({ params }) {
    const tags = await GET('/tags');
    return {
        tags: tags.data
    };
}