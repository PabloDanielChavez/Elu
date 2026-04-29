import dynamic from 'next/dynamic';
import React, { ComponentType } from 'react';

// El archivo debe ser .tsx para que esto no de error
export const lazyComponent = (
  importFunc: () => Promise<{ default: ComponentType<any> }>, 
  ssr = true
) => {
  return dynamic(importFunc, {
    loading: () => <p className="loading-placeholder">Cargando...</p>,
    ssr: ssr,
  });
};