export const getDedupedArray = <T>(array: T[]): T[] => {
	const dedupedArray = [...new Set(array)];
	return dedupedArray;
}
