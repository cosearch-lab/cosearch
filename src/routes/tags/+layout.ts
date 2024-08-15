import { GET } from '$lib/api';

export async function load() {
    const tags = await GET('/tags');
    return {
        tags: tags.data
    };
}