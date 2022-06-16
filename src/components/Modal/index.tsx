import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Text } from "../../styles/styles";
import { ModalHeader, ModalInner, StyledModal } from "./styles";
type ModalProps = {
  handleDisplay: () => void;
  context: "success" | "fail";
  isOpen: boolean;
};

const Modal = ({ context, handleDisplay, isOpen }: ModalProps) => {
  return (
    <StyledModal isOpen={isOpen}>
      <ModalInner>
        <ModalHeader>
          <FontAwesomeIcon
            width={"1rem"}
            icon={faClose}
            onClick={() => handleDisplay()}
            title="Limpar busca"
            data-testid="close-modal-button"
          />
        </ModalHeader>
        {context === "success" ? (
          <Text alignment="center" color="green">
            O sobrevivente foi infectado e em breve, se juntará a horda de
            zumbis!
          </Text>
        ) : (
          <Text alignment="center" color="green">
            Houve um erro ao infectar esse sobrevivente.
          </Text>
        )}
      </ModalInner>
    </StyledModal>
  );
};

export default Modal;
