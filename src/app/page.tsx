"use client";

import dynamic from "next/dynamic";

const HomeClient = dynamic(() => import("../components/home.tsx"), {
  ssr: false,
});

export default function Page() {
  return <HomeClient />;
}
