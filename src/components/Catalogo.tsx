"use client";

import style_catalogo from "@/styles/sections/Catalogo.module.scss";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Catalogo() {
    return (
        <section className={style_catalogo.catalogo}>
            <div className={style_catalogo.catalogo_grid}>
                <div className={style_catalogo.catalogo_card}>
                    <div className={style_catalogo.catalogo_imagen_container}>
                        <Image 
                            className={style_catalogo.catalogo_img}
                            src="/img/1.png" 
                            alt="Borcegos"
                            width={200}
                            height={200}
                            priority
                        />
                        <span className={style_catalogo.catalogo_rating}>4.9 ★</span>
                    </div>
                    <div className={style_catalogo.catalogo_info}>
                        <h3 className={style_catalogo.catalogo_titulo}>Borcegos</h3>
                        <p className={style_catalogo.catalogo_desc}>Cuero sintético, suela de caucho y máximo confort para el día a día.</p>
                        <div className={style_catalogo.catalogo_footer}>
                            <span className={style_catalogo.catalogo_precio}>$25.000</span>
                            <Link
                                href={`https://wa.me/5491158007420?text=https://elu-r0f5.onrender.com%20Hola!%20Me%20gustaría%20más%20información%20sobre:%Borcegos`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={style_catalogo.catalogo_btn_add}
                            ><IoLogoWhatsapp /></Link>
                        </div>
                    </div>
                </div>
                
                <div className={style_catalogo.catalogo_card}>
                    <div className={style_catalogo.catalogo_imagen_container}>
                        <Image 
                            className={style_catalogo.catalogo_img}
                            src="/img/2.png" 
                            alt="Zapato Deportivo"
                            width={200}
                            height={200}
                            priority
                        />
                        <span className={style_catalogo.catalogo_rating}>5.0 ★</span>
                    </div>
                    <div className={style_catalogo.catalogo_info}>
                        <h3 className={style_catalogo.catalogo_titulo}>Zapato</h3>
                        <p className={style_catalogo.catalogo_desc}>Diseño minimalista en cuero legítimo con acabados artesanales.</p>
                        <div className={style_catalogo.catalogo_footer}>
                            <span className={style_catalogo.catalogo_precio}>$28.2000</span>
                            <Link
                                href={`https://wa.me/5491158007420?text=https://elu-r0f5.onrender.com%20Hola!%20Me%20gustaría%20más%20información%20sobre:%Zapato`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={style_catalogo.catalogo_btn_add}
                            ><IoLogoWhatsapp /></Link>
                        </div>
                    </div>
                </div>

                <div className={style_catalogo.catalogo_card}>
                    <div className={style_catalogo.catalogo_imagen_container}>
                        <Image 
                            className={style_catalogo.catalogo_img}
                            src="/img/3.png" 
                            alt="Zapatillas"
                            width={200}
                            height={200}
                            priority
                        />
                        <span className={style_catalogo.catalogo_rating}>4.7 ★</span>
                    </div>
                    <div className={style_catalogo.catalogo_info}>
                        <h3 className={style_catalogo.catalogo_titulo}>Zapatillas</h3>
                        <p className={style_catalogo.catalogo_desc}>Resistencia y distinción. Ideal para marcas de alto rendimiento.</p>
                        <div className={style_catalogo.catalogo_footer}>
                            <span className={style_catalogo.catalogo_precio}>$32.000</span>
                            <Link
                                href={`https://wa.me/5491158007420?text=https://elu-r0f5.onrender.com%20Hola!%20Me%20gustaría%20más%20información%20sobre:%Zapatillas`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={style_catalogo.catalogo_btn_add}
                            ><IoLogoWhatsapp /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}