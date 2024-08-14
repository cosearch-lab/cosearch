import { GET } from '$lib/api';

export async function load({ parent, params }) {

    const { contribution } = await parent();
    const reviews = [];

    console.log(contribution);



    for (let id in contribution.reviews) {
        const review = await GET('/reviews/{review_id}', { params: { path: { review_id: contribution.reviews[id].id } } });
        reviews.push(review.data)
    }

    return {
        reviews: reviews
    };
}