import dynamic from 'next/dynamic';
import { lazyComponent } from '@/lib/dynamic-loader';

import Bienvenida from "@/components/Bienvenida";
import Header from "@/components/Header";
import Servicio from "@/components/Servicio";
const Catalogo = lazyComponent(() => import("@/components/Catalogo"));
const Nosotros = lazyComponent(() => import("@/components/Nosotros"));
import Footer from "@/components/Footer";

export default async function Home() {

  return (
    <>
      <Header />
      <main>
        <Bienvenida />
        <Servicio />
        <Catalogo />
        <Nosotros />
      </main>
      <Footer />
    </>
  );
}