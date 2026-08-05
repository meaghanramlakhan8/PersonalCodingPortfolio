import { useEffect, useState } from 'react';
import './BootScreen.css';

const BOOT_LINES = [
  'initializing portfolio.kernel...',
  'loading profile/meaghan.json...',
  'indexing projects/, experience/, and skills/...',
  'connecting to Houston ground station...',
  'portfolio ready. all systems nominal.',
];

const STORAGE_KEY = 'portfolio-booted';
const LINE_DELAY_MS = 300;
const EXIT_DELAY_MS = 650;

function hasBootedThisSession() {
  if (typeof window === 'undefined') return true;

  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

function saveBootState() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, 'true');
  } catch {
    // Continue normally if session storage is unavailable.
  }
}

export default function BootScreen() {
  const [isVisible, setIsVisible] = useState(
    () => !hasBootedThisSession()
  );
  const [visibleLineCount, setVisibleLineCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return undefined;

    const intervalId = window.setInterval(() => {
      setVisibleLineCount((currentCount) => {
        const nextCount = Math.min(
          currentCount + 1,
          BOOT_LINES.length
        );

        if (nextCount === BOOT_LINES.length) {
          window.clearInterval(intervalId);
        }

        return nextCount;
      });
    }, LINE_DELAY_MS);

    const totalDuration =
      BOOT_LINES.length * LINE_DELAY_MS + EXIT_DELAY_MS;

    const exitTimeoutId = window.setTimeout(() => {
      saveBootState();
      setIsVisible(false);
    }, totalDuration);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(exitTimeoutId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const progress = Math.round(
    (visibleLineCount / BOOT_LINES.length) * 100
  );

  return (
    <div
      className="boot-screen"
      role="status"
      aria-live="polite"
      aria-label="Initializing Meaghan Ramlakhan’s portfolio"
    >
      <div className="boot-console">
        <div className="boot-logo" aria-hidden="true">
          &lt;MCR<span>/</span>&gt;
        </div>

        <div className="boot-output">
          {BOOT_LINES.slice(0, visibleLineCount).map(
            (line, index) => {
              const isFinalLine =
                index === BOOT_LINES.length - 1;

              return (
                <p key={line}>
                  <span aria-hidden="true">
                    {isFinalLine ? '✓' : '›'}
                  </span>

                  <span>{line}</span>

                  <b>{isFinalLine ? 'DONE' : 'OK'}</b>
                </p>
              );
            }
          )}
        </div>

        <div
          className="boot-progress"
          role="progressbar"
          aria-label="Portfolio loading progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <i style={{ width: `${progress}%` }} />
        </div>

        <small>PORTFOLIO OS // BUILD 2026.07</small>
      </div>
    </div>
  );
}