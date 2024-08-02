import { GET } from '$lib/api';

export async function load({ params }) {
    const contributors = await GET('/contributors');
    const tags = await GET('/tags');
    let tags_per_id = {};
    if (tags.data) {
        tags.data.forEach(tag => {
            tags_per_id[tag.id] = tag;
        });
    }
    return {
        contributors: contributors.data,
        tags_per_id: tags_per_id,
        tags: tags.data
    };
}