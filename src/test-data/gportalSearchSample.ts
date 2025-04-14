export const gportalSearchSampleHtml = `<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>学芸ポータル｜シラバス検索</title>
</head>

<body>
  <div id="contentsWrapper" class="sidemenu-hide clearfix">
    <div id="pageMain" class="page-main sidemenu-hide">
      <div id="pageContents">
        <div>
          <div id="pageContents syllabus_search_contents">
            <form action="/syllabus/search" id="syllabusSearchForm" method="get">
              <div id="syllabusSearchResult" class="block clearfix syllabus-search-result-area">
                <div class="block-title block-wide course-search-color">
                  <div class="block-title-txt">検索結果一覧</div>
                </div>
                <div>
                  <div class="contents-list">
                    <div class="contents-detail">
                      <div class="contents-display-flex-exchange-sp contents-display-flex-padding-sp">
                        <div class="paging-txt">1,234件中1〜1件を表示</div>
                        <div class="contents-list contents-display-flex paging-area">
                          <div class="result_paging_btn">
                            <span
                              class="btn btn-paging btn-paging-txt btn-file-margin btn-color current-page disabled"><a
                                class="1">1</a></span>
                            <a class="btn btn-paging btn-paging-txt btn-file-margin btn-color 2">2</a>
                            <a class="btn btn-paging btn-paging-txt btn-file-margin btn-color 3">3</a>
                            <a class="btn btn-paging btn-paging-txt btn-file-margin btn-color 4">4</a>
                            <a class="btn btn-paging btn-paging-txt btn-file-margin btn-color 5">5</a>
                            <a class="btn btn-paging btn-paging-txt btn-file-margin btn-color 2">&gt;</a>
                            <a class="btn btn-paging btn-paging-txt btn-file-margin btn-color 62">≫</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="contents-list">
                  <div class="contents-detail">
                    <div
                      class="contents-list contents-display-flex contents-tag contents-header-txt sp-contents-hidden">
                      <div class="syllabus-search-kamoku-code bold-txt">科目CD</div>
                      <div class="syllabus-search-kamoku-name bold-txt">科目</div>
                      <div class="syllabus-search-grade bold-txt">学年</div>
                      <div class="syllabus-search-class bold-txt">クラス</div>
                      <div class="syllabus-search-period bold-txt">開講期</div>
                      <div class="syllabus-search-day-of-week bold-txt">曜日時限</div>
                      <div class="syllabus-search-room bold-txt">講義室</div>
                      <div class="syllabus-search-teacher-name bold-txt">教員名</div>
                      <div class="syllabus-search-remarks bold-txt">備考</div>
                      <div class="syllabus-search-syllabus bold-txt">シラバス</div>
                    </div>
                    <div class="contents-list">
                      <div class="result-list contents-display-flex-exchange-sp contents-display-flex-padding-sp">
                        <div class="syllabus-search-kamoku-code"><span>00000001</span></div>
                        <div class="syllabus-search-kamoku-name"><span>【動作確認１】</span></div>
                        <div class="syllabus-search-grade">4</div>
                        <div class="syllabus-search-class">01</div>
                        <div class="syllabus-search-period">春学期</div>
                        <div class="syllabus-search-day-of-week">火１</div>
                        <div class="syllabus-search-room">
                          <span>遠隔</span>
                        </div>
                        <div class="syllabus-search-teacher-name"><span>動作確認用　教員</span></div>
                        <div class="syllabus-search-remarks"></div>
                        <div class="syllabus-search-syllabus">
                          <a href="https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&amp;subjectID=example&amp;formatCD=1" target="_blank"></a>
                        </div>
                      </div>
                      <div class="result-list contents-display-flex-exchange-sp contents-display-flex-padding-sp">
                        <div class="syllabus-search-kamoku-code"><span>00000002</span></div>
                        <div class="syllabus-search-kamoku-name"><span>【動作確認２】</span></div>
                        <div class="syllabus-search-grade">4</div>
                        <div class="syllabus-search-class">01</div>
                        <div class="syllabus-search-period">春学期</div>
                        <div class="syllabus-search-day-of-week">木３,木５,木４</div>
                        <div class="syllabus-search-room">
                          <span>遠隔,遠隔,遠隔</span>
                        </div>
                        <div class="syllabus-search-teacher-name"><span>動作確認用　教員1,動作確認用　教員2,動作確認用　教員3</span></div>
                        <div class="syllabus-search-remarks"></div>
                        <div class="syllabus-search-syllabus">
                          <a href="https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&amp;subjectID=example&amp;formatCD=1" target="_blank"></a>
                        </div>
                      </div>
                      <div class="result-list contents-display-flex-exchange-sp contents-display-flex-padding-sp">
                        <div class="syllabus-search-kamoku-code"><span>00000003</span></div>
                        <div class="syllabus-search-kamoku-name"><span>【動作確認３】</span></div>
                        <div class="syllabus-search-grade">4</div>
                        <div class="syllabus-search-class">01</div>
                        <div class="syllabus-search-period">春学期</div>
                        <div class="syllabus-search-day-of-week">外時間外</div>
                        <div class="syllabus-search-room">
                          <span>遠隔</span>
                        </div>
                        <div class="syllabus-search-teacher-name"><span>動作確認用　教員</span></div>
                        <div class="syllabus-search-remarks"></div>
                        <div class="syllabus-search-syllabus">
                          <a href="https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&amp;subjectID=example&amp;formatCD=1" target="_blank"></a>
                        </div>
                      </div>
                      <div class="result-list contents-display-flex-exchange-sp contents-display-flex-padding-sp">
                        <div class="syllabus-search-kamoku-code"><span>00000004</span></div>
                        <div class="syllabus-search-kamoku-name"><span>【動作確認４】</span></div>
                        <div class="syllabus-search-grade">4</div>
                        <div class="syllabus-search-class">01</div>
                        <div class="syllabus-search-period">秋学期</div>
                        <div class="syllabus-search-day-of-week">月１</div>
                        <div class="syllabus-search-room">
                          <span>遠隔</span>
                        </div>
                        <div class="syllabus-search-teacher-name"><span>動作確認用　教員</span></div>
                        <div class="syllabus-search-remarks"></div>
                        <div class="syllabus-search-syllabus">
                          <a href="https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&amp;subjectID=example&amp;formatCD=1" target="_blank"></a>
                        </div>
                      </div>
                      <div class="result-list contents-display-flex-exchange-sp contents-display-flex-padding-sp">
                        <div class="syllabus-search-kamoku-code"><span>00000005</span></div>
                        <div class="syllabus-search-kamoku-name"><span>【動作確認５】</span></div>
                        <div class="syllabus-search-grade">4</div>
                        <div class="syllabus-search-class">01</div>
                        <div class="syllabus-search-period">秋学期</div>
                        <div class="syllabus-search-day-of-week">金３,金４,金５</div>
                        <div class="syllabus-search-room">
                          <span>遠隔,遠隔,遠隔</span>
                        </div>
                        <div class="syllabus-search-teacher-name"><span>動作確認用　教員1,動作確認用　教員2,動作確認用　教員3</span></div>
                        <div class="syllabus-search-remarks"></div>
                        <div class="syllabus-search-syllabus">
                          <a href="https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&amp;subjectID=example&amp;formatCD=1" target="_blank"></a>
                        </div>
                      </div>
                      <div class="result-list contents-display-flex-exchange-sp contents-display-flex-padding-sp">
                        <div class="syllabus-search-kamoku-code"><span>00000006</span></div>
                        <div class="syllabus-search-kamoku-name"><span>【動作確認６】</span></div>
                        <div class="syllabus-search-grade">4</div>
                        <div class="syllabus-search-class">01</div>
                        <div class="syllabus-search-period">秋学期</div>
                        <div class="syllabus-search-day-of-week">外時間外</div>
                        <div class="syllabus-search-room">
                          <span>遠隔</span>
                        </div>
                        <div class="syllabus-search-teacher-name"><span>動作確認用　教員</span></div>
                        <div class="syllabus-search-remarks"></div>
                        <div class="syllabus-search-syllabus">
                          <a href="https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&amp;subjectID=example&amp;formatCD=1" target="_blank"></a>
                        </div>
                      </div>
                      <div class="result-list contents-display-flex-exchange-sp contents-display-flex-padding-sp">
                        <div class="syllabus-search-kamoku-code"><span>00000007</span></div>
                        <div class="syllabus-search-kamoku-name"><span>【動作確認７】</span></div>
                        <div class="syllabus-search-grade">4</div>
                        <div class="syllabus-search-class">01</div>
                        <div class="syllabus-search-period">通年</div>
                        <div class="syllabus-search-day-of-week">水２</div>
                        <div class="syllabus-search-room">
                          <span>遠隔</span>
                        </div>
                        <div class="syllabus-search-teacher-name"><span>動作確認用　教員</span></div>
                        <div class="syllabus-search-remarks"></div>
                        <div class="syllabus-search-syllabus">
                          <a href="https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&amp;subjectID=example&amp;formatCD=1" target="_blank"></a>
                        </div>
                      </div>
                      <div class="result-list contents-display-flex-exchange-sp contents-display-flex-padding-sp">
                        <div class="syllabus-search-kamoku-code"><span>00000010</span></div>
                        <div class="syllabus-search-kamoku-name"><span>【動作確認１０】（T1月1）</span></div>
                        <div class="syllabus-search-grade">4</div>
                        <div class="syllabus-search-class">00</div>
                        <div class="syllabus-search-period">第1ターム</div>
                        <div class="syllabus-search-day-of-week">月１</div>
                        <div class="syllabus-search-room">
                        </div>
                        <div class="syllabus-search-teacher-name"><span>動作確認用　教員</span></div>
                        <div class="syllabus-search-remarks"></div>
                        <div class="syllabus-search-syllabus">
                          <a href="https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&amp;subjectID=example&amp;formatCD=1" target="_blank"></a>
                        </div>
                      </div>
                      <div class="result-list contents-display-flex-exchange-sp contents-display-flex-padding-sp">
                        <div class="syllabus-search-kamoku-code"><span>00000011</span></div>
                        <div class="syllabus-search-kamoku-name"><span>【動作確認１１】（T1火2）</span></div>
                        <div class="syllabus-search-grade">4</div>
                        <div class="syllabus-search-class">00</div>
                        <div class="syllabus-search-period">第1ターム</div>
                        <div class="syllabus-search-day-of-week">火２</div>
                        <div class="syllabus-search-room">
                        </div>
                        <div class="syllabus-search-teacher-name"><span>動作確認用　教員</span></div>
                        <div class="syllabus-search-remarks"></div>
                        <div class="syllabus-search-syllabus">
                          <a href="https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&amp;subjectID=example&amp;formatCD=1" target="_blank"></a>
                        </div>
                      </div>
                      <div class="result-list contents-display-flex-exchange-sp contents-display-flex-padding-sp">
                        <div class="syllabus-search-kamoku-code"><span>00000012</span></div>
                        <div class="syllabus-search-kamoku-name"><span>【動作確認１２】（T2月1）</span></div>
                        <div class="syllabus-search-grade">4</div>
                        <div class="syllabus-search-class">00</div>
                        <div class="syllabus-search-period">第2ターム</div>
                        <div class="syllabus-search-day-of-week">月１</div>
                        <div class="syllabus-search-room">
                        </div>
                        <div class="syllabus-search-teacher-name"><span>動作確認用　教員</span></div>
                        <div class="syllabus-search-remarks"></div>
                        <div class="syllabus-search-syllabus">
                          <a href="https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&amp;subjectID=example&amp;formatCD=1" target="_blank"></a>
                        </div>
                      </div>
                      <div class="result-list contents-display-flex-exchange-sp contents-display-flex-padding-sp">
                        <div class="syllabus-search-kamoku-code"><span>00000013</span></div>
                        <div class="syllabus-search-kamoku-name"><span>【動作確認１３】（T2水3）</span></div>
                        <div class="syllabus-search-grade">4</div>
                        <div class="syllabus-search-class">00</div>
                        <div class="syllabus-search-period">第2ターム</div>
                        <div class="syllabus-search-day-of-week">水３</div>
                        <div class="syllabus-search-room">
                        </div>
                        <div class="syllabus-search-teacher-name"><span>動作確認用　教員</span></div>
                        <div class="syllabus-search-remarks"></div>
                        <div class="syllabus-search-syllabus">
                          <a href="https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&amp;subjectID=example&amp;formatCD=1" target="_blank"></a>
                        </div>
                      </div>
                      <div class="result-list contents-display-flex-exchange-sp contents-display-flex-padding-sp">
                        <div class="syllabus-search-kamoku-code"><span>00000014</span></div>
                        <div class="syllabus-search-kamoku-name"><span>【動作確認１４】（T3月1）</span></div>
                        <div class="syllabus-search-grade">4</div>
                        <div class="syllabus-search-class">00</div>
                        <div class="syllabus-search-period">第3ターム</div>
                        <div class="syllabus-search-day-of-week">月１</div>
                        <div class="syllabus-search-room">
                        </div>
                        <div class="syllabus-search-teacher-name"><span>動作確認用　教員</span></div>
                        <div class="syllabus-search-remarks"></div>
                        <div class="syllabus-search-syllabus">
                          <a href="https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&amp;subjectID=example&amp;formatCD=1" target="_blank"></a>
                        </div>
                      </div>
                      <div class="result-list contents-display-flex-exchange-sp contents-display-flex-padding-sp">
                        <div class="syllabus-search-kamoku-code"><span>00000015</span></div>
                        <div class="syllabus-search-kamoku-name"><span>【動作確認１５】（T3木4）</span></div>
                        <div class="syllabus-search-grade">4</div>
                        <div class="syllabus-search-class">00</div>
                        <div class="syllabus-search-period">第3ターム</div>
                        <div class="syllabus-search-day-of-week">木４</div>
                        <div class="syllabus-search-room">
                        </div>
                        <div class="syllabus-search-teacher-name"><span>動作確認用　教員</span></div>
                        <div class="syllabus-search-remarks"></div>
                        <div class="syllabus-search-syllabus">
                          <a href="https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&amp;subjectID=example&amp;formatCD=1" target="_blank"></a>
                        </div>
                      </div>
                      <div class="result-list contents-display-flex-exchange-sp contents-display-flex-padding-sp">
                        <div class="syllabus-search-kamoku-code"><span>00000016</span></div>
                        <div class="syllabus-search-kamoku-name"><span>【動作確認１６】（T4月1）</span></div>
                        <div class="syllabus-search-grade">4</div>
                        <div class="syllabus-search-class">00</div>
                        <div class="syllabus-search-period">第4ターム</div>
                        <div class="syllabus-search-day-of-week">月１</div>
                        <div class="syllabus-search-room">
                        </div>
                        <div class="syllabus-search-teacher-name"><span>動作確認用　教員</span></div>
                        <div class="syllabus-search-remarks"></div>
                        <div class="syllabus-search-syllabus">
                          <a href="https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&amp;subjectID=example&amp;formatCD=1" target="_blank"></a>
                        </div>
                      </div>
                      <div class="result-list contents-display-flex-exchange-sp contents-display-flex-padding-sp">
                        <div class="syllabus-search-kamoku-code"><span>00000017</span></div>
                        <div class="syllabus-search-kamoku-name"><span>【動作確認１７】（T4金5）</span></div>
                        <div class="syllabus-search-grade">4</div>
                        <div class="syllabus-search-class">00</div>
                        <div class="syllabus-search-period">第4ターム</div>
                        <div class="syllabus-search-day-of-week">金５</div>
                        <div class="syllabus-search-room">
                        </div>
                        <div class="syllabus-search-teacher-name"><span>動作確認用　教員</span></div>
                        <div class="syllabus-search-remarks"></div>
                        <div class="syllabus-search-syllabus">
                          <a href="https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&amp;subjectID=example&amp;formatCD=1" target="_blank"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="contents-list">
                    <div class="contents-detail">
                      <div class="contents-display-flex-exchange-sp contents-display-flex-padding-sp">
                        <div class="paging-txt">1,234件中1〜1件を表示</div>
                        <div class="contents-list contents-display-flex paging-area">
                          <div class="result_paging_btn">
                            <span
                              class="btn btn-paging btn-paging-txt btn-file-margin btn-color current-page disabled"><a
                                class="1">1</a></span>
                            <a class="btn btn-paging btn-paging-txt btn-file-margin btn-color 2">2</a>
                            <a class="btn btn-paging btn-paging-txt btn-file-margin btn-color 3">3</a>
                            <a class="btn btn-paging btn-paging-txt btn-file-margin btn-color 4">4</a>
                            <a class="btn btn-paging btn-paging-txt btn-file-margin btn-color 5">5</a>
                            <a class="btn btn-paging btn-paging-txt btn-file-margin btn-color 2">&gt;</a>
                            <a class="btn btn-paging btn-paging-txt btn-file-margin btn-color 62">≫</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <span id="selectAll" class="contents-hidden">すべて</span>
        </div>
      </div>
    </div>
  </div>
</body>

</html>
`;

