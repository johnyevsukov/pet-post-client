import React, { useRef, useEffect } from "react";
import * as styles from "./styles";
import { Icon } from "../../atoms/Icon/Icon";
import { Text } from "../../atoms/Text/Text";
import { HStack } from "../../atoms/HStack/HStack";

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
        <styles.TopWrapper>
          <HStack $spacing={12} $justifyContent="space-between">
            <Text $weight="bold" $size="lg">
              {title}
            </Text>
            <styles.CloseButton onClick={handleClose}>
              <Icon name="close" width={32} />
            </styles.CloseButton>
          </HStack>
        </styles.TopWrapper>
        {children}
      </styles.ModalCard>
    </styles.ScreenOverlay>
  );
};
