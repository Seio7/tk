var disqus_config = function () {
  this.page.url = 'https://www.tanja-knappe.de';
  var page = window.location.href
  this.page.identifier = page.split("/")[page.split("/").length - 1];
};

(function() {
var d = document, s = d.createElement('script');
s.src = 'https://tanja-knappe.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();