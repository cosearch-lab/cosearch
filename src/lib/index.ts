// place files you want to import through the `$lib` alias in this folder.
import type { Tag, Contribution } from './contribution';
import { tags, mockContribs } from './contribution';
export type { Tag, Contribution }
export { tags, mockContribs }

import type { Contributor } from "./contributor"
import { mockContributors } from "./contributor"
export type { Contributor }
export { mockContributors }

export function prettyPrintDate(date: string) {
    const d = new Date(date);
    const today = new Date();

    if (d.getFullYear() !== today.getFullYear())
        return `${d.toLocaleString('en', { month: 'short' })} ${d.getFullYear()}`;
    return `${d.toLocaleString('en', { month: 'short' })} ${d.getDate()}`;
}