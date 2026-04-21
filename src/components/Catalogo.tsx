"use client";

import style_catalogo from "@/styles/sections/Catalogo.module.scss";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Catalogo() {
    return (
        <section className={style_catalogo.catalogo}>
            <div className={style_catalogo.catalogo_grid}>
                <div className={style_catalogo.catalogo_card}>
                    <div className={style_catalogo.catalogo_imagen_container}>
                        <img src="../img/1.png" alt="Zapato Deportivo" className={style_catalogo.catalogo_img} />
                        <span className={style_catalogo.catalogo_rating}>4.9 ★</span>
                    </div>
                    <div className={style_catalogo.catalogo_info}>
                        <h3 className={style_catalogo.catalogo_titulo}>Borcegos</h3>
                        <p className={style_catalogo.catalogo_desc}>Cuero sintético, suela de caucho y máximo confort para el día a día.</p>
                        <div className={style_catalogo.catalogo_footer}>
                            <span className={style_catalogo.catalogo_precio}>$25.000</span>
                            <Link
                                href={`https://wa.me/5491158007420?text=Hola!%20Me%20gustaría%20más%20información%20sobre:%20Borcegos`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className={style_catalogo.catalogo_btn_add}><IoLogoWhatsapp /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className={style_catalogo.catalogo_card}>
                    <div className={style_catalogo.catalogo_imagen_container}>
                        <img src="../img/2.png" alt="Zapato Deportivo" className={style_catalogo.catalogo_img} />
                        <span className={style_catalogo.catalogo_rating}>5.0 ★</span>
                    </div>
                    <div className={style_catalogo.catalogo_info}>
                        <h3 className={style_catalogo.catalogo_titulo}>Zapato</h3>
                        <p className={style_catalogo.catalogo_desc}>Diseño minimalista en cuero legítimo con acabados artesanales.</p>
                        <div className={style_catalogo.catalogo_footer}>
                            <span className={style_catalogo.catalogo_precio}>$28.500</span>
                            <Link
                                href={`https://wa.me/5491158007420?text=Hola!%20Me%20gustaría%20más%20información%20sobre:%20Zapato`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className={style_catalogo.catalogo_btn_add}><IoLogoWhatsapp /></button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={style_catalogo.catalogo_card}>
                    <div className={style_catalogo.catalogo_imagen_container}>
                        <img src="../img/3.png" alt="Zapato Deportivo" className={style_catalogo.catalogo_img} />
                        <span className={style_catalogo.catalogo_rating}>4.7 ★</span>
                    </div>
                    <div className={style_catalogo.catalogo_info}>
                        <h3 className={style_catalogo.catalogo_titulo}>Zapatillas</h3>
                        <p className={style_catalogo.catalogo_desc}>Resistencia y distinción. Ideal para marcas de alto rendimiento.</p>
                        <div className={style_catalogo.catalogo_footer}>
                            <span className={style_catalogo.catalogo_precio}>$32.000</span>
                            <Link
                                href={`https://wa.me/5491158007420?text=Hola!%20Me%20gustaría%20más%20información%20sobre:%20Zapatillas`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className={style_catalogo.catalogo_btn_add}><IoLogoWhatsapp /></button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={style_catalogo.catalogo_card}>
                    <div className={style_catalogo.catalogo_imagen_container}>
                        <img src="../img/1.png" alt="Zapato Deportivo" className={style_catalogo.catalogo_img} />
                        <span className={style_catalogo.catalogo_rating}>4.7 ★</span>
                    </div>
                    <div className={style_catalogo.catalogo_info}>
                        <h3 className={style_catalogo.catalogo_titulo}>Zapatito</h3>
                        <p className={style_catalogo.catalogo_desc}>Resistencia y distinción. Ideal para marcas de alto rendimiento.</p>
                        <div className={style_catalogo.catalogo_footer}>
                            <span className={style_catalogo.catalogo_precio}>$32.000</span>
                            <Link
                                href={`https://wa.me/5491158007420?text=Hola!%20Me%20gustaría%20más%20información%20sobre:%20Zapatito`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className={style_catalogo.catalogo_btn_add}><IoLogoWhatsapp /></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}