const fetchAsText = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
): Promise<string> => {
  const response = await fetch(input, init);
  return response.text();
};
export default fetchAsText;
