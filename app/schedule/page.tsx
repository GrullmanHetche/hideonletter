'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Link from 'next/link'

export default function Schedule() {
  const events = [
    // --- 4월 T1 공식 경기 일정 ---
    { title: '🔴 [LCK] T1 vs HLE', date: '2026-04-04', color: '#E4002B' },
    { title: '🔴 [LCK] T1 vs GEN', date: '2026-04-08', color: '#E4002B' },
    { title: '🔴 [LCK] DNS vs T1', date: '2026-04-10', color: '#E4002B' },
    { title: '🔴 [LCK] DK vs T1', date: '2026-04-17', color: '#E4002B' },
    { title: '🔴 [LCK] KRX vs T1', date: '2026-04-19', color: '#E4002B' },
    
    // --- ★ T1 홈그라운드 이벤트 (인천 인스파이어 아레나) ---
    { title: '🏆 T1 HOME GROUND (DAY 1)', date: '2026-04-24', color: '#C89B3C' },
    { title: '🏆 T1 vs BRO (HOME GROUND)', date: '2026-04-25', color: '#C89B3C' },
    { title: '🏆 T1 vs BFX (HOME GROUND)', date: '2026-04-26', color: '#C89B3C' },

    // --- 유현 & 서예 일정 ---
    { title: '🎓 복학 첫 세미나', date: '2026-04-03', color: '#444444' },
    { title: '🖌️ 서예실 정기 모임', date: '2026-04-11', color: '#444444' },
    { title: '📝 중간고사 준비 시작', date: '2026-04-20', color: '#444444' },
  ]

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-16 font-sans">
      <header className="mb-12 flex justify-between items-end px-2">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-[#E4002B]">SCHEDULE</h1>
          <p className="text-[10px] text-stone-500 tracking-[0.4em] uppercase mt-2 font-medium">The Archive: April 2026</p>
        </div>
        <Link href="/" className="text-[10px] uppercase tracking-widest text-stone-500 hover:text-[#E4002B] transition-colors border-b border-stone-900 pb-1">
          Back to Archive
        </Link>
      </header>

      <div className="bg-[#050505] border border-stone-900 p-4 md:p-10 shadow-[0_0_50px_rgba(228,0,43,0.05)]">
        <style>{`
          .fc { --fc-border-color: #1a1a1a; --fc-page-bg-color: transparent; }
          .fc-col-header-cell { padding: 15px 0; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; color: #444; border: none !important; }
          .fc-daygrid-day-number { font-size: 11px; font-weight: 200; padding: 15px !important; color: #555; }
          .fc-event { border: none !important; padding: 6px 10px !important; font-size: 9px !important; font-weight: 800 !important; border-radius: 0 !important; margin-bottom: 2px !important; }
          .fc-toolbar-title { font-size: 1.4rem !important; font-weight: 200 !important; letter-spacing: 0.1em; text-transform: uppercase; }
          .fc-button { background: #0a0a0a !important; border: 1px solid #222 !important; font-size: 0.7rem !important; text-transform: uppercase !important; border-radius: 0 !important; color: #666 !important; }
          .fc-button-active { background: #E4002B !important; border-color: #E4002B !important; color: white !important; }
          .fc-day-today { background: rgba(228, 0, 43, 0.02) !important; }
          .fc-daygrid-event-harness { margin-bottom: 3px; }
        `}</style>
        
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth'
          }}
          height="auto"
        />
      </div>

      <footer className="mt-12 flex justify-between items-center text-[9px] text-stone-700 tracking-[0.2em] uppercase font-bold px-2">
        <p>* Venue: LoL Park & Inspire Arena</p>
        <p>Verified by T1 Official Schedule</p>
      </footer>
    </main>
  )
}