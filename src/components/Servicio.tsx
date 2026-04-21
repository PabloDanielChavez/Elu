"use client";

import style_servicio from "@/styles/sections/Servicio.module.scss";
import { IconBase } from "react-icons";
import { BiCalculator, BiMenu } from "react-icons/bi";
import { GiConverseShoe, GiSonicShoes } from "react-icons/gi";
import { LiaShoePrintsSolid } from "react-icons/lia";

export default function SobreNosotros() {
    return (
        <section className={style_servicio.servicio_section}>
            <div className={style_servicio.servicio_grid}>
                <div className={style_servicio.servicio_item}>
                    <div className={style_servicio.servicio_icono_flotante}>
                        <GiConverseShoe />
                    </div>
                    <div className={style_servicio.servicio_contenido}>
                        <h2 className={style_servicio.servicio_heading}>Personalizado</h2>
                        <p className={style_servicio.servicio_texto}>Elegí materiales y detalles que definen tu estilo. Creamos diseños exclusivos que hablan de vos.</p>
                    </div>
                </div>
                <div className={style_servicio.servicio_item}>
                    <div className={style_servicio.servicio_icono_flotante}>
                        <GiSonicShoes />
                    </div>
                    <div className={style_servicio.servicio_contenido}>
                        <h2 className={style_servicio.servicio_heading}>A medida</h2>
                        <p className={style_servicio.servicio_texto}>Logramos el calce perfecto para tu comodidad. Calzado diseñado para adaptarse a la forma de tus pies.</p>
                    </div>
                </div>
                <div className={style_servicio.servicio_item}>
                    <div className={style_servicio.servicio_icono_flotante}>
                        <LiaShoePrintsSolid />
                    </div>
                    <div className={style_servicio.servicio_contenido}>
                        <h2 className={style_servicio.servicio_heading}>Calidad</h2>
                        <p className={style_servicio.servicio_texto}>Mano de obra artesanal y cueros seleccionados que aseguran un zapato resistente y duradero.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}