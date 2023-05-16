export const getTrimmedText = (node: Node): string | undefined => {
	return node.textContent?.trim();
}
