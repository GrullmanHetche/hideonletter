'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const chapters = [
  {
    id: 1, label: "Chapter I", title: "강의실",
    sub: "패배는 결과가 아니라 형태였다.",
    content: [
      "강의실 문은 마치 누군가의 결심처럼 무거운 소리를 내며 닫혔다. 이상혁은 그 문을 등지고 서 있었다. 수십 개의 시선이 자신을 향해 있다는 사실을 알고 있었다. 그것은 익숙한 무게였다. 모니터 너머에서, 경기장 아래에서, 카메라와 조명 사이에서 이미 수도 없이 받아내왔던 것들이었다. 사람들은 성공에 대해 듣고 싶어 했다. 성공한 사람의 입에서 떨어지는 실패를 듣고 싶어 했다. 그것은 일종의 면죄부였다. 아직 실패해도 괜찮다는 입만 달콤한 허락.",
      "상혁은 담담하게 말했다.",
      "\"재능은 중요하지 않습니다.\"",
      "아주 진실은 아니었다. 그러나 모두가 원하는 종류의 거짓말이었다.",
      "그때였다. 문이 아주 조금, 소리 없이 움직였다. 그는 시선을 옮기지 않았다. 옮길 필요가 없었다. 누군가 들어오고 있었다. 조심스럽게. 늦게 들어와 놓고서도 억지로 존재를 줄이려는 사람인양. 슬그머니 안으로 들어왔다.",
      "유현이었다.",
      "이름을 알 리 없었다. 그러나 이상하게도, 그는 그녀를 이미 알고 있는 기분이 들었다. 유현은 문 틈으로 몸을 미끄러뜨렸다. 숨을 죽이고, 발소리를 지우고, 심지어 자신의 무게마저 부정하려는 것처럼. 그녀는 마치, 존재하지 않는 것처럼 들어왔다.",
      "그 순간 상혁은 문득 생각했다.",
      "저건, 패배한 사람의 움직임이다. 패배는 결과가 아니라 형태였다. 몸에 남는 습관이었다. 유현은 뒷자리 빈 곳에 앉았다. 의자에 앉는 순간조차 완전히 내려앉지 못했다. 언제든 다시 일어나야 할 것처럼, 언제든 도망쳐야 할 것처럼.",
      "하지만 상혁은 그녀를 가볍게 시선으로 쫓으면서도 말을 멈추지 않았다.",
      "\"중요한 건, 계속하는 겁니다.\"",
      "그의 입은 계속 움직였고, 사람들은 계속 고개를 끄덕였다. 모든 것이 정상적으로 흘러가고 있었다. 그러나 그의 일부는 이미 그녀에게 가 있었다.",
      "상혁은 이유를 알 수 없었다.",
      "왜 하필 그녀인지. 왜 수십 명 중에서, 왜 그녀만.",
      "하지만 그는 알고 있었다. 저건 무너져가는 사람이다. 완전히 부서지지는 않았지만, 이미 금이 간 사람. 그리고 이상하게도, 그는 그런 것들을 알아보는 데 익숙했다. 왜냐하면, 한때 자신도, 어느 누군가라도 그런 얼굴을 하고 있었으니까.",
      "강의는 끝났다.",
      "그는 더 이상 말할 필요가 없었다. 그럼에도 불구하고, 그는 한동안 그 자리에 서 있었다. 마치 무언가를 기다리는 사람처럼.",
      "…무엇을?",
      "시선이 천천히 강의실 뒤편으로 흘렀다. 아무도 없었다. 이미 모두 떠난 뒤였다. 그 애도 그중 하나였을 뿐이다.",
      "그 애.",
      "이상하게도, 그는 이름조차 모르는 사람을 그렇게 부르고 있었다. 그는 가방을 집어 들었다. 의자를 밀어 넣었다. 아무 일도 없었다는 것처럼. 앞 문을 향해 걸어가면서도, 아주 잠깐, 정말 아주 잠깐, 이미 아무도 없는 뒤편을 다시 한 번 바라봤다.",
      "물론, 아무도 없었다.",
      "그럼에도 불구하고, 그는 알 수 있었다. 그 애는 이미 떠났는데도, 어딘가에 남아 있었다. 어쩌면 이미 희끄무레한 기억, 그보다 더 희미한 무언가로.",
    ],
  },
  {
    id: 2, label: "Chapter II", title: "서예실",
    sub: "살아 있으려고 애쓰는 사람의 손.",
    content: [
      "서예는 고요한 행위였다. 의미를 남기기 위해서가 아니라, 그것을 그 자체로서 비워내기 위해서 존재하는 행위. 이상혁은 그것이 마음에 들었다. 그 자신 안에 쌓이는 소음들을 하나씩 내려놓는 일. 승리의 환호도, 패배의 잔향도, 결국에는 모두 소음에 불과했으니까. 지인이 좋은 곳이 하나 있다고 추천해왔다. 아무도 묻지 않고, 무엇도 기억하지 않는 곳이라고.",
      "그는 그 말을 믿었다. 그 말을 믿고 싶었다.",
      "작업실은 골목 안쪽에 있었다. 문을 열자, 마른 한지 냄새가 났다. 시간이 증발한 자리에서만 나는 냄새. 몇 개의 책상, 가지런히 놓인 벼루, 말라붙은 먹의 흔적들.",
      "그리고, 사람이 있었다. 고개를 숙이고 있는 사람. 붓을 들고 있는 손이 아주 미세하게 떨리고 있었다. 그는 걸음을 멈췄다. 이유는 없었다. 그저, 이미 알고 있는 장면을 다시 보는 기분이었으니까.",
      "유현이었다. 이름을 알 리 없었다. 그러나 그는 알았다. 그 애였다. 강의실 문 틈으로 들어오던 그 애. 유현은 종이 위에 무언가를 쓰려고 하고 있었다. 붓끝은 종이에 닿아 있었지만, 움직이지 못하고 있었다. 숨을 참고 있는 손이었다. 상혁은 그 손을 바라봤다. 문득 생각했다.",
      "저건, 살아 있으려고 애쓰는 사람의 손이다.",
      "그는 아무 말도 하지 않았다. 방해하고 싶지 않았다. 그 순간, 유현의 붓이 아주 조금 움직였다. 그러나 끝까지 이어지지 못했다. 획은 중간에서 미묘하게 멈춰 있었다. 시작도 끝도 아닌 형태로. 유현은 그 상태로 한동안 멈춰 있었다. 그리고 천천히, 고개를 들었다. 눈이 마주쳤다.",
      "그 순간, 그는 확신했다. 우연이라는 것은, 아무 준비도 없이 찾아오는 것이 아니라, 이미 오래전부터 서로를 향해 걸어오고 있던 것들의 마지막 거리일 뿐이라는 것을.",
      "유현에게 서예는 기술이 아니었다. 그녀에게 이것은 도피였다. 먹을 가는 소리는 일정했다. 사각거리는 마찰음은 이상하게도 심장과 닮아 있었다. 살아 있다는 증거처럼. 불안은 언제나 형태가 없었지만, 먹을 가는 동안만큼은 아주 얇게, 희미하게 흩어졌다.",
      "몇 차례의 밤과 몇 차례의 침묵이 지나갔다. 이제는 서로의 존재가 낯설지 않았다. 인사를 나눈 적은 없었지만, 그녀는 그가 언제 오는지 알았고, 그는 그녀가 언제 앉는지 알고 있었다.",
      "그날 유현이 붓을 들었을 때, 먹이 지나간 자리의 획이 갈라졌다. 털이 벌어져 있었다. 그때, 옆에서 무언가 조용히 그녀의 시야에 들어왔다. 거의 새것 같이 깔끔하게 정돈 된 붓이었다. 안경을 쓴 남자가, 아무 말 없이 붓을 내밀고 있었다. \"…괜찮으시면.\" 그게 전부였다. \"…감사합니다.\" 그녀는 조심스럽게 붓을 받았다. 이번에는 끊어지지 않았다. 유현은 쓰던 글자를 이어갔다. - 塞翁之馬. 새옹지마.",
      "그 순간, 옆에서 낮은 목소리가 말했다. \"그 사자성어, 쓰신 이유가 있으십니까.\"",
      "유현은 잠시 망설였다가 말했다. \"…이상하게, 이 글자는… 쓸 때마다, 조금 다른 모양이 나오더라구요.\" 남자는 고개를 아주 조금 기울였다. \"왜 그렇다고 생각하세요.\" \"…같은 인생의 길흉화복이 아니니까요.\" 말해놓고 나서, 그녀는 괜히 후회했다. 그러나 남자는 아무 반응도 보이지 않았다. 그저, \"그렇군요.\" 라고만 짧게 말했다. 유현은 이유를 알 수 없었다. 왜, 이 사람 앞에서는, 조금 덜 무너지는 느낌이 드는지.",
      "그날, 그들은 처음으로, 서로의 이름을 물었다. 그리고, 자연스럽게 번호를 교환했다. 마치, 이미 알고 있던 것들을, 이제야 확인하는 것처럼.",
    ],
  },
  {
    id: 3, label: "Chapter III", title: "다정한 무지",
    sub: "그리고 그 증거 하나로, 나는, 조금 더 살아보고 싶어졌다.",
    content: [
      "그들은 자주 마주치지 않았다. 그러나 충분히 마주쳤다. 서예 작업실에서, 창가가 있는 찻집에서, 말이 필요 없는 명상실에서. 유현은 점점 그 남자의 침묵에 익숙해졌다. 그 침묵은 무관심이 아니었다. 그것은 기다림이었다. 상혁은 질문하지 않았다. 대답할 준비가 된 것만 듣는 사람이었다.",
      "그것이 유현에게는 처음이었다. 사람들은 늘 물었다. 왜 그러냐고. 언제부터 그랬냐고. 앞으로 어떻게 할 거냐고. 그러나 상혁은 묻지 않았다. 그는 그저, 유현이 말하는 동안 거기에 있었다. 완전하게.",
      "그 남자는 유현을 알지 못했다. 유현이 휴학 중이라는 것도, 밤마다 잠들지 못한다는 것도. 아무것도 몰랐다. 그 무지는, 유현에게 안식이었다.",
      "울려고 했던 것은 아니었다. 그저, 말하다가, 그녀를 담담히 바라보고 있는 그의 시선에 무너졌다. \"…저, 요즘… 병원 다니고 있어요.\" 상혁은 아무 말도 하지 않았다. \"…정신과.\" 그 말은 공기 위에 오래 떠 있었다. \"…아무것도 못하겠어요. 공부도… 못하겠고. 제가, 너무 쓸모없는 것 같아서…\" 그녀는 그 다음 말을 하지 못했다.",
      "그러나, 상혁은 여전히 거기에 있었다. 그는 놀라지 않았다. 위로하려 하지도 않았다. 그저, 잠시, 생각했다. 그리고 말했다.",
      "\"먹물은, 그냥 검은 물입니다. 그 자체로는, 아무 의미도 없잖아요. 그러나 종이 위에 올라가면, 글씨가 됩니다. 유현 씨는, 아직 자신의 의미를 적어내릴 종이를 못 찾은 것뿐입니다.\"",
      "그 말은 조용히 유현을 또 다시 울려왔다. 그것은 위로처럼 들리지 않았다. 격려처럼 들리지도 않았다. 그저, 사실처럼 들렸다. 그가 부여한 그 이상한 가능성은, 터무니없게도 그녀가 지금까지 들어왔던 모든 말들보다 따뜻했다.",
      "그는 나를 구하지 않았다. 끌어올리지도 않았다. 그는 그저, 내가 가라앉지 않도록, 거기에 있었다. 나는 그 앞에서, 조금 덜 두려웠다. 조금 덜 불안했고, 조금 덜 사라지고 싶었다.",
      "그녀는 이제 깨달았다. 자신이 그를 사랑하게 되었다는 것을. 그의 지위 때문도 아니고, 그의 말 때문도 아니라, 그가 나를 바라보는 방식 때문에. 아무것도 덧붙이지 않고, 아무것도 빼앗지 않고, 그저, 존재하도록 내버려두는 다정한 침묵이 그녀가 그를 사랑하게 만들었다.",
      "그리고 그 증거 하나로, 나는, 조금 더 살아보고 싶어졌다.",
    ],
  },
];

