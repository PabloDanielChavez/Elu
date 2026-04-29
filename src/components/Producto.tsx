"use client";

import style_producto from "@/styles/sections/Producto.module.scss";

export default function Producto() {
    return (
        <main className={style_producto.producto}>
            <div className={style_producto.producto_layout}>
                
                {/* SECCIÓN SUPERIOR: Galería e Información Principal */}
                <section className={style_producto.hero_section}>
                    <div className={style_producto.galeria_box}>
                        <img 
                            src="../img/1.png" 
                            alt="Producto" 
                            className={style_producto.imagen_principal} 
                        />
                    </div>

                    <div className={style_producto.info_principal}>
                        <p className={style_producto.sku}>SKU: N1430 — EN STOCK</p>
                        <h1 className={style_producto.titulo}>Zapatilla Borceguí Premium</h1>
                        <p className={style_producto.precio}>$199.99</p>

                        <div className={style_producto.detalles_rapidos}>
                            <div className={style_producto.dato}>
                                <strong>ORIGEN</strong>
                                <span>Argentina</span>
                            </div>
                            <div className={style_producto.dato}>
                                <strong>MATERIAL</strong>
                                <span>Cuero Legítimo</span>
                            </div>
                        </div>

                        <div className={style_producto.acciones}>
                            <div className={style_producto.selector_cantidad}>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <button className={style_producto.btn_comprar}>
                                CONSULTAR STOCK
                            </button>
                        </div>
                    </div>
                </section>

                <hr className={style_producto.separador} />

                {/* SECCIÓN MEDIA: Información Técnica */}
                <section className={style_producto.detalles_tecnicos}>
                    <div className={style_producto.columna_descripcion}>
                        <h3>Información del Taller</h3>
                        <p>
                            Nuestras piezas son fabricadas artesanalmente en González Catán. 
                            Utilizamos procesos de curado tradicionales para asegurar la máxima durabilidad.
                        </p>
                    </div>
                    <div className={style_producto.columna_specs}>
                        <h3>Especificaciones Adicionales</h3>
                        <ul className={style_producto.lista_specs}>
                            <li><strong>Suela:</strong> Caucho antideslizante</li>
                            <li><strong>Peso:</strong> 1.2 kg</li>
                            <li><strong>Costura:</strong> Reforzada doble</li>
                        </ul>
                    </div>
                </section>

            </div>
        </main>
    );
}