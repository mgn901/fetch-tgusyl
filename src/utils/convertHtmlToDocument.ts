const convertHtmlToDocument = (html: string, domParser: DOMParser) => {
  const document = domParser.parseFromString(html, 'text/html');
  return document;
};

export default convertHtmlToDocument;
