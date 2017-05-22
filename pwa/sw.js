self.addEventListener('fetch', function (event) {
  if (/offline-data$/.test(event.request.url)) {
    event.responseWith(
      new Response('这是一条来自service worker的响应信息')
    )
  }
});