export const gportalSearchResultSample = {
  count: 1234,
  offset: 0,
  limit: 1,
  subjects: [
    {
      subjectCode: '00000001',
      name: '【動作確認1】',
      grade: '4',
      class: '01',
      period: '春学期',
      classHours: ['火1'],
      places: ['遠隔'],
      teachers: ['動作確認用　教員'],
      remarks: '',
      syllabusUrl:
        'https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&subjectID=example&formatCD=1',
    },
    {
      subjectCode: '00000002',
      name: '【動作確認2】',
      grade: '4',
      class: '01',
      period: '春学期',
      classHours: ['木3', '木5', '木4'],
      places: ['遠隔', '遠隔', '遠隔'],
      teachers: ['動作確認用　教員1', '動作確認用　教員2', '動作確認用　教員3'],
      remarks: '',
      syllabusUrl:
        'https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&subjectID=example&formatCD=1',
    },
    {
      subjectCode: '00000003',
      name: '【動作確認3】',
      grade: '4',
      class: '01',
      period: '春学期',
      classHours: ['外時間外'],
      places: ['遠隔'],
      teachers: ['動作確認用　教員'],
      remarks: '',
      syllabusUrl:
        'https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&subjectID=example&formatCD=1',
    },
    {
      subjectCode: '00000004',
      name: '【動作確認4】',
      grade: '4',
      class: '01',
      period: '秋学期',
      classHours: ['月1'],
      places: ['遠隔'],
      teachers: ['動作確認用　教員'],
      remarks: '',
      syllabusUrl:
        'https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&subjectID=example&formatCD=1',
    },
    {
      subjectCode: '00000005',
      name: '【動作確認5】',
      grade: '4',
      class: '01',
      period: '秋学期',
      classHours: ['金3', '金4', '金5'],
      places: ['遠隔', '遠隔', '遠隔'],
      teachers: ['動作確認用　教員1', '動作確認用　教員2', '動作確認用　教員3'],
      remarks: '',
      syllabusUrl:
        'https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&subjectID=example&formatCD=1',
    },
    {
      subjectCode: '00000006',
      name: '【動作確認6】',
      grade: '4',
      class: '01',
      period: '秋学期',
      classHours: ['外時間外'],
      places: ['遠隔'],
      teachers: ['動作確認用　教員'],
      remarks: '',
      syllabusUrl:
        'https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&subjectID=example&formatCD=1',
    },
    {
      subjectCode: '00000007',
      name: '【動作確認7】',
      grade: '4',
      class: '01',
      period: '通年',
      classHours: ['水2'],
      places: ['遠隔'],
      teachers: ['動作確認用　教員'],
      remarks: '',
      syllabusUrl:
        'https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&subjectID=example&formatCD=1',
    },
    {
      subjectCode: '00000010',
      name: '【動作確認10】（T1月1）',
      grade: '4',
      class: '00',
      period: '第1ターム',
      classHours: ['月1'],
      places: [],
      teachers: ['動作確認用　教員'],
      remarks: '',
      syllabusUrl:
        'https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&subjectID=example&formatCD=1',
    },
    {
      subjectCode: '00000011',
      name: '【動作確認11】（T1火2）',
      grade: '4',
      class: '00',
      period: '第1ターム',
      classHours: ['火2'],
      places: [],
      teachers: ['動作確認用　教員'],
      remarks: '',
      syllabusUrl:
        'https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&subjectID=example&formatCD=1',
    },
    {
      subjectCode: '00000012',
      name: '【動作確認12】（T2月1）',
      grade: '4',
      class: '00',
      period: '第2ターム',
      classHours: ['月1'],
      places: [],
      teachers: ['動作確認用　教員'],
      remarks: '',
      syllabusUrl:
        'https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&subjectID=example&formatCD=1',
    },
    {
      subjectCode: '00000013',
      name: '【動作確認13】（T2水3）',
      grade: '4',
      class: '00',
      period: '第2ターム',
      classHours: ['水3'],
      places: [],
      teachers: ['動作確認用　教員'],
      remarks: '',
      syllabusUrl:
        'https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&subjectID=example&formatCD=1',
    },
    {
      subjectCode: '00000014',
      name: '【動作確認14】（T3月1）',
      grade: '4',
      class: '00',
      period: '第3ターム',
      classHours: ['月1'],
      places: [],
      teachers: ['動作確認用　教員'],
      remarks: '',
      syllabusUrl:
        'https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&subjectID=example&formatCD=1',
    },
    {
      subjectCode: '00000015',
      name: '【動作確認15】（T3木4）',
      grade: '4',
      class: '00',
      period: '第3ターム',
      classHours: ['木4'],
      places: [],
      teachers: ['動作確認用　教員'],
      remarks: '',
      syllabusUrl:
        'https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&subjectID=example&formatCD=1',
    },
    {
      subjectCode: '00000016',
      name: '【動作確認16】（T4月1）',
      grade: '4',
      class: '00',
      period: '第4ターム',
      classHours: ['月1'],
      places: [],
      teachers: ['動作確認用　教員'],
      remarks: '',
      syllabusUrl:
        'https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&subjectID=example&formatCD=1',
    },
    {
      subjectCode: '00000017',
      name: '【動作確認17】（T4金5）',
      grade: '4',
      class: '00',
      period: '第4ターム',
      classHours: ['金5'],
      places: [],
      teachers: ['動作確認用　教員'],
      remarks: '',
      syllabusUrl:
        'https://example.edu/ext_syllabus/referenceDirect.do?nologin=on&subjectID=example&formatCD=1',
    },
  ],
};
