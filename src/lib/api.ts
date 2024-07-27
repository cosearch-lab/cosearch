import type { paths } from '$lib/cosearch';
import createClient from 'openapi-fetch';

export let { GET, POST, PATCH, PUT, DELETE, HEAD, TRACE } = createClient<paths>({
    baseUrl: 'http://127.0.0.1:8000/'
    // headers: { authorization: `Bearer ${bearerToken}` } Add your auth here, not needed for public APIs like petstore in this example
});
