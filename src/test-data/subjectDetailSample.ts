import { ISubjectDetail } from '../types/ISubjectDetail';

export const tgusylReferenceDirectSampleHTML = `<html lang="ja-JP">

<head>
  <title>
    シラバス参照
  </title>
</head>

<body bgcolor="#FFFFFF" text="#000000" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
  <SPAN ID="timerDisplay" STYLE="font-size:0;font-color:white;"></SPAN>
  <table width="100%" border="0" cellpadding="0" cellspacing="10">
    <tr>
      <td class="txt12" colspan="2">
      </td>
    </tr>
    <tr>
      <td class="txt12" valign="top">
        <table width="100%" border="1" cellspacing="0" cellpadding="0" bgcolor="#999999">
          <tr bgcolor="#FFFFFF">
            <td>
              <table border="0" cellspacing="10" cellpadding="0">
                <tr>
                  <td class="txt12" nowrap>
                    タイトル「<font color="#FF0000"><b>example年度 example学部シラバス</b></font>」、フォルダ「<font color="#FF0000">
                      <b>example年度 example学部シラバス－exampleディレクトリ</b>
                    </font>」<br>
                    シラバスの詳細は以下となります。<br>ナンバリングは科目コードとは異なります。ご注意ください。
                  </td>
                </tr>
                <tr>
                  <td class="txt12Info" nowrap>
                    <form name="Syllabus2Form" method="post" action="/ext_syllabus/aboutNumbering.do">
                      <input type="hidden" id="aboutNumbering">
                      <a href="#"
                        onclick="return dbPrintClick('print', document.getElementById('aboutNumbering'));">ナンバリングとは</a>
                    </form>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <SPAN ID="timerDisplay" STYLE="font-size:0;font-color:white;"></SPAN>
  <table width="100%" border="0" cellpadding="0" cellspacing="10">
    <tr>
      <td>
        <table border="1" cellspacing="0" cellpadding="3" class="txt12" bgcolor="#999999" align="left">
          <tr bgcolor="#FFFFFF">
            <td class="txt12" BGCOLOR="#6699FF" WIDTH="170" nowrap>
              <font color="#FFFFFF">
                科目コード&nbsp;
              </font>
            </td>
            <td class="txt12" width="770" colspan="3">
              70000000&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td class="txt12" BGCOLOR="#6699FF" WIDTH="170" nowrap>
              <font color="#FFFFFF">
                科目名&nbsp;
              </font>
            </td>
            <td class="txt12" width="770" colspan="3">
              example科目名&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td class="txt12" bgcolor="#6699ff" WIDTH="170" nowrap>
              <font color="#FFFFFF">
                担当教員&nbsp;
              </font>
            </td>
            <td class="txt12" width="770" colspan="3">
              example教員0,example教員1&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td class="txt12" bgcolor="#6699FF" width="170" nowrap>
              <font color="#FFFFFF">
                対象学年&nbsp;
              </font>
            </td>
            <td class="txt12" width="770" colspan="3">
              1年&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td class="txt12" bgcolor="#6699FF" width="170" nowrap>
              <font color="#FFFFFF">
                クラス&nbsp;
              </font>
            </td>
            <td class="txt12" width="300">
              ０１&nbsp;
            </td>
            <td class="txt12" bgcolor="#6699FF" width="170" nowrap>
              <font color="#FFFFFF">
                講義室&nbsp;
              </font>
            </td>
            <td class="txt12" width="300">
              Ｓ１０１ &nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td class="txt12" bgcolor="#6699FF" width="170" nowrap>
              <font color="#FFFFFF">
                開講学期&nbsp;
              </font>
            </td>
            <td class="txt12" width="300">
              春学期&nbsp;
            </td>
            <td class="txt12" bgcolor="#6699FF" width="170" nowrap>
              <font color="#FFFFFF">
                開講時期&nbsp;
              </font>
            </td>
            <td class="txt12" width="300">
              春学期&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td class="txt12" bgcolor="#6699FF" width="170" nowrap>
              <font color="#FFFFFF">
                曜日・時限&nbsp;
              </font>
            </td>
            <td class="txt12" width="300">
              月１&nbsp;
            </td>
            <td class="txt12" bgcolor="#6699FF" width="170" nowrap>
              <font color="#FFFFFF">
                単位区分&nbsp;
              </font>
            </td>
            <td class="txt12" width="300">
              必修&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td class="txt12" bgcolor="#6699FF" width="170" nowrap>
              <font color="#FFFFFF">
                授業形態&nbsp;
              </font>
            </td>
            <td class="txt12" width="300">
              講義・演習&nbsp;
            </td>
            <td class="txt12" bgcolor="#6699FF" width="170" nowrap>
              <font color="#FFFFFF">
                単位数&nbsp;
              </font>
            </td>
            <td class="txt12" width="300">
              2&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td class="txt12" BGCOLOR="#6699FF" WIDTH="170" nowrap>
              <font color="#FFFFFF">受講対象&nbsp;</FONT>
            </td>
            <td class="txt12" width="770" colspan="3">
              example課程 example区分0、example課程 example区分1&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td class="txt12" BGCOLOR="#6699FF" WIDTH="170" nowrap>
              <font color="#FFFFFF">備考&nbsp;</FONT>
            </td>
            <td class="txt12" width="770" colspan="3">
              example備考&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td class="txt12" BGCOLOR="#6699FF" WIDTH="170" nowrap>
              <font color="#FFFFFF">
                ナンバリング&nbsp;
              </font>
            </td>
            <td class="txt12" width="770" colspan="3">
              133E54&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td nowrap bgcolor="#99FFCC" WIDTH="170">
              <font color="#0000FF">ねらいと目標</font>
            </td>
            <td width="770" colspan="3">
              exampleねらいと目標&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td nowrap bgcolor="#99FFCC" WIDTH="170">
              <font color="#0000FF">内容</font>
            </td>
            <td width="770" colspan="3">
              example内容&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td nowrap bgcolor="#99FFCC" WIDTH="170">
              <font color="#0000FF">テキスト</font>
            </td>
            <td width="770" colspan="3">
              exampleテキスト<BR />exampleテキスト&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td nowrap bgcolor="#99FFCC" WIDTH="170">
              <font color="#0000FF">参考文献</font>
            </td>
            <td width="770" colspan="3">
              example参考文献&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td nowrap bgcolor="#99FFCC" WIDTH="170">
              <font color="#0000FF">成績評価方法</font>
            </td>
            <td width="770" colspan="3">
              example成績評価方法<BR />example成績評価方法&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td nowrap bgcolor="#99FFCC" WIDTH="170">
              <font color="#0000FF">授業スケジュール（展開計画）</font>
            </td>
            <td width="770" colspan="3">
              example授業スケジュール&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td nowrap bgcolor="#99FFCC" WIDTH="170">
              <font color="#0000FF">授業時間外における学習方法</font>
            </td>
            <td width="770" colspan="3">
              example授業時間外における学習方法&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td nowrap bgcolor="#99FFCC" WIDTH="170">
              <font color="#0000FF">授業のキーワード</font>
            </td>
            <td width="770" colspan="3">
              exampleキーワード&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td nowrap bgcolor="#99FFCC" WIDTH="170">
              <font color="#0000FF">受講補足（履修制限等）</font>
            </td>
            <td width="770" colspan="3">&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td nowrap bgcolor="#99FFCC" WIDTH="170">
              <font color="#0000FF">学生へのメッセージ</font>
            </td>
            <td width="770" colspan="3">
              example学生へのメッセージ&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td nowrap bgcolor="#99FFCC" WIDTH="170">
              <font color="#0000FF">実務経験のある教員による科目</font>
            </td>
            <td width="770" colspan="3">&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td nowrap bgcolor="#99FFCC" WIDTH="170">
              <font color="#0000FF">授業実施上の特記事項</font>
            </td>
            <td width="770" colspan="3">
              example授業実施上の特記事項&nbsp;
            </td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td nowrap bgcolor="#99FFCC" WIDTH="170">
              <font color="#0000FF">その他 </font>
            </td>
            <td width="770" colspan="3">&nbsp;
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <table width="630" border="0" cellspacing="0" cellpadding="0" align="center">
    <tr>
      <td align="center" height="20"></td>
    </tr>
    <tr>
      <td align="center" class="txt10" nowrap>
        <font color="#666666">Copyright(C) example.</font>
      </td>
    </tr>
  </table>
  <br>
</body>

</html>
`;

export const subjectDetailSample: ISubjectDetail = {
  id: 'example',
  type: 'detail',
  code: '70000000',
  name: 'example科目名',
  teachers: ['example教員0', 'example教員1'],
  grades: [1],
  classes: ['01'],
  places: ['S101'],
  semesters: ['春学期'],
  weeks: ['月1'],
  categories: ['example課程 example区分0', 'example課程 example区分1'],
  updatedAt: 1680307200,
  units: 2,
  properties: [
    { key: 'メモ', type: 'plain', value: 'example備考' },
    { key: 'ナンバリング', type: 'plain', value: '133E54' },
    { key: 'テキスト', type: 'plain', value: 'exampleテキスト\nexampleテキスト' },
    { key: '出典', type: 'plain', value: '[シラバス参照 - 東京学芸大学 授業ガイド https://example.com/]' },
  ],
};
