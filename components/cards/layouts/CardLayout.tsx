import style from "./CardLayout.module.css";

type Cards = {
  children: JSX.Element[]
}

export function ListLayout({ children }: Cards) {
  return (
    <div className={style.layout_list}>{children}</div>
  );
}

export function GridLayout({ children }: Cards) {
  return (
    <div className={style.layout_grid}>{children}</div>
  );
}  