import { GET } from '$lib/api';

export async function load({ params }) {
    const tag = await GET('/tags/{tag_id}', { params: { path: { tag_id: params.tag_id } } });
    return {
        tag: tag.data
    };
}