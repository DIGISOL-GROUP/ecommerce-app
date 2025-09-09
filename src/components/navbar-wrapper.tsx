import React, { useEffect, useState } from "react";

"use client";
// Removed next/dynamic import. Use standard import instead.

const NavbarMenu = dynamic(() => import("./ui/navbar-menu"), { ssr: false });

function dynamic(
  importFn: () => Promise<any>,
  options: { ssr: boolean }
) {
  // Only run on client if ssr: false
  const DynamicComponent = (props: any) => {
    const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);

    useEffect(() => {
      let mounted = true;
      importFn().then((mod) => {
        if (mounted) setComponent(() => mod.default || mod);
      });
      return () => {
        mounted = false;
      };
    }, []);

    if (!Component) return null;
    return <Component {...props} />;
  };

  return DynamicComponent;
}

