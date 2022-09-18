import { useCallback, useMemo, useState } from "react";

export interface UseOpenProps {
  init: boolean;
}

export const useOpen = (props?: UseOpenProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(props?.init || false);
  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  const onToggle = useCallback(() => {
    setIsOpen((prev) => {
      return !prev;
    });
  }, []);

  return useMemo(() => {
    return {
      isOpen,
      setIsOpen,
      onOpen,
      onClose,
      onToggle,
    };
  }, [isOpen, setIsOpen, onOpen, onClose, onToggle]);
};
