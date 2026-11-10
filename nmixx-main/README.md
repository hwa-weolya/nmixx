# NMIXX fan archive

정적 HTML/CSS/JavaScript로 구성된 비공식 팬 아카이브입니다. 웹사이트 콘텐츠는 `nmixx/js/`의 데이터 파일에서 관리하며, `site.js`가 각 페이지의 데이터를 화면과 연결합니다.

## 콘텐츠 수정

- 멤버 정보, 소개, 프로필 이미지: `nmixx/js/member-data.js`
- 앨범 커버, 발매일, 설명, 수록곡: `nmixx/js/album-data.js`
- 갤러리/멤버 프로필 사진 링크와 사진 제목: `nmixx/js/gallery-data.js`
- 한국어·영어·일본어 UI 문구: `nmixx/js/language-data.js`
- 공식 YouTube 최신 영상 5개: `nmixx/js/video-data.js`

갤러리의 카드 번호와 앨범 선택 인덱스는 데이터 배열 순서에서 자동으로 생성됩니다. 갤러리 이미지에는 제목과 대체 텍스트를 함께 입력하고, 썸네일과 고해상도 주소가 다르면 `thumbnail` 및 `fullSrc`를 지정하세요. `video-data.js`의 영상 항목은 공식 영상의 ID, URL, 한국어·영어·일본어 제목을 관리합니다. 최신 영상이 올라오면 해당 데이터를 업데이트하면 최대 5개까지 플레이어에 반영됩니다.

## 페이지

- `nmixx/index.html`: 메인 페이지, 멤버 탐색, 앨범/수록곡, 공식 최신 영상, 공식 채널
- `nmixx/member.html?member=lily`: 멤버 상세 페이지 (`member` 값은 멤버 데이터의 `id`)
- `nmixx/gallery.html`: 갤러리 및 사진 확대 보기

페이지는 스크립트 간 데이터 의존성을 위해 멤버·앨범·갤러리·영상·언어 데이터 파일을 먼저 불러온 뒤 `site.js`를 실행합니다. 브라우저에서 직접 열거나 정적 웹 서버로 실행할 수 있습니다.
