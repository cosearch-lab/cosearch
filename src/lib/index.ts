// place files you want to import through the `$lib` alias in this folder.

import { GET } from '$lib/api';
import type { components } from '$lib/cosearch';

export function prettyPrintDate(date: string) {
    const d = new Date(date);
    const today = new Date();

    if (d.getFullYear() !== today.getFullYear())
        return `${d.toLocaleString('en', { month: 'short' })} ${d.getFullYear()}`;
    return `${d.toLocaleString('en', { month: 'short' })} ${d.getDate()}`;
}

export function pretty_print_contributor(contributor: components['schemas']['ContributorShort'] | undefined) {
    if (!contributor) return '';
    if (!contributor.display_name) return `${contributor.local_handle}`;
    return `${contributor.display_name} (${contributor.local_handle})`;
}

export async function getReproductions(
    contrib: components['schemas']['ContributionShort'] | undefined
): Promise<components['schemas']['ContributionShort'][]> {

    if (!contrib) return [];

    let to_return: components['schemas']['ContributionShort'][] = [];
    try {
        const children_req = await GET('/contributions/{contribution_id}/children', {
            params: { path: { contribution_id: contrib.id } }
        });

        const children = children_req.data;
        if (children) {
            for (const child of children) {
                for (const tag of child.tags) {
                    // 1 is the ID of the "result reproduction" tag
                    if (tag.id === 1) {
                        to_return.push(child);
                    }
                }
            }
        }
    } catch (error) {
        console.error(error);
    }

    return to_return;
}

export async function getChildren(
    contrib: components['schemas']['ContributionShort'] | undefined
): Promise<components['schemas']['ContributionShort'][]> {

    if (!contrib) return [];


    try {
        const children_req = await GET('/contributions/{contribution_id}/children', {
            params: { path: { contribution_id: contrib.id } }
        });

        const children = children_req.data;
        return children;
    } catch (error) {
        console.error(error);
    }

    return [];
}

export function compare_contribs(a: components['schemas']['ContributionShort'], b: components['schemas']['ContributionShort']) {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
}

export function compare_tags(a: components['schemas']['TagPublic'], b: components['schemas']['TagPublic'],) {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
    return 0;
}