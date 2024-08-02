import { GET } from '$lib/api';


export async function load({ params }) {
    const contributors = await GET('/contributors');
    const contributor = await GET('/contributors/local_handle/{local_handle}',
        { params: { path: { local_handle: params.contributor } } }
    );
    return {
        contributors: contributors.data,
        contributor: contributor.data
    };
}