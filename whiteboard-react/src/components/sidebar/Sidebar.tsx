import { useState } from "react";
import { ControlBtn, IconType } from "../control/ControlBtn";
import { MenuModal } from "../menu-modal/MenuModal";
import { ModalShapes } from "./ModalShapes/ModalShapes";
import styles from "./Sidebar.module.css";

const icons: IconType[] = [
  "mouse-pointer",
  "templates",
  "text",
  "sticky-note",
  "shapes",
  "line",
  "pen",
  "comment",
  "frame",
  "upload",
  "more-tools",
];

export const Sidebar: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onButtonClick = (iconType: IconType) => {
    if (iconType === "shapes") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={styles.sidebar}>
      {icons.map((icon) => (
        <ControlBtn
          className={styles["sidebar-control"]}
          iconType={icon}
          onClickHandler={onButtonClick}
        />
      ))}
      <ModalShapes isOpen={isOpen} position={{ left: "60px", top: "85px" }} />
    </div>
  );
};
