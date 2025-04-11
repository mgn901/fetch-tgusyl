import type { ISubjectCompact } from '../types/ISubjectCompact';

export const tabKamokuSampleHTML = `<style type="text/css">
</style>

<div style='font-size:10px; text-align: right;padding-right:30px;'>※各項目をクリックすると項目順に並べ替えを行います。</div>
<table style='width:650px;background:white;' class='tbl' cellspacing='0' cellpadding='5' id='tblead'>
  <thead id='disphead'>
    <tr data-href='none' data-parm='year=2023&fcode=11&dcode=000&ccode=000&tcode=' class='tblHeadR'
      style='color:white; background:#682187;'>
      <th data-sort='SUBJECT_CODE' style='width:50px;'>科目CD</th>
      <th data-sort='SUBJECT_NAME' style='width:230px;'>科目</th>
      <th data-sort='GRADE' style='width:30px;'>学年</th>
      <th data-sort='CLASS_NAME' style='width:40px;'>クラス</th>
      <th data-sort='SEMESTER_NAME' style='width:40px;'>学期</th>
      <th data-sort='WEEK_CODE' style='width:40px;'>曜日・時限</th>
      <th data-sort='ROOM_NAME' style='width:50px;'>講義室</th>
      <th data-sort='TEACHER_NAME' style='width:60px;'>担当教員</th>
      <th data-sort='MEMO' style='width:60px;'>備考</th>
    </tr>
  </thead>
</table>
<div class='tblScroll'>
  <table style='width:700px;background:white;' class='tbl tblBody' cellspacing='0' cellpadding='5'>
    <thead id='printhead'>
      <tr data-href='none' data-parm='year=2023&fcode=11&dcode=000&ccode=000&tcode=' class='tblHeadR'
        style='color:white; background:#682187;'>
        <th data-sort='SUBJECT_CODE' style='width:50px;'>科目CD</th>
        <th data-sort='SUBJECT_NAME' style='width:230px;'>科目</th>
        <th data-sort='GRADE' style='width:30px;'>学年</th>
        <th data-sort='CLASS_NAME' style='width:40px;'>クラス</th>
        <th data-sort='SEMESTER_NAME' style='width:40px;'>学期</th>
        <th data-sort='WEEK_CODE' style='width:40px;'>曜日・時限</th>
        <th data-sort='ROOM_NAME' style='width:50px;'>講義室</th>
        <th data-sort='TEACHER_NAME' style='width:60px;'>担当教員</th>
        <th data-sort='MEMO' style='width:60px;'>備考</th>
      </tr>
    </thead>
    </tbody>
    <tr data-href='https://tgusyl.example.com/ext_syllabus/referenceDirect.do?nologin=on&subjectID=example0&formatCD=1'>
      <td style='width:50px;'>70000000</td>
      <td style='width:230px;'>example科目名0</td>
      <td style='width:30px;text-align: center;'>1</td>
      <td style='width:40px;text-align: center;'>０１</td>
      <td style='width:40px;'>春学期</td>
      <td style='width:40px;'>月1</td>
      <td style='width:50px;'>Ｓ１０１</td>
      <td style='width:60px;'>example教員0、example教員1</td>
      <td style='width:50px;'>example備考</td>
    </tr>
    <tr data-href='https://tgusyl.example.com/ext_syllabus/referenceDirect.do?nologin=on&subjectID=example0&formatCD=1'>
      <td style='width:50px;'>70000000</td>
      <td style='width:230px;'>example科目名0</td>
      <td style='width:30px;text-align: center;'>1</td>
      <td style='width:40px;text-align: center;'>０１</td>
      <td style='width:40px;'>春学期</td>
      <td style='width:40px;'>月2</td>
      <td style='width:50px;'>Ｓ１０１</td>
      <td style='width:60px;'>example教員0、example教員1</td>
      <td style='width:50px;'>example備考</td>
    </tr>
    <tr data-href='https://tgusyl.example.com/ext_syllabus/referenceDirect.do?nologin=on&subjectID=example1&formatCD=1'>
      <td style='width:50px;'>70000001</td>
      <td style='width:230px;'>example科目名1</td>
      <td style='width:30px;text-align: center;'>1</td>
      <td style='width:40px;text-align: center;'>０１</td>
      <td style='width:40px;'>春学期</td>
      <td style='width:40px;'>火1</td>
      <td style='width:50px;'>Ｓ１０１</td>
      <td style='width:60px;'>example教員0、example教員1</td>
      <td style='width:50px;'>example備考</td>
    </tr>
    <tr data-href='https://tgusyl.example.com/ext_syllabus/referenceDirect.do?nologin=on&subjectID=&formatCD=1'>
      <td style='width:50px;'>70000002</td>
      <td style='width:230px;'>example科目名2</td>
      <td style='width:30px;text-align: center;'>1</td>
      <td style='width:40px;text-align: center;'>０１</td>
      <td style='width:40px;'>春学期</td>
      <td style='width:40px;'>&nbsp;</td>
      <td style='width:50px;'>&nbsp;</td>
      <td style='width:60px;'>example教員0、example教員1</td>
      <td style='width:50px;'>example備考</td>
    </tr>
    </tbody>
  </table>
</div>
`;

export const subjectCompactListSample: ISubjectCompact[] = [
  {
    id: 'example0',
    code: '70000000',
    name: 'example科目名0',
    teachers: ['example教員0', 'example教員1'],
    grades: [1],
    classes: ['01'],
    places: ['S101'],
    semesters: ['春学期'],
    weeks: ['月1', '月2'],
    updatedAt: 1680307200,
  },
  {
    id: 'example1',
    code: '70000001',
    name: 'example科目名1',
    teachers: ['example教員0', 'example教員1'],
    grades: [1],
    classes: ['01'],
    places: ['S101'],
    semesters: ['春学期'],
    weeks: ['火1'],
    updatedAt: 1680307200,
  },
  {
    id: '7000000201',
    code: '70000002',
    name: 'example科目名2',
    teachers: ['example教員0', 'example教員1'],
    grades: [1],
    classes: ['01'],
    places: [],
    semesters: ['春学期'],
    weeks: [],
    updatedAt: 1680307200,
  },
];
