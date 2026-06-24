/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "연동혁",
    nameEn: "Yeon Donghyeok",
    father: "연승호",
    mother: "정미애",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "박예슬",
    nameEn: "Park Yeseul",
    father: "박병우",
    mother: "최혜진",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-11-01",
    time: "11:30",
    venue: "PJ호텔 1층 뮤즈홀",
    hall: "",
    address: "서울특별시 중구 마른내로 71(인현동2가)",
    tel: "02-2280-7000",
    mapLinks: {
      kakao: "https://place.map.kakao.com/26887653",
      naver: "https://naver.me/5ne4f3BA"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "가을의 끝자락에서\n사랑으로 물든 저희의 이야기가\n새로운 장을 시작하려 합니다.\n\n소중한 분들과 그 첫페이지를 함께하고 싶습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "결혼합니다",
    content: "2026년 11월 1일, 소중한 분들을 초대합니다.\n\n축하해주시는 따뜻한 마음만 감사히 받겠습니다.\n예식장 공간이 협소하여 화환은 정중히 사양합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "연동혁", bank: "우리은행", number: "1002-445-733460" },
      { role: "아버지", name: "연승호", bank: "국민은행", number: "013-21-0626-995" },
      { role: "어머니", name: "정미애", bank: "국민은행", number: "370401-01-247164" }
    ],
   bride: [
      { role: "신부", name: "박예슬", bank: "신한은행", number: "110-409-317835" },
      { role: "아버지", name: "박병우", bank: "신한은행", number: "110-462-472161" },
      { role: "어머니", name: "최혜진", bank: "하나은행", number: "463-810663-98107" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 연동혁 ♥ 신부 박예슬 결혼합니다",
    description: "2026년 11월 1일, 소중한 분들을 초대합니다."
  }
};
