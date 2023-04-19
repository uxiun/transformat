import Entries from "./entries"
import EntryForm from "./entryForm"
import ParseForm from "../form"
import JSONoutput from "./output"
import Link from "next/link"
export default function Home() {
  return <>
    <h1>
      <Link href={"/"}>{".."}</Link>
      {" / JSON formatter for "}
      <a href="https://chrome.google.com/webstore/detail/text-rewriter/abmchgifbehnkekmmfmkkgdbhcphmeoi">
        Text Rewriter Extension
      </a>
    </h1>
    <EntryForm/>
    <Entries/>
    <JSONoutput />
    {/* <ParseForm/> */}
  </>
}