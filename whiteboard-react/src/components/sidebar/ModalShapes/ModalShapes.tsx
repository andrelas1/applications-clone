import { ControlBtn, IconType } from "../../control/ControlBtn";
import { MenuModal } from "../../menu-modal/MenuModal";
import styles from "./ModalShapes.module.css";

type Props = {
  isOpen: boolean;
  position?: {
    left: string;
    top: string;
  };
};

export const ModalShapes: React.FC<Props> = ({ isOpen, position }) => {
  const icons: IconType[] = [
    "square",
    "rounded-square",
    "circle",
    "triangle",
    "angled-square",
    "text-talk",
    "trapezoid",
    "star",
    "arrow-right",
  ];

  return (
    <MenuModal isOpen={isOpen} position={position}>
      <div className={styles["icons-container"]}>
        {icons.map((icon) => (
          <ControlBtn iconType={icon} className={styles.icon} />
        ))}
      </div>
      <div className={styles["button-container"]}>
        <button type="button" className={styles["button-container"]}>
          All Shapes
        </button>
      </div>
    </MenuModal>
  );
};
