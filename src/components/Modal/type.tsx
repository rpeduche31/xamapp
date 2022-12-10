import {
  ButtonProps,
  ModalBodyProps,
  ModalContentProps,
  ModalFooterProps,
  ModalHeaderProps,
  ModalOverlayProps,
  ModalProps
} from "@chakra-ui/react";
import { ReactNode, RefObject } from "react";
import { FocusableElement } from "@chakra-ui/utils";

export interface ModalCallbackOptions {
  onClose?: (id?: string) => void;
  isLoading?: boolean;
  activeButtonKey?: string;
  error?: any;
  isValid?: boolean;
}

export interface BaseModalProps
  extends Omit<ModalProps, "isOpen" | "children"> {
  finalRef?: RefObject<FocusableElement>;
  hideModalCloseButton?: boolean;
  isLoading?: boolean;
  showModal: boolean;
  title?: string | ReactNode;
  footer?: string | ReactNode;
  width?: number | string;
  height?: number | string;
  autoHeightMin?: string;
  error?: any;
  modalStyles?: {
    body?: ModalBodyProps;
    content?: ModalContentProps | {};
    closeButton?: ButtonProps;
    footer?: ModalFooterProps;
    header?: ModalHeaderProps;
    overlay?: ModalOverlayProps;
  };
  isValid?: boolean;
  children: string | ReactNode;
  onClose: any;
}
