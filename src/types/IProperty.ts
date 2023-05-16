export interface IProperty<Key extends string = string> {
  readonly key: Key;
  readonly type: 'plain';
  value?: string;
}
