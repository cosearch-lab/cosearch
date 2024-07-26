export interface Review {
    id: string;
    title: string;
    date: string;
    authors: string[];
}

export const mockReviews: Review[] = [
    {
        id: "u7z5ys29",
        title: "Review of Coq-BB5",
        date: "Jun 15",
        authors: ["yforster"]
    },

];