exports.id=318,exports.ids=[318],exports.modules={84044:(e,t,s)=>{let n={a7f895f5c3cf690a5f7e2f1c37d99b34d66f441b:()=>Promise.resolve().then(s.bind(s,75800)).then(e=>e.tooglePostLikeStatus),b61d02b51f12baf31f3c59f371aaf188eb47e554:()=>Promise.resolve().then(s.bind(s,75800)).then(e=>e.createPost)};async function r(e,...t){return(await n[e]()).apply(null,t)}e.exports={a7f895f5c3cf690a5f7e2f1c37d99b34d66f441b:r.bind(null,"a7f895f5c3cf690a5f7e2f1c37d99b34d66f441b"),b61d02b51f12baf31f3c59f371aaf188eb47e554:r.bind(null,"b61d02b51f12baf31f3c59f371aaf188eb47e554")}},76970:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,33688,23)),Promise.resolve().then(s.t.bind(s,73510,23))},65631:(e,t,s)=>{Promise.resolve().then(s.bind(s,38873))},24212:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,15157,23)),Promise.resolve().then(s.t.bind(s,52144,23)),Promise.resolve().then(s.t.bind(s,63582,23)),Promise.resolve().then(s.t.bind(s,9587,23)),Promise.resolve().then(s.t.bind(s,65329,23)),Promise.resolve().then(s.t.bind(s,50599,23))},38873:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var n=s(27908);function r({action:e}){return n.jsx("button",{className:"like-button",children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"})})})}s(65888);var a=s(8412),i=(0,a.$)("a7f895f5c3cf690a5f7e2f1c37d99b34d66f441b");(0,a.$)("b61d02b51f12baf31f3c59f371aaf188eb47e554");var o=s(32178);function l({post:e,action:t}){var s;return(0,n.jsxs)("article",{className:"post",children:[n.jsx("div",{className:"post-image",children:n.jsx("img",{src:e.image,alt:e.title})}),(0,n.jsxs)("div",{className:"post-content",children:[(0,n.jsxs)("header",{children:[(0,n.jsxs)("div",{children:[n.jsx("h2",{children:e.title}),(0,n.jsxs)("p",{children:["Shared by ",e.userFirstName," on"," ",n.jsx("time",{dateTime:e.createdAt,children:(s=e.createdAt,new Intl.DateTimeFormat("en-US",{dateStyle:"medium",timeStyle:"short"}).format(new Date(s)))})]})]}),n.jsx("div",{children:n.jsx("form",{action:t.bind(null,e.id),className:e.isLiked?"liked":"",children:n.jsx(r,{})})})]}),n.jsx("p",{children:e.content})]})]})}function d({posts:e}){let[t,s]=(0,o.useOptimistic)(e,(e,t)=>{let s=e.findIndex(e=>e.id===t);if(-1===s)return e;let n={...e[s]};n.likes=n.likes+(n.isLiked?-1:1),n.isLiked=!n.isLiked;let r=[...e];return r[s]=n,r});if(!t||0===t.length)return n.jsx("p",{children:"There are no posts yet. Maybe start sharing some?"});async function r(e){s(e),await i(e)}return n.jsx("ul",{className:"posts",children:t.map(e=>n.jsx("li",{children:n.jsx(l,{post:e,action:r})},e.id))})}},75800:(e,t,s)=>{"use strict";s.r(t),s.d(t,{createPost:()=>E,tooglePostLikeStatus:()=>m});var n=s(63722);s(20453);var r=s(67678);if(!process.env.CLOUDINARY_CLOUD_NAME)throw Error("CLOUDINARY_CLOUD_NAME is not set");if(!process.env.CLOUDINARY_API_KEY)throw Error("CLOUDINARY_API_KEY is not set");if(!process.env.CLOUDINARY_API_SECRET)throw Error("CLOUDINARY_API_SECRET is not set");async function a(e){let t=await e.arrayBuffer(),s=e.type,n=Buffer.from(t).toString("base64");return(await r.v2.uploader.upload("data:"+s+";base64,"+n,{folder:"nextjs-course-mutations"})).secure_url}r.v2.config({cloud_name:process.env.CLOUDINARY_CLOUD_NAME,api_key:process.env.CLOUDINARY_API_KEY,api_secret:process.env.CLOUDINARY_API_SECRET});var i=s(85890);let o=new(s.n(i)())("posts.db");async function l(e){let t=o.prepare(`
    INSERT INTO posts (image_url, title, content, user_id)
    VALUES (?, ?, ?, ?)`);return await new Promise(e=>setTimeout(e,1e3)),t.run(e.imageUrl,e.title,e.content,e.userId)}async function d(e,t){if(0===o.prepare(`
    SELECT COUNT(*) AS count
    FROM likes
    WHERE user_id = ? AND post_id = ?`).get(t,e).count){let s=o.prepare(`
      INSERT INTO likes (user_id, post_id)
      VALUES (?, ?)`);return await new Promise(e=>setTimeout(e,1e3)),s.run(t,e)}{let s=o.prepare(`
      DELETE FROM likes
      WHERE user_id = ? AND post_id = ?`);return await new Promise(e=>setTimeout(e,1e3)),s.run(t,e)}}o.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY, 
      first_name TEXT, 
      last_name TEXT,
      email TEXT
    )`),o.exec(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY, 
      image_url TEXT NOT NULL,
      title TEXT NOT NULL, 
      content TEXT NOT NULL, 
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      user_id INTEGER, 
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )`),o.exec(`
    CREATE TABLE IF NOT EXISTS likes (
      user_id INTEGER, 
      post_id INTEGER, 
      PRIMARY KEY(user_id, post_id),
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE, 
      FOREIGN KEY(post_id) REFERENCES posts(id) ON DELETE CASCADE
    )`),0===o.prepare("SELECT COUNT(*) AS count FROM users").get().count&&(o.exec(`
    INSERT INTO users (first_name, last_name, email)
    VALUES ('John', 'Doe', 'john@example.com')
  `),o.exec(`
    INSERT INTO users (first_name, last_name, email)
    VALUES ('Max', 'Schwarz', 'max@example.com')
  `));var u=s(4357),c=s(82557);async function E(e,t){let s=t.get("title"),n=t.get("image"),r=t.get("content"),i=[];if(s&&0!==s.trim().length||i.push("Title is required"),r&&0!==r.trim().length||i.push("Contetnt is required"),n&&0!==n.size||i.push("Img is required"),i.length>0)return{errors:i};try{await a(n)}catch(e){throw Error("Image upload failed, post was not created")}await l({imageUrl:"",title:s,content:r,userId:1}),(0,u.revalidatePath)("/","layout"),(0,c.redirect)("/feed")}async function m(e){await d(e,2),(0,u.revalidatePath)("/","layout")}(0,s(46309).h)([E,m]),(0,n.j)("b61d02b51f12baf31f3c59f371aaf188eb47e554",E),(0,n.j)("a7f895f5c3cf690a5f7e2f1c37d99b34d66f441b",m)},86637:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d,metadata:()=>l});var n=s(9807),r=s(59164),a=s.n(r),i=s(23496);function o(){return(0,n.jsxs)("header",{id:"main-header",children:[n.jsx(i.default,{href:"/",children:n.jsx("img",{src:a().src,alt:"Mobile phone with posts feed on it"})}),n.jsx("nav",{children:(0,n.jsxs)("ul",{children:[n.jsx("li",{children:n.jsx(i.default,{href:"/feed",children:"Feed"})}),n.jsx("li",{children:n.jsx(i.default,{className:"cta-link",href:"/new-post",children:"New Post"})})]})})]})}s(67272);let l={title:"NextPosts",description:"Browse and share amazing posts."};function d({children:e}){return n.jsx("html",{lang:"en",children:(0,n.jsxs)("body",{children:[n.jsx(o,{}),n.jsx("main",{children:e})]})})}},40760:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});let n=(0,s(16592).createProxy)(String.raw`C:\Users\Raul C\Desktop\folder\nextjs-complete-guide-course-resources-main\attachments\05-data-mutation\01-starting-project\components\posts.js#default`)},84643:(e,t,s)=>{"use strict";s.d(t,{IK:()=>o,Jq:()=>a,Zu:()=>i});var n=s(85890);let r=new(s.n(n)())("posts.db");async function a(e){let t="";e&&(t="LIMIT ?");let s=r.prepare(`
    SELECT posts.id, image_url AS image, title, content, created_at AS createdAt, first_name AS userFirstName, last_name AS userLastName, COUNT(likes.post_id) AS likes, EXISTS(SELECT * FROM likes WHERE likes.post_id = posts.id and likes.user_id = 2) AS isLiked
    FROM posts
    INNER JOIN users ON posts.user_id = users.id
    LEFT JOIN likes ON posts.id = likes.post_id
    GROUP BY posts.id
    ORDER BY createdAt DESC
    ${t}`);return await new Promise(e=>setTimeout(e,1e3)),e?s.all(e):s.all()}async function i(e){let t=r.prepare(`
    INSERT INTO posts (image_url, title, content, user_id)
    VALUES (?, ?, ?, ?)`);return await new Promise(e=>setTimeout(e,1e3)),t.run(e.imageUrl,e.title,e.content,e.userId)}async function o(e,t){if(0===r.prepare(`
    SELECT COUNT(*) AS count
    FROM likes
    WHERE user_id = ? AND post_id = ?`).get(t,e).count){let s=r.prepare(`
      INSERT INTO likes (user_id, post_id)
      VALUES (?, ?)`);return await new Promise(e=>setTimeout(e,1e3)),s.run(t,e)}{let s=r.prepare(`
      DELETE FROM likes
      WHERE user_id = ? AND post_id = ?`);return await new Promise(e=>setTimeout(e,1e3)),s.run(t,e)}}r.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY, 
      first_name TEXT, 
      last_name TEXT,
      email TEXT
    )`),r.exec(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY, 
      image_url TEXT NOT NULL,
      title TEXT NOT NULL, 
      content TEXT NOT NULL, 
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      user_id INTEGER, 
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )`),r.exec(`
    CREATE TABLE IF NOT EXISTS likes (
      user_id INTEGER, 
      post_id INTEGER, 
      PRIMARY KEY(user_id, post_id),
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE, 
      FOREIGN KEY(post_id) REFERENCES posts(id) ON DELETE CASCADE
    )`),0===r.prepare("SELECT COUNT(*) AS count FROM users").get().count&&(r.exec(`
    INSERT INTO users (first_name, last_name, email)
    VALUES ('John', 'Doe', 'john@example.com')
  `),r.exec(`
    INSERT INTO users (first_name, last_name, email)
    VALUES ('Max', 'Schwarz', 'max@example.com')
  `))},59164:()=>{throw Error('Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-image-loader/index.js):\nError: Could not load the "sharp" module using the win32-x64 runtime\nPossible solutions:\n- Ensure optional dependencies can be installed:\n    npm install --include=optional sharp\n    yarn add sharp --ignore-engines\n- Ensure your package manager supports multi-platform installation:\n    See https://sharp.pixelplumbing.com/install#cross-platform\n- Add platform-specific dependencies:\n    npm install --os=win32 --cpu=x64 sharp\n- Consult the installation documentation:\n    See https://sharp.pixelplumbing.com/install\n    at Object.<anonymous> (C:\\Users\\Raul C\\Desktop\\folder\\nextjs-complete-guide-course-resources-main\\attachments\\05-data-mutation\\01-starting-project\\node_modules\\sharp\\lib\\sharp.js:114:9)\n    at Module._compile (node:internal/modules/cjs/loader:1369:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1427:10)\n    at Module.load (node:internal/modules/cjs/loader:1201:32)\n    at Module._load (node:internal/modules/cjs/loader:1017:12)\n    at Module.require (node:internal/modules/cjs/loader:1229:19)\n    at mod.require (C:\\Users\\Raul C\\Desktop\\folder\\nextjs-complete-guide-course-resources-main\\attachments\\05-data-mutation\\01-starting-project\\node_modules\\next\\dist\\server\\require-hook.js:65:28)\n    at require (node:internal/modules/helpers:177:18)\n    at Object.<anonymous> (C:\\Users\\Raul C\\Desktop\\folder\\nextjs-complete-guide-course-resources-main\\attachments\\05-data-mutation\\01-starting-project\\node_modules\\sharp\\lib\\constructor.js:10:1)\n    at Module._compile (node:internal/modules/cjs/loader:1369:14)')},33688:()=>{throw Error('Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-image-loader/index.js):\nError: Could not load the "sharp" module using the win32-x64 runtime\nPossible solutions:\n- Ensure optional dependencies can be installed:\n    npm install --include=optional sharp\n    yarn add sharp --ignore-engines\n- Ensure your package manager supports multi-platform installation:\n    See https://sharp.pixelplumbing.com/install#cross-platform\n- Add platform-specific dependencies:\n    npm install --os=win32 --cpu=x64 sharp\n- Consult the installation documentation:\n    See https://sharp.pixelplumbing.com/install\n    at Object.<anonymous> (C:\\Users\\Raul C\\Desktop\\folder\\nextjs-complete-guide-course-resources-main\\attachments\\05-data-mutation\\01-starting-project\\node_modules\\sharp\\lib\\sharp.js:114:9)\n    at Module._compile (node:internal/modules/cjs/loader:1369:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1427:10)\n    at Module.load (node:internal/modules/cjs/loader:1201:32)\n    at Module._load (node:internal/modules/cjs/loader:1017:12)\n    at Module.require (node:internal/modules/cjs/loader:1229:19)\n    at mod.require (C:\\Users\\Raul C\\Desktop\\folder\\nextjs-complete-guide-course-resources-main\\attachments\\05-data-mutation\\01-starting-project\\node_modules\\next\\dist\\server\\require-hook.js:65:28)\n    at require (node:internal/modules/helpers:177:18)\n    at Object.<anonymous> (C:\\Users\\Raul C\\Desktop\\folder\\nextjs-complete-guide-course-resources-main\\attachments\\05-data-mutation\\01-starting-project\\node_modules\\sharp\\lib\\constructor.js:10:1)\n    at Module._compile (node:internal/modules/cjs/loader:1369:14)')},4998:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var n=s(15394);let r=e=>[{type:"image/png",sizes:"600x600",url:(0,n.fillMetadataSegment)(".",e.params,"icon.png")+"?6ad4479c42d31fc7"}]},67272:()=>{}};