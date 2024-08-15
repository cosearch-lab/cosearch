import { getReproductions } from '$lib';
import { GET } from '$lib/api';

export async function load({ params }) {

    const contributions = await GET('/contributions');

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
        contributions: contributions.data,
        contribution: contribution.data,
        contributors: contributors.data,
        reproductions: await getReproductions(contribution.data),
        tags_per_id: tags_per_id,
        tags: tags.data
    };
}