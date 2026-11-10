// 멤버 이름, 프로필 사진, 공개 정보와 다국어 소개를 공통 데이터로 관리합니다.
// index.html과 member.html이 같은 레코드를 사용해 프로필 내용을 일관되게 유지합니다.
window.NMIXX_MEMBERS = [
  {
    id: "lily", name: "LILY", native: "릴리", realName: "Lily Jin Morrow",
    birthday: "2002.10.17", date: "2002-10-17", nationality: "Korean-Australian",
    position: "Vocalist", positionByLanguage: { ko: "보컬", en: "Vocalist", ja: "ボーカル" },
    nationalityByLanguage: { ko: "한국·호주", en: "Korean-Australian", ja: "韓国・オーストラリア" },
    mbti: "ENFP", theme: "member-theme--lily",
    image: "https://d1meds70430yck.cloudfront.net/images/2026/09/30/gAAAAABqvIeXqddbfvSoG50ZqBBJu84pTSoM2ujSBKNfVXCbJpQa1Ip3KAnRwAHRNyABldLEQdpBncDLPQH21VVjtwwZZ7HBP79kBayVY1C6tO9GMSvXE7p22eyqiHouS1Ae8-oR4WWJKhJ96erf85F8vFxj3LeA3A%3D%3D/d5caa90fa546cc03b271c3b1a1df7765ea4291bf.jpg",
    intro: { ko: "폭넓은 음역과 선명한 표현력으로 NMIXX의 다채로운 보컬 색을 펼칩니다.", en: "A versatile vocalist whose expressive range adds vivid color to NMIXX's sound.", ja: "幅広い音域と豊かな表現力で、NMIXXの多彩なボーカルカラーを広げます。" }
  },
  {
    id: "haewon", name: "HAEWON", native: "해원", realName: "Oh Hae-won",
    birthday: "2003.02.25", date: "2003-02-25", nationality: "South Korean",
    position: "Leader · Vocalist", positionByLanguage: { ko: "리더 · 보컬", en: "Leader · Vocalist", ja: "リーダー · ボーカル" },
    nationalityByLanguage: { ko: "대한민국", en: "South Korean", ja: "韓国" },
    mbti: "ESTP", theme: "member-theme--haewon",
    image: "https://d1meds70430yck.cloudfront.net/images/2026/09/30/gAAAAABqvIecCviRN3XbRXUibe0YthsQrd3ZSfxk-tTgkaXbZ6gDYrxZ503sCFvLPAAVfz4gJx_SwFu_Oe7tXXNe5F8lVwcmZ83-ehkSmR26lOelV6xR9rh8dd2Zf2XOkqQ3IQyCh-Nr4c-oZr5cSWimyXDKiTlE_Q%3D%3D/46998f44066e190edb70443b7c6764e1ab0c741a.jpg",
    intro: { ko: "안정적인 리더십과 탄탄한 라이브로 팀의 중심을 잡고 재치 있는 매력까지 전합니다.", en: "A steady leader and live vocalist who anchors the team and brings plenty of wit.", ja: "安定したリーダーシップと確かな歌唱力でチームを支え、機知に富んだ魅力も届けます。" }
  },
  {
    id: "sullyoon", name: "SULLYOON", native: "설윤", realName: "Seol Yoon-a",
    birthday: "2004.01.26", date: "2004-01-26", nationality: "South Korean",
    position: "Vocalist", positionByLanguage: { ko: "보컬", en: "Vocalist", ja: "ボーカル" },
    nationalityByLanguage: { ko: "대한민국", en: "South Korean", ja: "韓国" },
    mbti: "ISFP", theme: "member-theme--sullyoon",
    image: "https://d1meds70430yck.cloudfront.net/images/2026/09/30/gAAAAABqvIeiH4ZLgQaAWTddvDoLFLLDYLdsn39jsy5bdZdkMmAtmS1GEAx899Aoel397wiT4Q7pfyXApOG7SGckZH9H7cbiA9cdycT90p0G0zR7BlgoTpwMCqtWDtI9KfhtW9ilaURF_sl6Ns0itOgJUWJ_M3U3tQ%3D%3D/7deafe2e1d5f01f1ae1d4eaf157ee0cec3185e25.jpg",
    intro: { ko: "맑고 섬세한 음색으로 곡의 분위기를 살리며 무대마다 또렷한 인상을 남깁니다.", en: "Her clear, delicate tone brings each song to life and leaves a distinct impression on stage.", ja: "澄んだ繊細な声で楽曲の雰囲気を引き立て、ステージごとに鮮やかな印象を残します。" }
  },
  {
    id: "bae", name: "BAE", native: "배이", realName: "Bae Jin-sol",
    birthday: "2004.12.28", date: "2004-12-28", nationality: "South Korean",
    position: "Vocalist · Performer", positionByLanguage: { ko: "보컬 · 퍼포머", en: "Vocalist · Performer", ja: "ボーカル · パフォーマー" },
    nationalityByLanguage: { ko: "대한민국", en: "South Korean", ja: "韓国" },
    mbti: "ENFP", theme: "member-theme--bae",
    image: "https://d1meds70430yck.cloudfront.net/images/2026/09/30/gAAAAABqvIenjaw8FWbXH7hodrBF2CVjaoTafP9Rj1dgtKcIKIb0uylej0S1QkjSZQbdQt5cW948hnDfbWQDFjlMUIMPS28SlyLHvBxRp2P50zMSKj3ogSLX5jD-ZR9ld4xnRMNup_evMe7YTHFWppIl5CWeU_UQcw%3D%3D/05bb1a85b99030fb1b9843ae934d58dd0175de80.jpg",
    intro: { ko: "독특한 음색과 유연한 퍼포먼스로 무대에 자유로운 에너지를 더합니다.", en: "Her distinctive voice and fluid performance bring a free-spirited energy to the stage.", ja: "個性的な声としなやかなパフォーマンスで、ステージにのびやかなエネルギーを添えます。" }
  },
  {
    id: "jiwoo", name: "JIWOO", native: "지우", realName: "Kim Ji-woo",
    birthday: "2005.04.13", date: "2005-04-13", nationality: "South Korean",
    position: "Rapper · Vocalist · Dancer", positionByLanguage: { ko: "래퍼 · 보컬 · 댄서", en: "Rapper · Vocalist · Dancer", ja: "ラッパー · ボーカル · ダンサー" },
    nationalityByLanguage: { ko: "대한민국", en: "South Korean", ja: "韓国" },
    mbti: "ESFP", theme: "member-theme--jiwoo",
    image: "https://d1meds70430yck.cloudfront.net/images/2026/09/30/gAAAAABqvIesKBOLoqZ8mUOeO5pmY4OjkgL3BkqTUYGndozgVN4-2uz2kxplqDzJ2a_F-EAyRDNG9kwuEITYIAspzUYwPmTiC6c8od6XCBuD1rtR1G-HL_rG47h80CAWtTPkGv7BhOuWqr8xxZvYXc8kX8KxlWKaQg%3D%3D/267428191821e51d6810acc7f6dd866f1cdb512d.jpg",
    intro: { ko: "힘 있는 랩과 다재다능한 퍼포먼스로 곡과 무대의 분위기를 다채롭게 이끕니다.", en: "Powerful rap and versatile performance let her shift the mood of a song and stage.", ja: "力強いラップと多彩なパフォーマンスで、楽曲やステージの雰囲気を豊かに彩ります。" }
  },
  {
    id: "kyujin", name: "KYUJIN", native: "규진", realName: "Jang Gyu-jin",
    birthday: "2006.05.26", date: "2006-05-26", nationality: "South Korean",
    position: "Vocalist · Rapper · Dancer · Maknae", positionByLanguage: { ko: "보컬 · 래퍼 · 댄서 · 막내", en: "Vocalist · Rapper · Dancer · Maknae", ja: "ボーカル · ラッパー · ダンサー · マンネ" },
    nationalityByLanguage: { ko: "대한민국", en: "South Korean", ja: "韓国" },
    mbti: "ESFJ", theme: "member-theme--kyujin",
    image: "https://d1meds70430yck.cloudfront.net/images/2026/09/30/gAAAAABqvIezVeTzuRGUniQmHxZOlgTJtzma0bP9N1Lgp2UsVJM8WibXRd5H9iJfsmImVxLfPyUEi67U-WqMpkVOrSScLWfmOW6YmNNnhdoA3xxW_M3iQlCW_M5OUZu2rQJ3ZKN7oRVprQPeLnSzBUgm5mXOpYO8Dg%3D%3D/a52c1a6f15d079d336800d28b902b34f61f886e0.jpg",
    intro: { ko: "섬세한 표현력과 탄탄한 춤선으로 무대를 채우는 에너지 넘치는 막내입니다.", en: "An energetic youngest member whose expressive detail and precise dance lines fill the stage.", ja: "繊細な表現力としなやかなダンスラインでステージを彩る、エネルギッシュな末っ子です。" }
  }
];
