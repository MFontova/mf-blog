"use client"

import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import Markdown from "markdown-to-jsx";
import { useEffect } from "react";
import javascript from "highlight.js/lib/languages/javascript.js"

export default function PostContent({content}: {content: string}) {
  useEffect(() => {
    hljs.registerLanguage('javascript', javascript);
    hljs.highlightAll()
  }, [content])
  return (
    <Markdown options={{wrapper: 'article'}}>
      {content}
    </Markdown>
  )
}