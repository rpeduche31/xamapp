import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  ModalFooter
} from "@chakra-ui/react"
import React from 'react'
import { BaseModalProps } from './type'


const BaseModal: React.FC<BaseModalProps> = ({
  children,
  finalRef,
  showModal,
  title,
  width,
  onClose,
  modalStyles,
  isCentered,
  hideModalCloseButton,
  footer,
  ...modalProps
}) => {
  
  const modalStyle = {
    header: {
      fontSize: 18,
      padding: "36px 36px 16px",
      ...modalStyles?.header
    },
    content: {
      borderRadius: "26px",
      width,
      ...modalStyles?.content,
    },
    body: {
      padding: "0 30px",
      ...modalStyles?.body
    },
    footer: {
      alignItems: "flex-end",
      padding: "20px 36px",
      ...modalStyles?.footer
    },
    closeButton: {
      ...modalStyles?.closeButton
    },
    overlay: {
      ...modalStyles?.overlay
    }
  }

  return (
    <>
      <Modal
        autoFocus={false}
        closeOnOverlayClick={true}
        motionPreset="slideInBottom"
        onClose={onClose}
        finalFocusRef={finalRef}
        isOpen={showModal}
        {...modalProps}
      >
        <ModalOverlay {...modalStyle.overlay}/>
        <ModalContent {...modalStyle.content}>
            {title && (
              <ModalHeader >
                <Text>{title}</Text>
              </ModalHeader>
            )}
            {!hideModalCloseButton && <ModalCloseButton />}
          
          <ModalBody {...modalStyle.body}>
            {children}
          </ModalBody>
          {footer && (
            <ModalFooter {...modalStyle.footer}>
              {footer}
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default BaseModal
