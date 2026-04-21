"use client";

import style_bienvenida from "@/styles/sections/Bienvenida.module.scss";
import Link from "next/link";

export default function Bienvenida() {
    return (
        <section className={style_bienvenida.bienvenida}>
            <div className={style_bienvenida.bienvenida_layout}>
                <article className={style_bienvenida.bienvenida_header}>
                    <div className={style_bienvenida.bienvenida_header_box_informacion}>
                        <h1 className={style_bienvenida.bienvenida_header_h1_titulo}>
                            <span className={style_bienvenida.bienvenida_header_span_tag}>creaciones</span>
                            ELU
                        </h1>
                        <span className={style_bienvenida.bienvenida_header_span_tag} >
                            Nuestra Zapatería - ELU Creaciones
                        </span>
                        <p className={style_bienvenida.bienvenida_header_p_descripcion} >
                            Brindamos soluciones a medida para marcas que exigen distinción y durabilidad en cada par. Nuestra experiencia garantiza un producto final de alta gama.
                        </p>
                        <div className={style_bienvenida.bienvenida_header_box_btn}>
                            <Link href="https://wa.me/5491158007420">
                                <button className={style_bienvenida.bienvenida_header_btn}>
                                    <span className={style_bienvenida.bienvenida_header_btn_span}>ENVIAR MENSAJE</span>
                                </button>
                            </Link>
                            <Link href="tel:+5491158007420">
                                <button className={style_bienvenida.bienvenida_header_btn}>
                                    <span className={style_bienvenida.bienvenida_header_btn_span}>LLAMAR</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className={style_bienvenida.bienvenida_header_box_imagen}>
                        <div className={style_bienvenida.circulo_fondo}> <img className={style_bienvenida.bienvenida_header_imagen} src="../img/1.png" alt="ZAPATO" />
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}