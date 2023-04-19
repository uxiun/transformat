import { Box } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return(
    <div
      className="services"
    >
      <>
        <h1>transformat</h1>
      </>
      <>
        <h2><Link href={"/TextRewriter"}>JSON formmater for Text Rewriter Extension</Link></h2>
      </>
    </div>
  )
}