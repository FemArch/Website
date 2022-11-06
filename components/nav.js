import Link from "next/link";
import Image from "next/image";
import favicon from '../public/favicon.ico';
import style from '../styles/Nav.module.css';


export default function Nav() {
    return (
        <nav className={style.nav}>
            <div style={{margin: 0, padding: "8px", background: "white", borderRadius: ".7rem"}}>
                <Image src={favicon} height={64} width={64} alt={"Logo"}/>
            </div>
            <div>
                <h1>FemArch</h1>
            </div>
            <div className={style.list}>
                <div>
                    <a href={"//example.com"}>
                        Example URL
                    </a>
                </div>
                <div>
                    <a href={"//example.com"}>
                        Example URL 2
                    </a>
                </div>
            </div>
        </nav>
    )
}
