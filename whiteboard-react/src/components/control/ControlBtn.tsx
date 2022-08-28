import styles from "./ControlBtn.module.css";

import { IconTemplates } from "./icons/IconTemplates";
import { IconText } from "./icons/IconText";
import { IconStickyNote } from "./icons/IconStickyNote";
import { IconShapes } from "./icons/IconShapes";
import { IconLine } from "./icons/IconLine";
import { IconPen } from "./icons/IconPen";
import { IconCommment } from "./icons/IconComment";
import { IconFrame } from "./icons/IconFrame";
import { IconUpload } from "./icons/IconUpload";
import { IconMoreTools } from "./icons/IconMoreTools";
import { IconMousePointer } from "./icons/IconMousePointer";
import { IconSquare } from "./icons/IconSquare";
import { IconRoundedSquare } from "./icons/IconRoundedSquare";
import { IconAngledSquare } from "./icons/IconAngledSquare";
import { IconTrapezoid } from "./icons/IconTrapezoid";
import { IconArrowRight } from "./icons/IconArrowRight";
import { IconCircle } from "./icons/IconCircle";
import { IconTextTalk } from "./icons/IconTextTalk";
import { IconStar } from "./icons/IconStar";
import { IconTriangle } from "./icons/IconTriangle";

export const iconTypes = [
  "rounded-square",
  "trapezoid",
  "triangle",
  "text-talk",
  "circle",
  "angled-square",
  "arrow-right",
  "star",
  "square",
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
] as const;

export type IconType = typeof iconTypes[number];

export const ControlBtn: React.FC<{
  iconType: IconType;
  className: string;
  onClickHandler?: (iconType: IconType) => void;
}> = ({ iconType, className, onClickHandler }) => {
  const Icon = getIcon(iconType);
  return (
    <div
      className={`${className} ${styles.icon}`}
      onClick={() => onClickHandler?.(iconType)}
    >
      <Icon />
    </div>
  );
};

const getIcon = (icon: IconType) => {
  switch (icon) {
    case "rounded-square":
      return IconRoundedSquare;
    case "angled-square":
      return IconAngledSquare;
    case "arrow-right":
      return IconArrowRight;
    case "triangle":
      return IconTriangle;
    case "star":
      return IconStar;
    case "circle":
      return IconCircle;
    case "text-talk":
      return IconTextTalk;
    case "trapezoid":
      return IconTrapezoid;
    case "square":
      return IconSquare;
    case "templates":
      return IconTemplates;
    case "text":
      return IconText;
    case "sticky-note":
      return IconStickyNote;
    case "shapes":
      return IconShapes;
    case "line":
      return IconLine;
    case "pen":
      return IconPen;
    case "comment":
      return IconCommment;
    case "frame":
      return IconFrame;
    case "upload":
      return IconUpload;
    case "more-tools":
      return IconMoreTools;
    case "mouse-pointer":
    default:
      return IconMousePointer;
  }
};

// nice code but not needed
const iconTypeToCamelCase: (iconType: IconType) => string = (iconType) => {
  const regexLetterAfterDash = /(?<=-)\w/g;
  const regexDashAndLetter = /-\w/;
  const indexDash = iconType.indexOf("-");

  const regexIterator = iconType.matchAll(regexLetterAfterDash);
  let camelCasedStr = "";
  for (let iteratee of regexIterator) {
    const value = iteratee[0].toUpperCase();
    camelCasedStr = iconType.replace(regexDashAndLetter, value);
  }

  return `${camelCasedStr}Svg`;
};
