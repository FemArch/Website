import Image from "next/image";
import favicon from '../public/favicon.ico';
import style from '../styles/Nav.module.css';


export default function Nav() {
    return (
        <nav className={style.nav}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginRight: "2rem"}}>
                <div style={{margin: 0, padding: "8px", background: "white", borderRadius: ".7rem", marginRight: "1rem"}}>
                    <Image src={favicon} height={64} width={64} alt={"Logo"}/>
                </div>
                <h1>FemArch</h1>
            </div>
            <div className={style.list}>
                <div>
                    <a href={"/"}>
                        Home
                    </a>
                </div>
                <div>
                    <a href={"https://wiki.archlinux.org/"}>
                        Wiki
                    </a>
                </div>
                <div>
                    <a href={"https://github.com/FemArch/FemArch"}>
                        Source
                    </a>
                </div>
                <div>
                    <a href={"https://github.com/FemArch/FemArch/issues"}>
                        Bugs
                    </a>
                </div>
            </div>
        </nav>
    )
}
