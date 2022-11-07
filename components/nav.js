import Link from "next/link";
import Image from "next/image";
import favicon from '../public/favicon.ico';
import style from '../styles/Nav.module.css';


export default function Nav() {
    return (
        <nav className={style.nav}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{margin: 0, padding: "8px", background: "white", borderRadius: ".7rem", marginRight: "1rem"}}>
                    <Image src={favicon} height={64} width={64} alt={"Logo"}/>
                </div>
                <h1>FemArch</h1>
            </div>
            <div className={style.list}>
                <div>
                    <Link href={"/"}>
                        Home
                    </Link>
                </div>
                <div>
                    <Link href={"//wiki.archlinux.org/"}>
                        Wiki
                    </Link>
                </div>
                <div>
                    <Link href={"//github.com/FemArch/FemArch"}>
                        Source
                    </Link>
                </div>
                <div>
                    <Link href={"//github.com/FemArch/FemArch/issues"}>
                        Bugs
                    </Link>
                </div>
            </div>
        </nav>
    )
}
