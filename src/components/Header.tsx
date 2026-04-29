"use client";

import style_header from "@/styles/sections/Header.module.scss";
import Image from "next/image";
import { IconBase } from "react-icons";
import { BiMenu } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { GiConverseShoe } from "react-icons/gi";

export default function Header() {
    return (
        <header className={style_header.header}>
            <div className={style_header.header_layout}>
                <div className={style_header.header_box}>
                    <Image 
                        // className={style_header.header_box} 
                        src="/img/ELU_logo.png" 
                        alt="LOGOTIPO"
                        width={50}
                        height={50}
                        priority
                    />
                </div>

                <div className={style_header.header_box}>
                    <span className={style_header.header_span}>
                        <a className={style_header.header_p_telefono} href="tel:+542202434769">
                        <BsTelephoneFill className={style_header.icono_clase} />
                        </a>
                    </span>
                </div>
            </div>
        </header>
    );
}