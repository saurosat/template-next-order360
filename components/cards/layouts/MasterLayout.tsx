import Head from 'next/head';
import Link from 'next/link';
import { GridLayout, ListLayout } from './CardLayout';
import styles from "./MasterLayout.module.css";

type Props = {
    numLeftEles: number;
    rightPanelLayout: "list" | "grid";
    children: { leftElements: JSX.Element[], rightElements: JSX.Element[] };
}
function MasterLayout({ numLeftEles, rightPanelLayout, children }: Props) {
    let leftElements: JSX.Element[] = children.leftElements;
    let rightElements: JSX.Element[] = children.rightElements;

    return (
        <>
            <Head>
                <title>Okiest.com</title>
                <meta name="description" content="Product listing page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.layout_grid} >
                <div className={styles.left_panel}>
                    <div>
                        <header>
                            <Link href="/" className={styles.logo}>
                                <h1 className={styles.header}>Ok!est</h1>
                            </Link>
                        </header>
                        {leftElements}
                    </div>
                </div>
                <div className={styles.right_panel}>
                    {rightPanelLayout == "grid" ?
                        <GridLayout>{rightElements}</GridLayout> :
                        <ListLayout>{rightElements}</ListLayout>}
                </div>
            </main>
            <footer className={styles.footer}>
                Powered by {' Sauros '}
            </footer>
        </>
    );
}
export default MasterLayout;