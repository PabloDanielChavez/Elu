// export const dynamic = 'force-dynamic';

import Bienvenida from "@/components/Bienvenida";
import Header from "@/components/Header";
import Servicio from "@/components/Servicio";
import Catalogo from "@/components/Catalogo";
import Nosotros from "@/components/Nosotros";
import Footer from "@/components/Footer";

export default async function Home() {

  return (
    <>
      <Header /*experiencia={data.Experiencia} *//>
      <Bienvenida /*perfil={data.Perfil}*/ />
      <Servicio /*habilidades={data.Habilidades} *//>
      <Catalogo /*servicios={data.Servicios} *//>
      <Nosotros /*servicios={data.Servicios} *//>
      <Footer /*servicios={data.Servicios} *//>
    </>
  );
}