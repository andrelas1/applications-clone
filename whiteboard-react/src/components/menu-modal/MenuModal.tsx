import { ControlBtn, IconType } from "../control/ControlBtn";
import styles from "./MenuModal.module.css";

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  position?: {
    left: string;
    top: string;
  };
};

/**
 * This component is used to display the modal in an animated way. It does not
 * contain any logic to display which items should be placed in this modal.
 *
 * This should be done by another component that composes on top of this one.
 *
 */
export const MenuModal: React.FC<Props> = ({ isOpen, position, children }) => {
  const visibilityClassName = () =>
    isOpen ? styles["modal-menu-visible"] : styles["modal-menu-hidden"];

  return (
    <div
      style={position}
      className={`${styles["menu-modal"]} ${visibilityClassName()}`}
    >
      {children}
    </div>
  );
};
