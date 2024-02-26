import React, { FC } from 'react';
import ListItemWithCheckbox from './ListItemWithCheckbox';

const Page: FC = () => {
  const handleChangeSectionListItemCheckbox = (tabName: string) => {
    setSectionList((list) => list.map((_item) => {
      if (_item.tabName !== tabName) {
        return _item;
      }
      return { ..._item, checked: !(_item.checked) };
    }));
  };

  const handleClickRetrieveSectionList = () => {};

  const handleClickRetrieveSubjectCompactList = () => {};

  const handleClickDownloadSubjectList = () => {};

  return (
    <div>
      <h1>fetch-tgusyl</h1>
      <h2>portal.u-gakugei.ac.jp/syllabus から取得</h2>
      <ol>
        <li>
          「学科リストを取得」ボタンをクリックし、学科リストを取得してください。
        </li>
        <li>
          学科リストの中から科目リストを取得したい学科を選択し、「選択した学科の科目リストを取得」ボタンをクリックし、科目リストを取得してください。
        </li>
      </ol>

      <h3>学科リスト</h3>
      <button type='button' onClick={handleClickRetrieveSectionList}>
        学科リストを取得
      </button>
      <ul>
        {sectionList.map((section) => (
          <ListItemWithCheckbox
            checked={section.checked}
            onChange={() => { handleChangeSectionListItemCheckbox(section.tabName); }}
          >
            <span>
              {section.tabName}
            </span>
          </ListItemWithCheckbox>
        ))}
      </ul>
      <button type='button' onClick={handleClickRetrieveSubjectCompactList}>
        選択した学科の科目リストを取得
      </button>

      <h2>科目リスト</h2>
      <button type='button' className='browser_style chrome_style' onClick={handleClickDownloadSubjectList}>
        科目リストを保存
      </button>
    </div>
  );
};

export default Page;
