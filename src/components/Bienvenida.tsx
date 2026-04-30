"use client";

import style_bienvenida from "@/styles/sections/Bienvenida.module.scss";
import Image from "next/image";
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
                        <p className={style_bienvenida.bienvenida_header_p_descripcion} >
                            Brindamos soluciones a medida para marcas que exigen distinción y durabilidad en cada par. Nuestra experiencia garantiza un producto final de alta gama.
                        </p>
                        <div className={style_bienvenida.bienvenida_header_box_btn}>
                            <Link className={style_bienvenida.bienvenida_header_btn} 
                                href="https://wa.me/5491158007420?text=Hola%2C%20vi%20su%20web%20(https%3A%2F%2Felucalzados.netlify.app)%20y%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20modelos%20disponibles.%20%C2%BFPodr%C3%ADan%20asesorarme%3F"
                                aria-label="Enviar mensaje por WhatsApp para consultar modelos disponibles"
                            >MENSAJE
                            </Link>
                            <a 
                                className={style_bienvenida.bienvenida_header_btn} 
                                href="tel:+5491158007420"
                                aria-label="Llamar para consultar modelos disponibles"
                            >LLAMAR
                            </a>
                        </div>
                    </div>
                    <div className={style_bienvenida.bienvenida_header_box_imagen}>
                        <div className={style_bienvenida.circulo_fondo}>
                            <Image 
                                className={style_bienvenida.bienvenida_header_imagen}
                                src="/img/1.png" 
                                alt="ZAPATO"
                                width={200}
                                height={200}
                                sizes="200px"
                                priority
                            />
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}