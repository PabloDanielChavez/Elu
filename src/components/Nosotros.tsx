"use client";

import style_nosotros from "@/styles/sections/Nosotros.module.scss";

export default function Nosotros() {
    return (
        <section className={style_nosotros.nosotros}>
            <div className={style_nosotros.nosotros_grid}>
                <div className={style_nosotros.nosotros_contenido}>
                    <h2 className={style_nosotros.nosotros_titulo}>ELU <span className={style_nosotros.nosotros_span}>Creaciones</span></h2>
                    <p className={style_nosotros.nosotros_texto}>
                        Nacimos de la pasión por el oficio zapatero, combinando técnicas tradicionales con la precisión que el mercado moderno exige. En nuestro taller de González Catán, cada par de zapatos es el resultado de un proceso meticuloso donde el cuero y la ergonomía se encuentran.
                    </p>
                    <p className={style_nosotros.nosotros_texto}>
                        No solo fabricamos calzado; construimos la base de tu confianza. Nuestra especialización en producción a fazón nos permite ser el aliado estratégico de marcas que buscan durabilidad, diseño y una terminación impecable.
                    </p>
                    <button className={style_nosotros.nosotros_btn}>
                        Nuestra Historia <span>→</span>
                    </button> 
                </div>
                <div className={style_nosotros.nosotros_imagen_box}>
                    <div className={style_nosotros.nosotros_circulo_decorativo}></div>
                    <img src="../img/zapatero trabajando.jpg" alt="Artesanía en calzado" className={style_nosotros.nosotros_imagen} />
                </div>
            </div>
        </section>
    );
}