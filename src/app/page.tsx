"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { replace } = useRouter();

  useEffect(() => {
    replace("/home");
  }, []);

  return null;
}
