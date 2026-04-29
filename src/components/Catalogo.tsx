"use client";

import style_catalogo from "@/styles/sections/Catalogo.module.scss";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

const productos = [
    { id: 1, nombre: "Borcego", desc: "Cuero, suela de caucho y máximo confort para el trabajo.", precio: "70.000", img: "/img/1.png", talle: `39 - 46` },
    { id: 2, nombre: "Zapato", desc: "Diseño minimalista en cuero, con acabados artesanales.", precio: "70.000", img: "/img/2.png" , talle: `39 - 46` },
    { id: 3, nombre: "Zapatillas", desc: "descripcion", precio: "50.000", img: "/img/3.png" , talle: `39 - 46` },
    { id: 4, nombre: "Zapato de Mujer", desc: "descripcion", precio: "50.000", img: "/img/4.png" , talle: `39 - 46` },
    { id: 5, nombre: "Sandalias", desc: "descripcion", precio: "50.000", img: "/img/5.png" , talle: `39 - 46` },
];

export default function Catalogo() {
    return (
        <section className={style_catalogo.catalogo}>
            <div className={style_catalogo.catalogo_grid}>   
                {productos.map((prod) => (
                    <article key={prod.id} className={style_catalogo.catalogo_card}>
                        <div className={style_catalogo.catalogo_imagen_container}>
                            <Image 
                                className={style_catalogo.catalogo_img}
                                src={prod.img}
                                alt={prod.nombre}
                                width={200}
                                height={200}
                                priority
                            />
                            <span className={style_catalogo.catalogo_rating}>{prod.talle}</span>
                        </div>
                        <div className={style_catalogo.catalogo_info}>
                            <h3 className={style_catalogo.catalogo_titulo}>{prod.nombre}</h3>
                            <p className={style_catalogo.catalogo_desc}>{prod.desc}</p>
                            <div className={style_catalogo.catalogo_footer}>
                                <span className={style_catalogo.catalogo_precio}>${prod.precio}</span>
                                <Link
                                    href={`https://wa.me/5491158007420?text=https%3A%2F%2Felucalzados.netlify.app%0AHola!%20Me%20gustaría%20más%20información%20sobre:%0AProducto:%20${prod.nombre}%0APrecio:%20$${prod.precio}%0ADescripción:%20${prod.desc}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={style_catalogo.catalogo_btn_add}
                                ><IoLogoWhatsapp /></Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}