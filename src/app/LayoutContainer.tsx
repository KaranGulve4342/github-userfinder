/** @format */
"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

export default function LayoutContainer({ children }: Props) {
// const [isClient, setIsClient] = useState(false)
 
//   useEffect(() => {
//     setIsClient(true)
//   }, [])

  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}