// export const dynamic = 'force-dynamic';

import Bienvenida from "@/components/Bienvenida";
import Header from "@/components/Header";
import Servicio from "@/components/Servicio";
import Catalogo from "@/components/Catalogo";
import Nosotros from "@/components/Nosotros";
import Footer from "@/components/Footer";


// async function getData() {
//   const urlBase = process.env.NEXT_PUBLIC_API_URL;

//   if (!urlBase) {
//     console.error(" ERROR: NEXT_PUBLIC_API_URL no está definida.");
//     return {}; 
//   }

//   const endpoints = ['perfil', 'habilidades', 'experiencia', 'servicios', 'trabajos', 'clientes'];

//   try {
//     const promesas = endpoints.map(endpoint => 
//       fetch(`${urlBase}${endpoint}`, { cache: "no-store" })
//         .then(res => res.ok ? res.json() : [])
//         .catch(() => []) 
//     );

//     const resultados = await Promise.all(promesas);

//     interface DataResult {
//       [key: string]: any;
//     }

//     const dataFinal = endpoints.reduce((acc: DataResult, name, index) => {
//       const key = name.charAt(0).toUpperCase() + name.slice(1);
//       acc[key] = resultados[index];
//       return acc;
//     }, {} as DataResult);

//     return dataFinal;
//   } catch (error) {
//     console.error("Error crítico al obtener datos:", error);
//     return {};
//   }
// }

export default async function Home() {
  // const data = await getData();

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