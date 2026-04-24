const qnaScript = document.createElement("script");

qnaScript.src = "https://giscus.app/client.js";
qnaScript.setAttribute("data-repo", "chagpts/start");
qnaScript.setAttribute("data-repo-id", "R_kgDOSGxCnw");
qnaScript.setAttribute("data-category", "Q&A");
qnaScript.setAttribute("data-category-id", "DIC_kwDOSGxCn84C7kv6");
qnaScript.setAttribute("data-mapping", "specific");
qnaScript.setAttribute("data-term", "qna-board");
qnaScript.setAttribute("data-strict", "0");
qnaScript.setAttribute("data-reactions-enabled", "1");
qnaScript.setAttribute("data-emit-metadata", "0");
qnaScript.setAttribute("data-input-position", "bottom");
qnaScript.setAttribute("data-theme", "light");
qnaScript.setAttribute("data-lang", "ko");
qnaScript.setAttribute("crossorigin", "anonymous");
qnaScript.async = true;

document.body.appendChild(qnaScript);
