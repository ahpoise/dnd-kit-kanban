import { useCallback, useEffect, useRef } from "react";
import clsx from "clsx";

export default function AddItem({
  children,
  showForm,
  setShowForm,
  containerClasses,
}) {
  const desktopModalRef = useRef(null);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        setShowForm(false);
      }
    },
    [setShowForm]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <>
      {showForm && (
        <>
          <div
            ref={desktopModalRef}
            className="fixed inset-0 z-40 hidden min-h-screen items-center justify-center md:flex"
            onMouseDown={(e) => {
              if (desktopModalRef.current === e.target) {
                setShowForm(false);
              }
            }}
          >
            <div
              className={clsx(
                `overflow relative w-full max-w-lg transform rounded-xl border border-gray-200 bg-white p-6 text-left shadow-2xl transition-all`,
                containerClasses
              )}
            >
              {children}
            </div>
          </div>

          <div
            className="fixed inset-0 z-30 bg-gray-100 bg-opacity-10 backdrop-blur"
            onClick={() => setShowForm(false)}
          />
        </>
      )}
    </>
  );
}
