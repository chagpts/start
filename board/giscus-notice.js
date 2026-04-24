const noticeScript = document.createElement("script");

noticeScript.src = "https://giscus.app/client.js";
noticeScript.setAttribute("data-repo", "chagpts/start");
noticeScript.setAttribute("data-repo-id", "R_kgDOSGxCnw");
noticeScript.setAttribute("data-category", "Announcements");
noticeScript.setAttribute("data-category-id", "DIC_kwDOSGxCn84C7kv4");
noticeScript.setAttribute("data-mapping", "specific");
noticeScript.setAttribute("data-term", "notice-board");
noticeScript.setAttribute("data-strict", "0");
noticeScript.setAttribute("data-reactions-enabled", "1");
noticeScript.setAttribute("data-emit-metadata", "0");
noticeScript.setAttribute("data-input-position", "bottom");
noticeScript.setAttribute("data-theme", "light");
noticeScript.setAttribute("data-lang", "ko");
noticeScript.setAttribute("crossorigin", "anonymous");
noticeScript.async = true;

document.body.appendChild(noticeScript);
