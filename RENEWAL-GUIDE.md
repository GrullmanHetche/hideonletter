# HIDEONLETTER 리뉴얼 — 적용 가이드

`npm run build` · ESLint 0건 통과를 확인한 상태의 코드입니다.

---

## 0. 가장 쉬운 적용 방법

zip 안의 파일 구조가 곧 저장소 구조입니다. **저장소 루트에 압축을 그대로 풀어 덮어쓰기** 하면 끝납니다. 그 후:

```bash
npm install        # framer-motion 설치 + FullCalendar 제거 반영
npm run dev        # 로컬 확인
```

> FullCalendar 두 패키지는 설치만 되고 쓰이지 않던 것이라 package.json에서 제거했습니다. `npm install` 한 번이면 정리됩니다.

## 1. 직접 넣어야 하는 파일 (커미션 4종)

zip에는 포함하지 않았습니다. `public/` 폴더에 이 이름 그대로 저장하세요:

| 파일 | 내용 | 쓰이는 곳 |
|---|---|---|
| `public/holdinghyuk.jpg` | 유현이 상혁 피규어를 든 흉상 | /commission 액자 |
| `public/ynm.png` | 상혁의 독백 | /commission 액자 |
| `public/leon.pdf` | 레옹 글 커미션 | /commission 원고 봉투 → 모달 뷰어 |
| `public/shnyhlove.pdf` | 외사랑/짝사랑 조각글 | /commission 원고 봉투 → 모달 뷰어 |

이 4개가 없으면 해당 카드만 이미지가 깨질 뿐 빌드는 정상입니다.

## 2. 파일 배치 지도

### 새 폴더 — `content/` (글·데이터는 전부 여기서만 수정)

| 파일 | 내용 |
|---|---|
| `content/archive.ts` | 소설 3장 전문 (기존 글 그대로 이동) |
| `content/moments.ts` | 카톡 대화 전체 (그대로 이동) |
| `content/schedule.ts` | 일정 데이터 — **다음 달 일정은 이 파일에만 추가하면 됨** |
| `content/playlist.ts` | 15트랙 + 트랙별 무드컬러 |
| `content/profile.ts` | 프로필·가방·게이지·카드 뒷면 소개글·연대기 |
| `content/glossary.ts` | 둘만의 사전 표제어 |
| `content/commissions.ts` | 커미션 전시 목록 |
| `content/exchange.ts` | 주고받은 영화/노래 장부 |

### 새 폴더 — `components/`

| 파일 | 역할 |
|---|---|
| `components/SiteNav.tsx` / `SiteFooter.tsx` | 전 페이지 공통 내비·푸터 (페이지마다 달랐던 문제 해결) |
| `components/Modal.tsx` | ESC·포커스트랩·스크롤잠금 갖춘 공용 모달 |
| `components/CornerFrame.tsx` / `WaxSeal.tsx` / `RuneRing.tsx` | 시그니처 장식 (왁스 인장 = 마법진 재해석) |
| `components/home/HomeClient.tsx` | 봉투 개봉 인트로 + 히어로 + 비밀 메시지 |
| `components/archive/ArchiveBook.tsx` | 책 메타포 (모바일은 한 페이지) |
| `components/moments/LockScreen.tsx` | 잠금화면 아카이브 (비밀번호 없음) |
| `components/profile/ProfileCards.tsx` | 플립 선수 카드 + 드래그 가방 + 연대기 |
| `components/playlist/Turntable.tsx` | 턴테이블 + 무드컬러 + 스펙트럼 |
| `components/schedule/ScheduleCalendar.tsx` | 월 내비·D-day·W/L·모바일 리스트·.ics |
| `components/commission/CommissionGallery.tsx` | 수신 전시실 (액자 + 원고 봉투) |

### 교체되는 기존 파일

`app/globals.css`, `app/layout.tsx`, 그리고 각 `app/*/page.tsx` 전부. 페이지 파일은 이제 metadata만 가진 얇은 서버 컴포넌트이고, 화면 로직은 components/로 이동했습니다.

### 새 라우트

`app/glossary/page.tsx` · `app/commission/page.tsx` · `app/exchange/page.tsx` · `app/api/unlock/route.ts`

## 3. 비밀번호(Private Message) 변경법

비밀번호와 비밀 메시지가 더 이상 브라우저 번들에 노출되지 않습니다. 변경하려면 `app/api/unlock/route.ts`에서:

```bash
node -e "console.log(require('crypto').createHash('sha256').update('새비밀번호').digest('hex'))"
```

출력된 해시로 `PASS_HASH`를 교체하고, `SECRET_MESSAGE`도 같은 파일에서 수정합니다.

## 4. 반영된 수정 사항 체크리스트

- 폰트 미적용 보일러플레이트 → MaruBuri(문학)/Pretendard(UI)/Archivo(영문) 3단 체계
- 레드/배경 hex 혼용 → CSS 변수 단일화 (`--t1-red`, `--ink` 등)
- 페이지마다 다른 내비, Archive/Moments 누락 → 공통 SiteNav
- 8~9px 텍스트, 낮은 대비, div onClick → 최소 10px, 대비 상향, 전부 button/링크 + 포커스 스타일
- 미설치 플러그인의 죽은 animate-in 클래스 → framer-motion + prefers-reduced-motion 전면 존중
- 가방 모달 절대좌표 모바일 파손 → % 환산 + aspect-ratio 반응형, 마법진 820px 고정 → vw 제한
- 깨진 Apple Music iframe → 제거, 트랙별 YouTube 링크
- 전 페이지 "use client" → 서버 페이지 + 클라이언트 섬, 페이지별 metadata/OG
- 데이터 하드코딩 → content/ 분리
- 비밀번호 평문 노출 → 서버 해시 검증 API
- 스케줄 2026-06 하드코딩 → 항상 이번 달 기본 + `?m=YYYY-MM` URL 공유 가능

## 5. 배포

Vercel은 기존과 동일하게 push만 하면 됩니다. 환경변수 추가 없음.
