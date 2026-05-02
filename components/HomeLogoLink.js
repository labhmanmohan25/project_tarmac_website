"use client";

import Link from "next/link";
import { useHomeLogoHref } from "../lib/homeRoute";

export default function HomeLogoLink({ children, style, className }) {
  const href = useHomeLogoHref();
  return (
    <Link href={href} style={style} className={className}>
      {children}
    </Link>
  );
}
