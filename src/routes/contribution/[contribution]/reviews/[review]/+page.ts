import { GET } from '$lib/api';

export async function load({ params }) {

    const review = await GET('/reviews/{review_id}', { params: { path: { review_id: params.review } } });

    return {
        review: review.data
    };
}