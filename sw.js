// Service worker minimo, so para o Chrome/Android reconhecer o app como instalavel
// (criterio de "PWA instalavel"). Nao guarda nada em cache de proposito: o app ainda
// esta em desenvolvimento ativo e mudando toda hora, entao a gente sempre quer a
// versao mais nova direto da rede, nunca uma versao antiga presa em cache.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {}); // no-op: deixa tudo passar direto pra rede
