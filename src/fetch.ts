export type FetchFunction = (params: { readonly url: string | URL }) => Promise<string>;
