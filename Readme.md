# get_click

Скрипт для захвата кликов на странице

## Подключение

Разместите скрипт в `<head>...</head>` вашего сайта
```html
<!-- START get_clicks -->
<script>
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://anyxem.com/get-click-js/dist/main.js'; // no SSL
    document.head.appendChild(script);
</script>
<!-- END get_clicks -->
```

## Разработка

Скачать скрипт и установить зависимости (webpack)

```bash
git clone git@github.com:anyxem/get-click-js.git
npm i
```
