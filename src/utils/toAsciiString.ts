const fullWidthAscii = /[Ａ-Ｚａ-ｚ０-９]/g;

const toAsciiString = (str: string) => str.replace(
  fullWidthAscii,
  (s) => String.fromCharCode(s.charCodeAt(0) - 0xFEE0),
);

export default toAsciiString;
