System.register([], function (e, t) {
  "use strict"
  var n = document.createElement("style")
  return (
    (n.textContent = "h1{background-color:#bfa}\n"),
    document.head.appendChild(n),
    {
      execute: function () {
        document.body.insertAdjacentHTML("beforeend", "<h1>你好！vite</h1>"),
          (document.body.onclick = function () {
            alert("哈哈哈")
          })
      },
    }
  )
})
