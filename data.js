// 강의 공통 정보와 차시 목록.
// 새 차시를 추가하려면: 1) session_N.html 내용 파일 작성, 2) 아래 SESSIONS 배열에 항목 추가.
// index.html의 목차 카드와 각 session_N.html의 상단 네비게이션이 이 데이터로 자동 생성됩니다.

const COURSE = {
  name: "AI와 함께하는 디지털 시대의 자기 PR",
  instructor: "김유라",
  year: 2026,
};

const SESSIONS = [
  {
    id: 1,
    title: "AI로 나를 발견하고 자기 PR 스토리보드 만들기",
    subtitle: "AI로 나의 강점을 발견하고 나만의 자기 PR 영상을 만들다",
    desc: "디지털 시대 자기 PR의 변화부터 AI로 나의 강점 발견하기, 자기 PR 스토리 만들기, 영상 스토리보드 설계까지.",
    href: "session_1.html",
    anchors: [
      { href: "#flow", label: "오늘의 흐름" },
      { href: "#why", label: "왜 자기 PR인가" },
      { href: "#discover", label: "AI로 나를 발견" },
      { href: "#story", label: "PR 스토리" },
      { href: "#storyboard", label: "스토리보드" },
      { href: "#wrap", label: "마무리" },
    ],
  },
  {
    id: 2,
    title: "AI로 설계한 나, Google Flow·CapCut으로 표현하기",
    subtitle: "스토리보드 → 자기 PR 영상 완성",
    desc: "AI 영상 편집 툴 비교부터 Google Flow로 장면 생성하기, CapCut으로 자막·음성·BGM 편집해 자기 PR 영상 완성까지.",
    href: "session_2.html",
    anchors: [
      { href: "#flow", label: "오늘의 흐름" },
      { href: "#tools", label: "툴 비교" },
      { href: "#googleflow", label: "Google Flow" },
      { href: "#capcut", label: "CapCut" },
      { href: "#feedback", label: "완성·피드백" },
      { href: "#wrap", label: "마무리" },
    ],
  },
  {
    id: 3,
    navLabel: "2차시 - new버전",
    title: "AI로 만드는 나의 자기 PR 영상 (모바일 버전)",
    subtitle: "모바일 Google Flow + CapCut으로 완성하는 25~35초 자기 PR 영상",
    desc: "내 사진으로 ChatGPT AI 캐릭터 만들기부터 모바일 Google Flow로 영상 2개 제작, CapCut으로 25~35초 자기 PR 영상 완성까지 — 90~100분 모바일 실습 버전.",
    href: "session_3.html",
    anchors: [
      { href: "#flow", label: "오늘의 흐름" },
      { href: "#intro", label: "도입·1차시 연결" },
      { href: "#chatgpt", label: "AI 캐릭터" },
      { href: "#googleflow", label: "Flow 실습" },
      { href: "#capcut", label: "CapCut 실습" },
      { href: "#wrap", label: "마무리" },
    ],
  },
];
