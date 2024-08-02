import { GET } from '$lib/api';

export async function load({ params }) {
    const contribution = await GET('/contributions/{contribution_id}', { params: { path: { contribution_id: params.contribution } } });

    const contributors = await GET('/contributors');
    const tags = await GET('/tags');
    let tags_per_id = {};
    if (tags.data) {
        tags.data.forEach(tag => {
            tags_per_id[tag.id] = tag;
        });
    }

    return {
        contribution: contribution.data,
        contributors: contributors.data,
        tags_per_id: tags_per_id,
        tags: tags.data
    };
}