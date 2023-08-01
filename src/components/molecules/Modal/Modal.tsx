import React, { useRef, useEffect } from "react";

import { VStack } from "../../atoms/VStack/VStack";
import { HStack } from "../../atoms/HStack/HStack";
import { Text } from "../../atoms/Text/Text";
import { IconButton } from "../Button/IconButton/IconButton";

import * as styles from "./styles";

interface ModalProps {
  title: string;
  handleClose: () => void;
  children: JSX.Element | JSX.Element[];
}

export const Modal: React.FC<ModalProps> = ({
  handleClose,
  children,
  title,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        handleClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cardRef, handleClose]);

  return (
    <styles.ScreenOverlay>
      <styles.ModalCard ref={cardRef}>
        <VStack $spacing={16}>
          <HStack $spacing={12} $justifyContent="space-between">
            <Text $weight="bold" $size="lg">
              {title}
            </Text>
            <IconButton icon="close" onClick={handleClose} />
          </HStack>
          {children}
        </VStack>
      </styles.ModalCard>
    </styles.ScreenOverlay>
  );
};
