const C='gxc-admin-v1';
const CORE=['./','./index.html','./admin.html','./manifest.json','./icon-192.png','./icon-512.png','./IMG-20260805-WA0005.jpg','./firebase-config.js','./pwa.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 e.respondWith(caches.match(e.request).then(h=>h||fetch(e.request).then(r=>{
  const cp=r.clone();
  try{ if(new URL(e.request.url).origin===location.origin) caches.open(C).then(c=>c.put(e.request,cp)); }catch(_){}
  return r;
 }).catch(()=>caches.match('./index.html'))));
});

self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{for(const c of cs){try{if(c.url.indexOf('admin')>-1||c.url.indexOf('index')>-1)return c.focus()}catch(_){}}return clients.openWindow('./index.html')}))});
