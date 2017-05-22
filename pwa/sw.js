self.addEventListener('fetch', function (event) {
  if (/offline-data$/.test(event.request.url)) {
    event.responseWidth(
      new Response('这是一条来自service worker的响应信息')
    )
  }
});