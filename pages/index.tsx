import { Box } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return(
    <div
      className="services"
    >
      <div>
        <Link href={"/TextRewriter"}>JSON formmater for Text Rewriter Extension</Link>
      </div>
    </div>
  )
}