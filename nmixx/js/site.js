(() => {
  const header = document.querySelector("#site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector("#mobile-nav");
  let scrollFrame = 0;

  function updateScrollState() {
    const scrollY = window.scrollY;
    header?.classList.toggle("is-visible", scrollY > 100);
    document.documentElement.style.setProperty("--hero-offset", `${-Math.min(scrollY * 0.1, 80)}px`);
    scrollFrame = 0;
  }

  window.addEventListener("scroll", () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScrollState);
  }, { passive: true });
  updateScrollState();

  menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.querySelector(".menu-label").textContent = isOpen ? "Menu" : "Close";
    mobileNav.classList.toggle("is-open", !isOpen);
    mobileNav.inert = isOpen;
  });

  mobileNav?.addEventListener("click", event => {
    if (!event.target.closest("a")) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.querySelector(".menu-label").textContent = "Menu";
    mobileNav.classList.remove("is-open");
    mobileNav.inert = true;
  });

  const memberProfiles = [
    { name: "LILY", native: "릴리", birthday: "2002.10.17", date: "2002-10-17", nationality: "Korean-Australian", theme: "member-theme--lily", image: "https://d1meds70430yck.cloudfront.net/images/2026/09/30/gAAAAABqvIeXqddbfvSoG50ZqBBJu84pTSoM2ujSBKNfVXCbJpQa1Ip3KAnRwAHRNyABldLEQdpBncDLPQH21VVjtwwZZ7HBP79kBayVY1C6tO9GMSvXE7p22eyqiHouS1Ae8-oR4WWJKhJ96erf85F8vFxj3LeA3A%3D%3D/d5caa90fa546cc03b271c3b1a1df7765ea4291bf.jpg" },
    { name: "HAEWON", native: "해원", birthday: "2003.02.25", date: "2003-02-25", nationality: "South Korean", theme: "member-theme--haewon", image: "https://d1meds70430yck.cloudfront.net/images/2026/09/30/gAAAAABqvIecCviRN3XbRXUibe0YthsQrd3ZSfxk-tTgkaXbZ6gDYrxZ503sCFvLPAAVfz4gJx_SwFu_Oe7tXXNe5F8lVwcmZ83-ehkSmR26lOelV6xR9rh8dd2Zf2XOkqQ3IQyCh-Nr4c-oZr5cSWimyXDKiTlE_Q%3D%3D/46998f44066e190edb70443b7c6764e1ab0c741a.jpg" },
    { name: "SULLYOON", native: "설윤", birthday: "2004.01.26", date: "2004-01-26", nationality: "South Korean", theme: "member-theme--sullyoon", image: "https://d1meds70430yck.cloudfront.net/images/2026/09/30/gAAAAABqvIeiH4ZLgQaAWTddvDoLFLLDYLdsn39jsy5bdZdkMmAtmS1GEAx899Aoel397wiT4Q7pfyXApOG7SGckZH9H7cbiA9cdycT90p0G0zR7BlgoTpwMCqtWDtI9KfhtW9ilaURF_sl6Ns0itOgJUWJ_M3U3tQ%3D%3D/7deafe2e1d5f01f1ae1d4eaf157ee0cec3185e25.jpg" },
    { name: "BAE", native: "배이", birthday: "2004.12.28", date: "2004-12-28", nationality: "South Korean", theme: "member-theme--bae", image: "https://d1meds70430yck.cloudfront.net/images/2026/09/30/gAAAAABqvIenjaw8FWbXH7hodrBF2CVjaoTafP9Rj1dgtKcIKIb0uylej0S1QkjSZQbdQt5cW948hnDfbWQDFjlMUIMPS28SlyLHvBxRp2P50zMSKj3ogSLX5jD-ZR9ld4xnRMNup_evMe7YTHFWppIl5CWeU_UQcw%3D%3D/05bb1a85b99030fb1b9843ae934d58dd0175de80.jpg" },
    { name: "JIWOO", native: "지우", birthday: "2005.04.13", date: "2005-04-13", nationality: "South Korean", theme: "member-theme--jiwoo", image: "https://d1meds70430yck.cloudfront.net/images/2026/09/30/gAAAAABqvIesKBOLoqZ8mUOeO5pmY4OjkgL3BkqTUYGndozgVN4-2uz2kxplqDzJ2a_F-EAyRDNG9kwuEITYIAspzUYwPmTiC6c8od6XCBuD1rtR1G-HL_rG47h80CAWtTPkGv7BhOuWqr8xxZvYXc8kX8KxlWKaQg%3D%3D/267428191821e51d6810acc7f6dd866f1cdb512d.jpg" },
    { name: "KYUJIN", native: "규진", birthday: "2006.05.26", date: "2006-05-26", nationality: "South Korean", theme: "member-theme--kyujin", image: "https://d1meds70430yck.cloudfront.net/images/2026/09/30/gAAAAABqvIezVeTzuRGUniQmHxZOlgTJtzma0bP9N1Lgp2UsVJM8WibXRd5H9iJfsmImVxLfPyUEi67U-WqMpkVOrSScLWfmOW6YmNNnhdoA3xxW_M3iQlCW_M5OUZu2rQJ3ZKN7oRVprQPeLnSzBUgm5mXOpYO8Dg%3D%3D/a52c1a6f15d079d336800d28b902b34f61f886e0.jpg" }
  ];
  const memberRealNames = ["Lily Jin Morrow", "Oh Hae-won", "Seol Yoon-a", "Bae Jin-sol", "Kim Ji-woo", "Jang Gyu-jin"];
  const memberPositions = [
    "Vocalist · Korean-English",
    "Leader · Vocalist",
    "Vocalist",
    "Vocalist · Performer",
    "Rapper · Vocalist · Dancer",
    "Vocalist · Rapper · Dancer · Maknae"
  ];
  const memberIntros = [
    "한국어와 영어를 오가며 곡에 힘 있는 보컬 컬러를 더합니다.",
    "리더로서 팀의 중심을 잡고 안정적인 보컬로 무대를 이끕니다.",
    "맑은 음색과 섬세한 표현으로 곡의 감정을 채웁니다.",
    "낮은 음색과 리듬감 있는 퍼포먼스로 무대에 개성을 더합니다.",
    "랩과 춤, 보컬을 넘나드는 에너지로 퍼포먼스를 넓힙니다.",
    "보컬·랩·댄스를 고루 소화하는 NMIXX의 막내입니다."
  ];
  const memberButtons = [...document.querySelectorAll(".member-tab")];
  const memberImage = document.querySelector("#member-image");
  const memberName = document.querySelector("#member-name");
  const memberNative = document.querySelector("#member-native");
  const memberRealName = document.querySelector("#member-real-name");
  const memberPosition = document.querySelector("#member-position");
  const memberIntro = document.querySelector("#member-intro");
  const memberIndex = document.querySelector("#member-index");
  const memberBirthday = document.querySelector("#member-birthday");
  const memberNationality = document.querySelector("#member-nationality");

  function showMember(button) {
    const index = Number(button.dataset.member);
    const profile = memberProfiles[index];
    memberButtons.forEach((item, itemIndex) => item.setAttribute("aria-pressed", String(itemIndex === index)));
    document.querySelector("#members").classList.remove(...memberProfiles.map(item => item.theme));
    document.querySelector("#members").classList.add(profile.theme);
    memberImage.src = profile.image;
    memberImage.alt = `${profile.name} 프로필 사진`;
    memberName.textContent = profile.name;
    memberNative.textContent = profile.native;
    memberRealName.textContent = memberRealNames[index];
    memberPosition.textContent = memberPositions[index];
    memberIntro.textContent = memberIntros[index];
    memberIndex.textContent = `NMIXX MEMBER ${String(index + 1).padStart(2, "0")}`;
    memberBirthday.dateTime = profile.date;
    memberBirthday.textContent = profile.birthday;
    memberNationality.textContent = profile.nationality;
  }

  memberButtons.forEach(button => button.addEventListener("click", () => showMember(button)));
  if (memberButtons[0]) showMember(memberButtons[0]);

  let galleryItems = [...document.querySelectorAll(".gallery-item")];
  const galleryGrid = document.querySelector("#gallery-grid");
  const galleryFilters = [...document.querySelectorAll(".gallery-filter")];
  const galleryCount = document.querySelector("#gallery-count");
  const galleryDialog = document.querySelector("#gallery-lightbox");
  const lightboxImage = document.querySelector("#lightbox-image");
  const lightboxCaption = document.querySelector("#lightbox-caption");

  galleryFilters.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.galleryFilter;
      const memberFilter = filter.startsWith("member:") ? filter.slice("member:".length) : null;
      galleryFilters.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
      let visibleCount = 0;
      galleryItems.forEach(item => {
        const members = item.dataset.members?.split(",") ?? [];
        const isVisible = filter === "all" || (memberFilter
          ? item.dataset.category === "member" && members.includes(memberFilter)
          : item.dataset.category === filter);
        item.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
      });
      galleryCount.textContent = `${String(visibleCount).padStart(2, "0")} MOMENTS`;
    });
  });

  galleryGrid?.addEventListener("click", event => {
    const button = event.target.closest(".gallery-open");
    if (!button) return;
    const image = button.querySelector("img");
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = button.dataset.caption;
    galleryDialog.showModal();
  });

  document.querySelector("[data-lightbox-close]")?.addEventListener("click", () => galleryDialog.close());
  galleryDialog?.addEventListener("click", event => {
    if (event.target === galleryDialog) galleryDialog.close();
  });

  const albums = [
    {
      title: "Heavy Serenade",
      cover: "https://d1meds70430yck.cloudfront.net/artists/nmixx/albums/1778468916611-2fcfcbe5.jpg",
      release: "2026.05.11",
      description: "여섯 개의 심장 박동이 하나의 리듬으로 이어지는 첫 정규 앨범.",
      artTitle: "HEAVY SERENADE",
      artClass: "album-art--tone-0",
      label: "NMIXX / 1ST ALBUM",
      tracks: ["Crescendo", "Heavy Serenade", "IDESERVEIT", "Different Girl", "Superior", "LOUD"],
      titleTrack: 1
    },
    {
      title: "Blue Valentine",
      cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a7/5d/54/a75d54db-b997-d410-b6dd-25f7e766392a/8809928955148_Cover.jpg/1200x1200bb.webp",
      release: "2025.10.13",
      description: "엇갈리는 감정과 다시 타오르는 마음을 담은 정규 앨범.",
      artTitle: "BLUE VALENTINE",
      artClass: "album-art--tone-1",
      label: "NMIXX / 1ST ALBUM",
      tracks: ["Blue Valentine", "SPINNIN' ON IT", "Phoenix", "Reality Hurts", "RICO", "Game Face", "PODIUM", "Crush On You", "ADORE U", "Shape of Love", "O.O Part 1 (Baila)", "O.O Part 2 (Superhero)"],
      titleTrack: 0
    },
    {
      title: "Blue Valentine (MIXX Ver.)",
      cover: "https://d1meds70430yck.cloudfront.net/artist/nmixx/c3402050464a4beca7e90e9ccf08c998-NM_1F_online%20cover_%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5%E1%84%87%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A9%E1%86%A8%20%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1.jpg",
      release: "2025.10.17",
      description: "Blue Valentine의 보컬 버전과 추가 트랙을 담은 MIXX Ver.",
      artTitle: "BLUE VALENTINE\nMIXX VER.",
      artClass: "album-art--tone-2",
      label: "NMIXX / SINGLE",
      tracks: ["Blue Valentine", "Blue Valentine (English Ver.)", "Blue Valentine (A Cappella Ver.)", "Blue Valentine (Sped Up Ver.)", "Blue Valentine (Inst.)"],
      titleTrack: 1
    },
    {
      title: "Fe3O4: FORWARD",
      cover: "https://d1meds70430yck.cloudfront.net/artist/nmixx/b48f626ed6ff40f9a41bf4f745e48e6c-NM_4thEP_online-cover_300.jpg",
      release: "2025.03.17",
      description: "더 많은 이들과 MIXXTOPIA를 향해 나아가는 Fe3O4 시리즈의 마지막 이야기.",
      artTitle: "Fe3O4:\nFORWARD",
      artClass: "album-art--tone-3",
      label: "NMIXX / 4TH EP",
      tracks: ["High Horse", "KNOW ABOUT ME", "Slingshot (<★)", "Golden Recipe", "Papillon", "Ocean"],
      titleTrack: 1
    },
    {
      title: "High Horse",
      cover: "https://d1meds70430yck.cloudfront.net/artist/nmixx/f2c108f7ea45401b8faf0ce70dd9c551-HighHorse%E1%84%8F%E1%85%A5%E1%84%87%E1%85%A5.jpeg",
      release: "2025.03.04",
      description: "브레이크비트와 재즈, 팝을 섞어낸 싱글.",
      artTitle: "HIGH HORSE",
      artClass: "album-art--tone-4",
      label: "NMIXX / DIGITAL SINGLE",
      tracks: ["High Horse"],
      titleTrack: 0
    },
    {
      title: "Fe3O4: STICK OUT",
      cover: "https://d1meds70430yck.cloudfront.net/artist/nmixx/73dd6538f1214111bfcdc4ee0b3b16fe-NM_3rdEP_online-cover.jpg",
      release: "2024.08.19",
      description: "각자의 뾰족한 빛을 숨기지 않고 세상에 드러내는 Fe3O4 시리즈의 두 번째 이야기.",
      artTitle: "Fe3O4:\nSTICK OUT",
      artClass: "album-art--tone-5",
      label: "NMIXX / 3RD EP",
      tracks: ["See that?", "SICKUHH (Feat. Kid Milli)", "Red light sign, but we go", "BEAT BEAT", "Moving On", "Love Is Lonely"],
      titleTrack: 0
    },
    {
      title: "Fe3O4: BREAK",
      cover: "https://d1meds70430yck.cloudfront.net/artist/nmixx/2ac38f40571643d48d1d97fb891d51be-%E1%84%8B%E1%85%A2%E1%86%AF%E1%84%87%E1%85%A5%E1%86%B7%E1%84%8F%E1%85%A5%E1%84%87%E1%85%A5%E1%84%80%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A9%E1%86%B7.jpg",
      release: "2024.01.15",
      description: "Fe3O4 시리즈의 시작을 알리는 미니 앨범.",
      artTitle: "Fe3O4:\nBREAK",
      artClass: "album-art--tone-0",
      label: "NMIXX / 2ND EP",
      tracks: ["DASH", "Soñar (Breaker)", "Run For Roses", "BOOM", "Passionfruit", "XOXO", "Break The Wall"],
      titleTrack: 0
    },
    {
      title: "Soñar (Breaker)",
      cover: "https://d1meds70430yck.cloudfront.net/artist/nmixx/6537ad2e492e48168436d6a522eaedd0-KakaoTalk_Photo_2023-12-04-15-27-42.jpg",
      release: "2023.12.04",
      description: "라틴 힙합과 UK Garage를 믹스한 선공개 싱글.",
      artTitle: "SOÑAR\n(BREAKER)",
      artClass: "album-art--tone-1",
      label: "NMIXX / PRE-RELEASE",
      tracks: ["Soñar (Breaker)"],
      titleTrack: 0
    },
    {
      title: "A Midsummer NMIXX's Dream",
      cover: "https://d1meds70430yck.cloudfront.net/artist/nmixx/ff1809e56fdf40e082d90b28c68a0c55-NMIXX_S03_online-cover%281000%29.jpg",
      release: "2023.07.11",
      description: "한여름 밤의 숲에서 펼쳐지는 특별한 파티를 담은 싱글 앨범.",
      artTitle: "A MIDSUMMER\nNMIXX'S DREAM",
      artClass: "album-art--tone-2",
      label: "NMIXX / 3RD SINGLE",
      tracks: ["Party O'Clock", "Roller Coaster", "Party O'Clock (Inst.)", "Roller Coaster (Inst.)"],
      titleTrack: 0
    },
    {
      title: "Roller Coaster",
      cover: "https://d1meds70430yck.cloudfront.net/artist/nmixx/3b74688de6ec4e47ae18a938f52e8550-Roller%20Coaster_online%20cover%281000%29.jpg",
      release: "2023.07.03",
      description: "처음 느껴보는 사랑의 감정을 롤러코스터에 빗댄 선공개 싱글.",
      artTitle: "ROLLER\nCOASTER",
      artClass: "album-art--tone-3",
      label: "NMIXX / PRE-RELEASE",
      tracks: ["Roller Coaster"],
      titleTrack: 0
    },
    {
      title: "expérgo",
      cover: "https://d1meds70430yck.cloudfront.net/artist/nmixx/4f0503c9ed4e4e76828b41fcca6cda1e-%E1%84%8B%E1%85%A2%E1%86%AF%E1%84%87%E1%85%A5%E1%86%B7%20%E1%84%8F%E1%85%A5%E1%84%87%E1%85%A5%281000%29.jpg",
      release: "2023.03.20",
      description: "지혜·사랑·용기를 전하며 서로 연결되는 이야기를 담은 미니 앨범.",
      artTitle: "expérgo",
      artClass: "album-art--tone-4",
      label: "NMIXX / 1ST EP",
      tracks: ["Young, Dumb, Stupid", "Love Me Like This", "PAXXWORD", "Just Did It", "My Gosh", "HOME"],
      titleTrack: 1
    },
    {
      title: "Young, Dumb, Stupid",
      cover: "https://d1meds70430yck.cloudfront.net/artist/nmixx/db664b6211154d2fa4314485a0ccaa66-ef34eaa899f8438f87d0706b26bd9297-YDS_online%20cover%28300dpi%29%281000%29.jpg",
      release: "2023.03.13",
      description: "힙합과 동요를 넘나드는 MIXX POP 선공개 싱글.",
      artTitle: "YOUNG, DUMB,\nSTUPID",
      artClass: "album-art--tone-5",
      label: "NMIXX / PRE-RELEASE",
      tracks: ["Young, Dumb, Stupid"],
      titleTrack: 0
    },
    {
      title: "Funky Glitter Christmas",
      cover: "https://d1meds70430yck.cloudfront.net/artist/nmixx/7a4df50ac29b44bb93c1d92eba1f30b7-%E1%84%8B%E1%85%A2%E1%86%AF%E1%84%87%E1%85%A5%E1%86%B7%E1%84%8B%E1%85%A1%E1%84%90%E1%85%B3%281000%29.jpg",
      release: "2022.11.23",
      description: "NSWER와 첫 크리스마스를 기념하는 인터믹션 싱글.",
      artTitle: "FUNKY GLITTER\nCHRISTMAS",
      artClass: "album-art--tone-0",
      label: "NMIXX / INTERMIXXION SINGLE",
      tracks: ["Funky Glitter Christmas"],
      titleTrack: 0
    },
    {
      title: "ENTWURF",
      cover: "https://d1meds70430yck.cloudfront.net/artist/nmixx/f0171a9b614f4e4b9253da3923a741ea-NMIXX_ENTWURF_onlinecover.jpg",
      release: "2022.09.19",
      description: "주어진 운명을 받아들이거나 맞서는 선택을 그린 싱글 앨범.",
      artTitle: "ENTWURF",
      artClass: "album-art--tone-1",
      label: "NMIXX / 2ND SINGLE",
      tracks: ["DICE", "COOL (Your rainbow)", "DICE (Inst.)", "COOL (Your rainbow) (Inst.)"],
      titleTrack: 0
    },
    {
      title: "개비의 매직하우스 OST x NMIXX",
      cover: "https://d1meds70430yck.cloudfront.net/artist/nmixx/f552aeb609584c6990bf150e3b2471cd-%5B%E1%84%8F%E1%85%A5%E1%84%87%E1%85%A5%5D%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%B5%E1%84%8B%E1%85%B4%20%E1%84%86%E1%85%A2%E1%84%8C%E1%85%B5%E1%86%A8%E1%84%92%E1%85%A1%E1%84%8B%E1%85%AE%E1%84%89%E1%85%B3%20OST%20x%20NMIXX%28700%29.jpg",
      release: "2022.05.02",
      description: "애니메이션 주제가와 테마송을 NMIXX의 목소리로 담은 OST.",
      artTitle: "GABBY'S\nMAGIC HOUSE",
      artClass: "album-art--tone-2",
      label: "NMIXX / OST",
      tracks: ["안녕 개비! (Sung by NMIXX)", "스프링클 파티 (Sung by NMIXX)", "안녕 개비! (Sung by NMIXX) (Inst.)", "스프링클 파티 (Sung by NMIXX) (Inst.)"],
      titleTrack: 0
    },
    {
      title: "AD MARE",
      cover: "https://d1meds70430yck.cloudfront.net/artist/nmixx/4f379779f3d44d599f931cc3daac3e58-%E1%84%8B%E1%85%A9%E1%86%AB%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%8F%E1%85%A5%E1%84%87%E1%85%A5_%E1%84%80%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A9%E1%86%B7.jpg",
      release: "2022.02.22",
      description: "NMIXX의 시작과 새로운 세계로의 첫 항해를 담은 데뷔 싱글.",
      artTitle: "AD MARE",
      artClass: "album-art--tone-3",
      label: "NMIXX / DEBUT SINGLE",
      tracks: ["占 (TANK)", "O.O", "占 (TANK) (Inst.)", "O.O (Inst.)"],
      titleTrack: 1
    }
  ];
  const albumPicker = document.querySelector("#album-picker");
  const albumChoices = [];
  const albumArt = document.querySelector("#album-art");
  const albumCoverImage = document.querySelector("#album-cover-image");
  const albumArtTitle = document.querySelector("#album-art-title");
  const albumArtOverline = document.querySelector("#album-art-overline");
  const albumRelease = document.querySelector("#album-release");
  const albumTitle = document.querySelector("#album-title");
  const albumDescription = document.querySelector("#album-description");
  const trackList = document.querySelector("#track-list");

  function spotifySearch(query) {
    return `https://open.spotify.com/search/${encodeURIComponent(query)}`;
  }

  albums.forEach((album, index) => {
    if (albumPicker) {
      const option = document.createElement("article");
      option.className = "album-option";
      option.setAttribute("role", "listitem");

      const cover = document.createElement("div");
      cover.className = `album-option-cover ${album.artClass}`;
      const thumbnail = document.createElement("img");
      thumbnail.src = album.cover;
      thumbnail.alt = "";
      thumbnail.loading = "lazy";
      thumbnail.addEventListener("error", () => {
        thumbnail.hidden = true;
        cover.classList.add("has-fallback");
      }, { once: true });
      cover.append(thumbnail);

      const copy = document.createElement("div");
      copy.className = "album-option-copy";
      const year = document.createElement("span");
      year.className = "album-option-year";
      year.textContent = `${album.release.slice(0, 4)} / ${album.label.replace("NMIXX / ", "")}`;
      const name = document.createElement("button");
      name.className = "album-option-name";
      name.type = "button";
      name.dataset.album = String(index);
      name.textContent = album.title;
      const select = document.createElement("button");
      select.className = "album-select";
      select.type = "button";
      select.dataset.album = String(index);
      select.setAttribute("aria-pressed", "false");
      select.textContent = `VIEW TRACKS / ${String(album.tracks.length).padStart(2, "0")}`;
      copy.append(year, name, select);
      option.append(cover, copy);
      albumPicker.append(option);
      albumChoices.push(name, select);
      option.addEventListener("click", event => {
        if (event.target.closest("a")) return;
        showAlbum(select);
      });
    }

    if (galleryGrid) {
      const galleryItem = document.createElement("figure");
      galleryItem.className = "gallery-item gallery-item--album";
      galleryItem.dataset.category = "album";
      const galleryButton = document.createElement("button");
      galleryButton.className = "gallery-open";
      galleryButton.type = "button";
      galleryButton.dataset.caption = `${album.title} / Album art`;
      galleryButton.setAttribute("aria-label", `${album.title} 앨범 커버 크게 보기`);
      const galleryImage = document.createElement("img");
      galleryImage.src = album.cover;
      galleryImage.alt = `${album.title} 앨범 커버`;
      galleryImage.loading = "lazy";
      galleryImage.addEventListener("error", () => {
        galleryImage.hidden = true;
        galleryButton.classList.add("has-image-fallback");
      }, { once: true });
      const mark = document.createElement("span");
      mark.className = "gallery-open-mark";
      mark.setAttribute("aria-hidden", "true");
      mark.textContent = "↗";
      galleryButton.append(galleryImage, mark);
      const caption = document.createElement("figcaption");
      const kind = document.createElement("span");
      kind.textContent = `ALBUM ART / ${String(index + 1).padStart(2, "0")}`;
      const title = document.createElement("strong");
      title.textContent = album.title;
      caption.append(kind, title);
      galleryItem.append(galleryButton, caption);
      galleryGrid.append(galleryItem);
    }
  });
  galleryItems = [...document.querySelectorAll(".gallery-item")];
  const memberFilterNames = ["lily", "haewon", "sullyoon", "bae", "jiwoo", "kyujin"];
  galleryItems.filter(item => item.dataset.category === "member").forEach(item => {
    const labels = `${item.querySelector("img")?.alt ?? ""} ${item.querySelector("figcaption strong")?.textContent ?? ""}`.toLowerCase();
    item.dataset.members = memberFilterNames.filter(name => labels.includes(name)).join(",");
  });
  if (galleryCount) galleryCount.textContent = `${String(galleryItems.length).padStart(2, "0")} MOMENTS`;
  const allGalleryCount = document.querySelector('[data-gallery-filter="all"] span');
  if (allGalleryCount) allGalleryCount.textContent = String(galleryItems.length).padStart(2, "0");

  function showAlbum(button) {
    const index = Number(button.dataset.album);
    const album = albums[index];
    albumChoices.forEach(item => {
      const itemIndex = Number(item.dataset.album);
      const isActive = itemIndex === index;
      item.setAttribute("aria-pressed", String(isActive));
      item.closest(".album-option").classList.toggle("is-active", isActive);
    });
    albumArt.className = `album-art ${album.artClass}`;
    albumArt.setAttribute("aria-label", `${album.title} 앨범 아트`);
    albumCoverImage.hidden = false;
    albumCoverImage.src = album.cover;
    albumCoverImage.alt = `${album.title} 앨범 커버`;
    albumCoverImage.onerror = () => {
      albumCoverImage.hidden = true;
      albumArt.classList.add("has-fallback-cover");
    };
    albumCoverImage.onload = () => albumArt.classList.remove("has-fallback-cover");
    albumArtTitle.textContent = album.artTitle;
    albumArtOverline.textContent = album.label;
    albumRelease.textContent = `RELEASE / ${album.release}`;
    albumTitle.textContent = album.title;
    albumTitle.href = spotifySearch(`NMIXX ${album.title}`);
    albumDescription.textContent = album.description;
    trackList.replaceChildren(...album.tracks.map((track, trackIndex) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = spotifySearch(`NMIXX ${album.title} ${track}`);
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = track;
      item.append(link);
      if (trackIndex === album.titleTrack) item.classList.add("is-title-track");
      return item;
    }));
  }

  if (albumChoices[0]) showAlbum(albumChoices[0]);

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));
})();
