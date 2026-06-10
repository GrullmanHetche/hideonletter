"use client";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CornerFrame from "./CornerFrame";

export default function Modal({
  open,
  onClose,
  label,
  color = "var(--t1-red)",
  wide = false,
  children,
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  color?: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const node = ref.current;
    node?.querySelector<HTMLElement>("button, [href], input")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && node) {
        const els = node.querySelectorAll<HTMLElement>(
          'button, [href], input, [tabindex]:not([tabindex="-1"]), object'
        );
        if (!els.length) return;
        const first = els[0], last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={label}
        >
          <motion.div
            ref={ref}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className={`w-full ${wide ? "max-w-3xl" : "max-w-lg"} max-h-[90vh] overflow-y-auto bg-ink-soft`}
            onClick={(e) => e.stopPropagation()}
          >
            <CornerFrame color={color} className="p-8 md:p-10">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 text-[10px] font-black uppercase tracking-[0.35em] text-paper/40 transition-colors hover:text-paper"
              >
                [ Exit ]
              </button>
              {children}
            </CornerFrame>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
