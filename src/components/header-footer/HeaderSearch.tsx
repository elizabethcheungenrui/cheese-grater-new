import { useState, useRef, useEffect } from "react";
import "./HeaderSearch.css";

export default function HeaderSearch({ isMobile }: { isMobile: boolean }) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function submit() {
    const q = inputRef.current?.value.trim();
    if (!q || q.length < 3) return;

    window.location.href = `/search?q=${encodeURIComponent(q)}`;
  }

  return (
    <div className={`header-search ${open ? "open" : ""}`}>
      <button
        type="button"
        className="menu-item menu-more"
        aria-label="Search"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        🔍
      </button>

      {(open || isMobile) && (
        <div className="search-panel">
          <label className="sr-only" htmlFor="header-search-input">
            Search articles
          </label>

          <input
            ref={inputRef}
            id="header-search-input"
            type="search"
            placeholder="Search articles…"
            autoComplete="off"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submit();
              }
            }}
          />

          <button type="button" className="sr-only" onClick={submit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
