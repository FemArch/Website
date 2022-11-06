import Head from "next/head";
import style from '../styles/index.module.css'


export default function Home() {
    return (
        <div>
            <Head>
                <title>FemArch - Home</title>
            </Head>
            <div style={{textAlign: "center"}}>
                <h1 className={style.title}>FemArch</h1>
                <h1>You were wearing programming socks anyway</h1>
            </div>
        </div>
    )
}
