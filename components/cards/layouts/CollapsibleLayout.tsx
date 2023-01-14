import { useEffect, useState } from "react";
import style from "./CollapsibleLayout.module.css";
type CollapsibleProps = {
    title: string;
    children: JSX.Element;
}
function CollapsibleLayout({ title, children }: CollapsibleProps) {

    const [showButton, setShowButton] = useState(true);
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > window.innerHeight && window.innerWidth >= 600) { //viewport is landscape and wide atleast 600px:
                setShowButton(false);
                setIsOpen(true);
            } else {
                setShowButton(true);
                setIsOpen(false);
            }
            //alert('Width: ' + window.innerWidth + ', height: ' + window.innerHeight + ' isOpen=' + isOpen + ', showButton=' + showButton);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const [isOpen, setIsOpen] = useState(!showButton);
    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <div className={style.container}>
            <div className={style.title}>
                <h3>{title}</h3>
                {showButton ? <button type="button" className={style.collapsible} onClick={handleClick}>{isOpen ? "-" : "+"}</button> : null}
            </div>

            <div className={isOpen ? style.content_show : style.content_hide}>
                {children}
            </div>
        </div>
    );
}
export default CollapsibleLayout;