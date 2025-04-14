const fullWidthAscii = /[Ａ-Ｚａ-ｚ０-９]/g;
export const toAsciiString = (str: string) =>
  str.replace(fullWidthAscii, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0));

export const isNonEmptyString = (value: string) => value !== '';
