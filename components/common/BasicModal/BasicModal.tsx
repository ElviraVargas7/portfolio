import { ReactNode } from "react";

const BasicModal = ({
  children,
  open,
  setOpen,
}: {
  children: ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <div
      onClick={() => setOpen(false)}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        open
          ? "visible bg-black/40 backdrop-blur-sm"
          : "invisible bg-transparent"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative transform transition-all duration-300 rounded-lg shadow-lg max-w-3xl w-[60%] ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default BasicModal;
