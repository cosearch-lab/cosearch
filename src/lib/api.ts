import type { paths } from '$lib/cosearch';
import createClient from 'openapi-fetch';

import { PUBLIC_API_URL } from '$env/static/public'

export let { GET, POST, PATCH, PUT, DELETE, HEAD, TRACE } = createClient<paths>({
    baseUrl: PUBLIC_API_URL
    // headers: { authorization: `Bearer ${bearerToken}` } Add your auth here, not needed for public APIs like petstore in this example
});