export default function Archive() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [progress, setProgress] = useState(0);
  
  // 수정사항: 타입을 HTMLElement로 지정하여 'never' 에러 해결
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = articleRef.current;
      if (!el) return;
      const scrolled = window.scrollY - el.offsetTop;
      const total = el.offsetHeight - window.innerHeight;
      setProgress(Math.min(100, Math.max(0, (scrolled / total) * 100)));
      
      // 수정사항:querySelectorAll에 HTMLElement 타입을 지정하여 안정성 확보
      document.querySelectorAll<HTMLElement>('[data-chapter]').forEach((node, i) => {
        if (node.getBoundingClientRect().top <= window.innerHeight / 2) setActiveChapter(i);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (i: number) => {
    document.querySelector(`[data-chapter="${i}"]`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white font-sans selection:bg-[#E4002B]/20 overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-[2px] bg-[#E4002B] z-50" />
      <div className="fixed top-[2px] left-0 h-[2px] bg-[#C89B3C]/70 z-50 transition-all duration-100"
        style={{ width: `${progress}%` }} />

      {/* 챕터 인디케이터 */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-5 hidden md:flex">
        {chapters.map((ch, i) => (
          <button key={ch.id} onClick={() => scrollTo(i)} className="flex flex-col items-end gap-1 group">
            <div className={`w-[2px] h-6 transition-all duration-300 ${activeChapter === i ? 'bg-[#E4002B]' : 'bg-white/10 group-hover:bg-white/25'}`} />
            <span className={`text-[8px] font-black tracking-widest transition-colors ${activeChapter === i ? 'text-[#E4002B]' : 'text-white/15'}`}>{ch.id}</span>
          </button>
        ))}
      </div>

      <nav className="fixed top-0 w-full px-8 md:px-16 pt-6 flex justify-between items-center z-40">
        <Link href="/" className="text-[9px] tracking-[0.35em] text-white/20 hover:text-white transition-colors uppercase font-black flex items-center gap-2">
          <span className="text-[#E4002B]">←</span> HIDEONLETTER
        </Link>
        <Link href="/schedule" className="text-[9px] tracking-[0.35em] text-white/15 hover:text-[#E4002B] transition-colors uppercase font-black">Schedule</Link>
      </nav>

      <article ref={articleRef} className="max-w-2xl mx-auto pt-36 pb-40 px-8">

        {/* 헤더 */}
        <header className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-8 bg-[#E4002B]" />
            <span className="text-[9px] text-[#E4002B] tracking-[0.5em] uppercase font-black">Archive</span>
          </div>
          <h1 className="text-3xl font-extralight tracking-tighter text-white mb-3 italic leading-tight">
            Archive: <span className="font-black not-italic">서사의 기록</span>
          </h1>
          <p className="text-[10px] text-white/20 tracking-[0.4em] uppercase font-bold">The Narrative of SangHyeok & YuHyeon</p>

          {/* 목차 */}
          <div className="mt-12 space-y-4 border-l border-white/5 pl-5">
            {chapters.map((ch, i) => (
              <button key={ch.id} onClick={() => scrollTo(i)} className="flex items-start gap-3 group w-full text-left">
                <span className="text-[9px] text-[#E4002B]/40 font-black pt-0.5 shrink-0">{ch.id}</span>
                <div>
                  <p className="text-[11px] text-white/35 font-black group-hover:text-white transition-colors">{ch.title}</p>
                  <p className="text-[10px] text-white/12 italic mt-0.5">{ch.sub}</p>
                </div>
              </button>
            ))}
          </div>
        </header>

        {/* 챕터들 */}
        {chapters.map((ch, chIdx) => (
          <section key={ch.id} data-chapter={chIdx} className="mb-32">
            <div className="mb-14 flex items-start gap-5">
              <div className="flex flex-col items-center pt-1 shrink-0">
                <div className="w-[2px] h-8 bg-[#E4002B]" />
                <div className="w-1.5 h-1.5 bg-[#E4002B] rotate-45 mt-1" />
              </div>
              <div>
                <span className="text-[9px] text-[#E4002B] tracking-[0.5em] uppercase font-black block mb-2">{ch.label}</span>
                <h2 className="text-2xl font-black tracking-tighter text-white">{ch.title}</h2>
                <p className="text-[12px] text-white/20 italic mt-1">{ch.sub}</p>
              </div>
            </div>

            <div className="space-y-7 text-[15px] leading-[2.1] font-light break-keep">
              {ch.content.map((para, i) => {
                const isQuote = para.startsWith('"') || para.startsWith('“') || para.startsWith('\"');
                const isClimax = para === '그리고 그 증거 하나로, 나는, 조금 더 살아보고 싶어졌다.';
                return (
                  <p key={i} className={
                    isClimax ? 'text-white pt-6 font-light' :
                    isQuote  ? 'text-white/75 pl-4 border-l border-[#E4002B]/25 italic' :
                               'text-white/50'
                  }>{para}</p>
                );
              })}
            </div>

            {chIdx < chapters.length - 1 && (
              <div className="flex items-center gap-4 mt-20">
                <div className="flex-1 h-[1px] bg-white/5" />
                <div className="w-1 h-1 bg-[#E4002B]/30 rotate-45" />
                <div className="flex-1 h-[1px] bg-white/5" />
              </div>
            )}
          </section>
        ))}

        <footer className="mt-16 flex items-center gap-4">
          <div className="h-[1px] w-10 bg-[#E4002B]" />
          <Link href="/" className="text-[9px] tracking-[0.4em] text-white/15 hover:text-white/50 transition-colors uppercase font-black">
            Exit Archive
          </Link>
        </footer>
      </article>
    </main>
  );
}
