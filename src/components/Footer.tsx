"use client";

import style_footer from "@/styles/sections/Footer.module.scss";
import Link from "next/link";

export default function Nosotros() {
    return (
        <footer className={style_footer.footer}>
            <div className={style_footer.footer_layout}>
                <div className={style_footer.footer_box}>
                    <span className={style_footer.footer_span}>
                        <h2 className={style_footer.footer_h2}>ELU <span className={style_footer.footer_span}>Creaciones</span></h2>
                    </span>
                </div>
                <div className={`${style_footer.footer_box} ${style_footer.footer_brands}`}>
                    <p>
                        Copyright © 2026 Pablo Daniel Chavez. 
                        <span> | </span>
                        <Link href="https://portafolio-6jlx.onrender.com">Ver Portafolio</Link>
                        <span> | </span>
                        Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}