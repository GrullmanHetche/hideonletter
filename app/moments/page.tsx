"use client";
import Link from "next/link";

const dialogues = [
  {
    date: "2026.04.11",
    messages: [
      { side: "right", sender: "현", text: "(사진) 펭... 이커." },
      { side: "left", sender: "혁", text: "귀엽네요." },
      { side: "left", sender: "혁", text: "유현 씨도 동물을 하나 정하면 좋을 것 같은데요." },
      { side: "left", sender: "혁", text: "그럼 제가 부를 수 있을 것 같습니다." },
      { side: "left", sender: "혁", text: "생각할 수도 있고요." },
      { side: "right", sender: "현", text: "원숭이? 어떠신가요." },
      { side: "left", sender: "혁", text: "이유가 있나요? 특이한데요." },
      { side: "right", sender: "현", text: "별다른 이유는 없구... 원숭이 띠예요." },
      { side: "left", sender: "혁", text: "아아." },
      { side: "right", sender: "현", text: "아니면 너구리." },
      { side: "left", sender: "혁", text: "그럼 전 쥐로 했어도 됐네요." },
      { side: "left", sender: "혁", text: "너구리는 닮아서인가요?" },
      { side: "right", sender: "현", text: "고등학교 때 별명이 너구리였습니다. 너굴현. ₍ᐢɞ̴̶̷.̮ɞ̴̶̷ᐢ₎" },
      { side: "left", sender: "혁", text: "귀여우니까 너구리로 하죠." },
      { side: "right", sender: "현", text: "근데 이커 씨… 이커 씨? 티원 페 씨. 암튼 이커 씨는 고양이 아닌가요." },
      { side: "left", sender: "혁", text: "그냥 상혁 씨라고 해도 되는데요." },
    ],
  },
  {
    date: "2026.04.11",
    messages: [
      { side: "left", sender: "혁", text: "우리혁이라는 말이 제일 좋습니다." },
      { side: "right", sender: "현", text: "마이혁. ₍ᐢɞ̴̶̷.̮ɞ̴̶̷ᐢ₎." },
      { side: "right", sender: "현", text: "저는 사석에서 마이혁이라는 단어를 꽤 즐겨 쓰는 편인데요. 어느 날 친구가 그럼 경기 지면 유어혁이냐고 물은 적이 있습니다." },
      { side: "right", sender: "현", text: "그래서… 너무 큰 실수를 했다면 솔직히 한 20분 정도는 유어혁으로 부른다고 대답해 줬습니다…" },
      { side: "left", sender: "혁", text: "아......" },
      { side: "left", sender: "혁", text: "유어혁......" },
      { side: "left", sender: "혁", text: "조금 슬픈 단어네요." },
      { side: "right", sender: "현", text: "......" },
      { side: "right", sender: "현", text: "그래도 대부분의 시간은 마이혁이라고 부릅니다… 허락은 안 받았지만요." },
      { side: "left", sender: "혁", text: "괜찮습니다. 마이혁도 꽤 자주 나와요." },
      { side: "right", sender: "현", text: "흠. 그러면 저는 NVRAM혁이라고 부르겠습니다." },
      { side: "left", sender: "혁", text: "...무슨 의미인가요?" },
      { side: "right", sender: "현", text: "비밀입니다." },
      { side: "left", sender: "혁", text: "뭔가 컴퓨터에서 엄청 중요한 것 같습니다." },
      { side: "right", sender: "현", text: "NVRAM은 비휘발성 메모리인데 속도도 빠른 친구예요." },
      { side: "left", sender: "혁", text: "모스부호인가요?" },
      { side: "right", sender: "현", text: "음..." },
      { side: "right", sender: "현", text: "보통 사람들은 머릿속에서 금방 잊히는 일반 램 같은 존재지만, 이커 씨는 엔브이램처럼 제가 잠시 셧다운 되더라도 다시 눈을 떴을 때 기억나는 존재라는 뜻이에요." },
      { side: "right", sender: "현", text: "컴퓨터의 날짜, 시간, 부팅 순서를 정하는 데가 엔브이램… 이거든요. 그런데 막상 말하고 보니까 그게 뭔데, **아 << 이거 같네." },
      { side: "left", sender: "혁", text: "아, 이해했습니다." },
      { side: "left", sender: "혁", text: "감사합니다." },
      { side: "left", sender: "혁", text: "좋은데요. 그런 존재라면......되고 싶습니다." },
      { side: "right", sender: "현", text: "조금 부끄럽네요. 숨겠습니다." },
    ],
  },
  {
    date: "2026.04.12",
    messages: [
      { side: "right", sender: "현", text: "(사진) 예상치 못하게 꽃놀이도 했습니다. 그런데 너무 오르막이라 올라가다 눈물이 났어요." },
      { side: "left", sender: "혁", text: "예뻐요." },
      { side: "left", sender: "혁", text: "벚꽃을 저렇게 담고 있는 것도 좋네요." },
      { side: "left", sender: "혁", text: "카메라가 아니라 현 씨가 들고 있는 게...네." },
      { side: "right", sender: "현", text: "헤헤." },
      { side: "right", sender: "현", text: "저 운모도 봤어요." },
      { side: "left", sender: "혁", text: "진짜요?" },
      { side: "left", sender: "혁", text: "어쩌다가?" },
      { side: "right", sender: "현", text: "박물관에 있던데요?" },
      { side: "right", sender: "현", text: "사진도 찍어 왔어요. 보실래요?" },
      { side: "left", sender: "혁", text: "네." },
      { side: "left", sender: "혁", text: "강화도라는 이야기 못 들었는데, 이상하다." },
      { side: "right", sender: "현", text: "(사진) 운모(real)" },
      { side: "left", sender: "혁", text: "아." },
      { side: "left", sender: "혁", text: "！Σ(×_×;)！" },
      { side: "right", sender: "현", text: "(ᵔe.eᵔ)" },
      { side: "left", sender: "혁", text: "속았네요." },
      { side: "right", sender: "현", text: "이건 눈이 빠진 건가요?" },
      { side: "left", sender: "혁", text: "네." },
    ],
  },
  {
    date: "2026.04.15",
    messages: [
      { side: "left", sender: "혁", text: "책......" },
      { side: "left", sender: "혁", text: "가끔요." },
      { side: "right", sender: "현", text: "흠." },
      { side: "left", sender: "혁", text: "정말 눈을 돌리고 싶을 때." },
      { side: "right", sender: "현", text: "눈을 돌리고 싶을 때... 그렇구나. 상혁 씨에게 책은 그런 의미군요." },
      { side: "right", sender: "현", text: "흠. 책이 무겁지는 않으세요? 아무래도 읽으시는 책은 부피가 조금 있을 것 같아서요." },
      { side: "left", sender: "혁", text: "그래서 들고 다니기보다는 이북을 선호하기도 합니다." },
      { side: "left", sender: "혁", text: "근데 스크린은 또 오래 보면 집중이 잘 안 되더군요." },
      { side: "left", sender: "혁", text: "역시 책은 아날로그가 좋은 것 같기도 하지만..." },
      { side: "left", sender: "혁", text: "어쩔 수 없죠." },
      { side: "right", sender: "현", text: "(링크) 별거 아니지만 요긴하게 쓰실 것 같아서 준비했어요. 화이트랑 블랙 중에 고민을 엄청 했는데 막상 구매를 누르니까 화이트는 품절이더라고요. (〃∇〃) >" },
      { side: "right", sender: "현", text: "(링크) 이건 넣고 다니실 파우치예요. 뭔가 안 어울리는 것 같기도 하지만... 그러게 누가 탄생화가 딸기인 날에 태어나라고 했나 귀엽게" },
      { side: "right", sender: "현", text: "정말 눈을 돌리고 싶을 때 제 생각도 가끔 해 주세요. 저는 그걸로 충분합니다." },
      { side: "left", sender: "혁", text: "쓸 때마다 생각나겠네요." },
      { side: "left", sender: "혁", text: "감사합니다. 오면 바로 써볼게요." },
      { side: "right", sender: "현", text: "헤헤. 괜찮으신 것 같다면 다행입니다. 너무 어렵지 않은 책... 중에 마음에 드시는 게 있다면 저도 소개해 주세요." },
    ],
  },
  {
    date: "2026.04.16",
    messages: [
      { side: "left", sender: "혁", text: "날이 따스해서 졸고 있었어요." },
      { side: "right", sender: "현", text: "귀엽다. 꾸벅꾸벅 조는 고양이네요." },
      { side: "right", sender: "현", text: "햇살 맞으면서 조는 모습을 생각하니까 깨물고 싶습니다." },
      { side: "right", sender: "현", text: "앙. 🐱" },
      { side: "left", sender: "혁", text: "깨무는 건가요?" },
      { side: "left", sender: "혁", text: "！Σ(×_×;)！" },
      { side: "left", sender: "혁", text: "아프지 않게 해주세요." },
      { side: "right", sender: "현", text: "완전 아프게 할 겁니다." },
      { side: "right", sender: "현", text: "송곳니를 갈아서...더보기" },
      { side: "left", sender: "혁", text: "봐주시면 안 될까요?" },
      { side: "left", sender: "혁", text: "졸았더니 벌을 받는 것 같기도..." },
      { side: "right", sender: "현", text: "... 저는 나름대로 애정 표현을 한 거긴 한데." },
      { side: "right", sender: "현", text: "그럼 안 깨물겠습니다. 대신 노려보기." },
      { side: "left", sender: "혁", text: "노려보기요?" },
      { side: "left", sender: "혁", text: "눈싸움을 하는 것 같습니다." },
      { side: "right", sender: "현", type: "eyes" },
      { side: "left", sender: "혁", type: "eyes" },
      { side: "right", sender: "현", text: "귀여워..." },
      { side: "right", sender: "현", text: "X.X" },
      { side: "left", sender: "혁", text: "이겼군요." },
      { side: "left", sender: "혁", text: "아깝습니다." },
      { side: "right", sender: "현", text: "이기는 거 엄청 좋아하시지 않나요." },
      { side: "right", sender: "현", text: "그런데 저는 지는 이커 씨도 좋습니다." },
      { side: "left", sender: "혁", text: "그래도요. 현 씨도 이기고 싶을 수 있잖아요." },
      { side: "right", sender: "현", text: "이커 씨한테 지는 거면 영광이죠." },
    ],
  },
  {
    date: "2026.04.18",
    messages: [
      { side: "right", sender: "현", text: "페이커 귀여워. 페이커 아랑스러워." },
      { side: "right", sender: "현", text: "페이커 바보." },
      { side: "left", sender: "혁", text: "아랑스러워?" },
      { side: "left", sender: "혁", text: "사랑스러워인가요." },
      { side: "right", sender: "현", text: "네에." },
      { side: "right", sender: "현", text: "왜 아라고 하냐면, 가나다라마바사… 아. 잖아요. 그래서 사랑스럽다 보다 한 술 더 뜬 거예요." },
      { side: "right", sender: "현", text: "이상혁 아랑스럽다." },
      { side: "left", sender: "혁", text: "아하." },
      { side: "left", sender: "혁", text: "그럼 저는 자랑스럽다고 하겠습니다." },
      { side: "left", sender: "혁", text: "절 응원해주시는 분들은 늘 자랑스럽죠." },
      { side: "right", sender: "현", text: "너무 감동이에요. 고양이가 어떻게 이렇게 센스가 있어." },
    ],
  },
  {
    date: "2026.04.20",
    messages: [
      { side: "right", sender: "현", text: "핸들링 하는 영상을 찍었는데, 제가 잇몸이 마를 정도로 웃고 있더라고요. 전 정말 쥐를 좋아하나 봐요." },
      { side: "left", sender: "혁", text: "설치류는 다 좋아하시나요?" },
      { side: "right", sender: "현", text: "흐음…" },
      { side: "right", sender: "현", text: "검은 래트는 조금 무서울지도." },
      { side: "right", sender: "현", text: "시체를 밟은 적이 있어서요." },
      { side: "right", sender: "현", text: "하지만 다람쥐, 하늘다람쥐, 기니피그, 카피바라… 그런 친구들은 다 좋습니다." },
      { side: "left", sender: "혁", text: "시궁쥐 말고는 괜찮다 그거군요." },
      { side: "right", sender: "현", text: "시궁쥐는 조금 무섭습니다." },
      { side: "right", sender: "현", text: "엄청 큰 시궁쥐 본 적 있으세요?" },
      { side: "left", sender: "혁", text: "예전에 잠깐..." },
      { side: "left", sender: "혁", text: "학교를 가는 길에 봤습니다." },
      { side: "right", sender: "현", text: "헐..." },
      { side: "right", sender: "현", text: "많이 놀라셨겠어요." },
      { side: "right", sender: "현", text: "저는 시궁쥐랑 고양이랑 맞짱 뜨는데 시궁쥐가 이긴 걸 본 적이 있긴 해요." },
      { side: "left", sender: "혁", text: "그게 더 무서운데요." },
      { side: "left", sender: "혁", text: "시궁쥐는 많이 세군요." },
      { side: "right", sender: "현", text: "한국은 아니었고, 동남아였어요." },
      { side: "right", sender: "현", text: "거긴 벌레도 크고 쥐도 커요. 도마뱀도 큽니다." },
      { side: "right", sender: "현", text: "그리고 모든 곳에 도마뱀이 살아요… 학교에도 살고, 상점에도 살고. 그냥 한국의 모기 수준으로." },
      { side: "left", sender: "혁", text: "고양이가 많은 나라랑 비슷한 느낌인 거군요. 이스탄불이었나..." },
      { side: "right", sender: "현", text: "흠... 개인 취향이지만 저는 고양이 많은 나라에서 살기 vs 도마뱀 많은 나라에서 살기, 하면 전자로 갈래요." },
      { side: "left", sender: "혁", text: "저도 전자." },
      { side: "right", sender: "현", text: "친구가 많아서 좋으신 건가요?" },
      { side: "left", sender: "혁", text: "어쩌면요. 🐈‍⬛🐈" },
      { side: "right", sender: "현", text: "이모지 너무 귀엽다......" },
      { side: "right", sender: "현", text: "사망. 😵" },
      { side: "left", sender: "혁", text: "고양이가 많으면 좋죠." },
      { side: "left", sender: "혁", text: "🐈‍⬛🐈🐈‍⬛🐈🐈‍⬛🐈🐈‍⬛🐈" },
    ],
  },
  {
    date: "2026.04.20",
    messages: [
      { side: "right", sender: "현", text: "반응 속도 테스트… 를 방금 해 봤는데요." },
      { side: "right", sender: "현", text: "페이커 : 150ms 나:550ms" },
      { side: "right", sender: "현", text: "☠️" },
      { side: "left", sender: "혁", text: "앗." },
      { side: "left", sender: "혁", text: "그래도 일반인이니까 괜찮습니다." },
      { side: "right", sender: "현", text: "케리아 선수의 이상형이 마우스 클릭을 1초에 50번 하는 사람, 반속 테스트 140 나오는 사람이라는데 저는 글렀네요." },
      { side: "left", sender: "혁", text: "이상향이 아니라요?" },
      { side: "left", sender: "혁", text: "농담이겠죠." },
      { side: "right", sender: "현", text: "이상형이라던데요." },
      { side: "right", sender: "현", text: "그럼... 이커 씨의 이상형은 뭔가요?" },
      { side: "left", sender: "혁", text: "선량한 사람이 좋은 것 같습니다." },
      { side: "left", sender: "혁", text: "잘 웃는 사람도 좋고요." },
      { side: "left", sender: "혁", text: "게임 잘하는 여자라고 하기도 했었는데, 그때는 거의 농담이긴 했습니다." },
      { side: "right", sender: "현", text: "흐음. 선량한 사람이 되어야겠어요." },
      { side: "right", sender: "현", text: "이제부터 착해진다." },
      { side: "left", sender: "혁", text: "그런 사람들은 보통 이미 착한 사람이던데요." },
      { side: "right", sender: "현", text: "그런가요? ₍ᐢɞ̴̶̷.̮ɞ̴̶̷ᐢ₎" },
      { side: "right", sender: "현", text: "제 이상형은…더보기" },
      { side: "left", sender: "혁", text: "기억하고 있습니다." },
      { side: "left", sender: "혁", text: "늘 감사해요." },
      { side: "right", sender: "현", text: "제가… 제 이상형을 말했었나요?" },
      { side: "left", sender: "혁", text: "저 아닌가요?" },
      { side: "right", sender: "현", text: "?" },
      { side: "left", sender: "혁", text: "예전에 분명 저를 좋아하신다고 하셨던 것 같은데......" },
      { side: "left", sender: "혁", text: "이상형과는 또 다른 문제인가요?" },
      { side: "right", sender: "현", text: "제 이상형은… 글쎄요." },
      { side: "right", sender: "현", text: "사실 저는 프로게이머 분들을 알게 된 지 얼마 안 되었지만… 최애 말고 이상형을 꼽으라! 고 하면…" },
      { side: "right", sender: "현", text: "…더보기" },
      { side: "left", sender: "혁", text: "엇." },
      { side: "left", sender: "혁", text: "제가 아니라 다른 사람인가요?" },
      { side: "right", sender: "현", text: "노코멘트입니다. ₍ᐢɞ̴̶̷.̮ɞ̴̶̷ᐢ₎" },
      { side: "left", sender: "혁", text: "조금 궁금한데……" },
      { side: "left", sender: "혁", text: "알려주시면 안 될까요?" },
      { side: "left", sender: "혁", text: "무슨 이유로 이상형인지, 라든가." },
      { side: "right", sender: "현", text: "흐음." },
      { side: "right", sender: "현", text: "약간 듬직한 이미지, 랄까." },
      { side: "left", sender: "혁", text: "약간 민형이 같은 느낌인가요?" },
      { side: "right", sender: "현", text: "(GIF)" },
      { side: "right", sender: "현", text: "누나가 많은 것도 약간 귀여움 포인트." },
      { side: "left", sender: "혁", text: "그렇군요." },
      { side: "left", sender: "혁", text: "누나라......어렵네요." },
      { side: "right", sender: "현", text: "그리고약간약간버터떡오웅이게버터떡이구나먹어볼까(안돼너살쪄갖고)이런소리를듣는다든가오늘경기어떨것같나요개바를것같습니다ㅋㅋ하고진다든가이번LCK3강체제가무너질것이라고예고하고벅뚜벅뚜2등자리로간다든가아무도안시켰는데못말리는아가씨춤을올린다든가그러나같은팀동료(전)이올린춤영상에는?라고댓글을단다든가팝에다가내가춤잘추면어떨거같애잘춤아이돌처럼(그렇지만너는프로게이머잖아…)이런걸보낸다든가…말도안되는인스타그램왕관필터를쓰고캐뤼라고주석을적는다든가..." },
      { side: "left", sender: "혁", text: "......그건 민형이 성격 아닌가요?" },
      { side: "right", sender: "현", text: "흠…" },
      { side: "right", sender: "현", text: "저는 잘 모르겠네요." },
      { side: "left", sender: "혁", text: "민형이가 붙임성이 좋죠." },
      { side: "left", sender: "혁", text: "귀여운 친구기도 하고요." },
      { side: "right", sender: "현", text: "아니면…" },
      { side: "right", sender: "현", text: "개인적으로 존경하는 선수 특징 : 쥐띠임, 오늘 홈그에서 세 번 연속 앞구르기 함. 이상형에 가까운 선수 특징 : 같은 팀(이었던) 서폿에게 남자 너무 많은 사람은 싫다는 소리를 들음. 동생 삼고 싶은 선수 특징 : 곱슬머리인데 요즘 들어 머리 짧게 자르고 쫙쫙 피고 나옴." },
      { side: "left", sender: "혁", text: "어렵네요." },
      { side: "left", sender: "혁", text: "정말 어렵습니다." },
      { side: "left", sender: "혁", text: "존경하는 말고 좋아하는은 안 되나요?" },
      { side: "right", sender: "현", text: "(사진)" },
      { side: "right", sender: "현", text: "우리 진실 게임 하자… 좋아하는 고양이 있어? 이럴 것 같아요." },
      { side: "left", sender: "혁", text: "좋아하는 고양이 있어요?" },
      { side: "right", sender: "현", text: "아, 귀여워." },
      { side: "right", sender: "현", text: "심장 없어졌어요. ㅠㅠ" },
      { side: "left", sender: "혁", text: "있어요?" },
      { side: "left", sender: "혁", text: "ㅇ.ㅇ" },
      { side: "right", sender: "현", text: "(사진)" },
      { side: "right", sender: "현", text: "박스에 들어간 깜고를 좋아합니다." },
      { side: "left", sender: "혁", text: "박스 고양이." },
      { side: "left", sender: "혁", text: "저도 좋아합니다." },
      { side: "right", sender: "현", text: "오늘부터 고양이 귀를 달고 박스에 들어가겠습니다." },
      { side: "left", sender: "혁", text: "그러지 않아도 좋아하는데요." },
    ],
  },
];

export default function MomentsPage() {
  return (
    <main className="min-h-screen bg-[#030303] font-mono selection:bg-[#E4002B]/20 overflow-x-hidden">
      {/* 상단 레드 라인 */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-[#E4002B] z-50" />

      {/* 롤 인게임 UI 느낌 — 좌측 패널 테두리 */}
      <div className="fixed top-0 left-0 w-[3px] h-full bg-gradient-to-b from-[#E4002B] via-[#E4002B]/10 to-transparent z-40" />
      <div className="fixed top-0 right-0 w-[1px] h-full bg-gradient-to-b from-[#C89B3C]/30 via-transparent to-transparent z-40" />

      {/* 뒤로가기 */}
      <Link
        href="/"
        className="fixed top-6 left-6 text-[9px] tracking-[0.4em] text-white/20 hover:text-[#E4002B] transition-all uppercase font-black z-50 flex items-center gap-2"
      >
        <span>◄</span> BACK
      </Link>

      {/* 상단 HUD 바 */}
      <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <div className="h-[1px] w-12 bg-[#E4002B]/40" />
        <span className="text-[8px] font-black tracking-[0.5em] text-[#E4002B]/60 uppercase">
          Chat Log
        </span>
        <div className="h-[1px] w-12 bg-[#E4002B]/40" />
      </div>

      <div className="max-w-2xl mx-auto px-8 md:px-16 py-24">
        {/* 헤더 — 시스템 메시지 느낌 */}
        <header className="mb-16">
          <div className="border border-[#E4002B]/15 bg-[#E4002B]/[0.03] px-5 py-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[#E4002B] text-[10px] font-black">■</span>
              <span className="text-[9px] font-black tracking-[0.5em] text-[#E4002B]/70 uppercase">
                System
              </span>
              <div className="flex-1 h-[1px] bg-[#E4002B]/10" />
            </div>
            <p className="text-[11px] text-white/25 font-mono tracking-wide">
              // DIALOGUE_FRAGMENTS.log — 어느 날, 우리가 나누었던 조각들.
            </p>
          </div>
        </header>

        {/* 대화 그룹 */}
        <div className="space-y-16">
          {dialogues.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-3">
              {/* 날짜 — 시스템 로그 느낌 */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#C89B3C]/60 text-[9px] font-black">▶</span>
                <span className="text-[9px] font-black text-[#C89B3C]/60 tracking-[0.3em]">
                  {group.date}
                </span>
                <div className="flex-1 h-[1px] bg-[#C89B3C]/10" />
              </div>

              {/* 메시지들 */}
              <div className="space-y-2">
                {group.messages.map((msg, msgIdx) => (
                  <div key={msgIdx} className="flex items-start gap-3 group">
                    {/* 왼쪽 구분 바 — 혁=레드, 현=골드 */}
                    <div
                      className={`mt-1 w-[2px] shrink-0 ${
                        msg.type === "eyes" ? "h-16" : "h-4"
                      } ${msg.side === "left" ? "bg-[#E4002B]/60" : "bg-[#C89B3C]/50"}`}
                    />

                    {/* 발신자 태그 */}
                    <span
                      className={`text-[10px] font-black shrink-0 mt-0.5 w-6 ${
                        msg.side === "left" ? "text-[#E4002B]/80" : "text-[#C89B3C]/70"
                      }`}
                    >
                      {msg.sender}
                    </span>

                    {/* 구분자 */}
                    <span className="text-white/10 text-[10px] mt-0.5 shrink-0">│</span>

                    {/* 눈 이모지 특수 처리 */}
                    {msg.type === "eyes" ? (
                      <p className="text-5xl leading-none py-1">👀</p>
                    ) : (
                      <p
                        className={`text-[13px] leading-relaxed break-keep tracking-tight ${
                          msg.side === "left" ? "text-white/50" : "text-white/70"
                        } group-hover:text-white/90 transition-colors duration-200`}
                      >
                        {msg.text}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 푸터 — 시스템 종료 메시지 */}
        <footer className="mt-24 pt-8 border-t border-white/5">
          <div className="flex items-center gap-3">
            <span className="text-[#E4002B]/40 text-[9px]">■</span>
            <p className="text-[9px] text-white/10 tracking-[0.4em] uppercase font-black">
              To be continued with you.
            </p>
            <span className="text-white/10 text-[9px] animate-pulse">_</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
