- [Редактирование Readme.md (Frontend, Backend)](#редактирование-readmemd-frontend-backend)
- [Для BACKEND разработчика](#для-backend-разработчика)
	- [from Backend for FrontEnd (Нужно заполнить)](#from-backend-for-frontend-нужно-заполнить)
	- [Frontend for Backend (Нужно сделать)](#frontend-for-backend-нужно-сделать)
- [Для FRONTEND разработчика](#для-frontend-разработчика)
	- [FrontEnd начало работы](#frontend-начало-работы)
	- [Линтеры (Если используете VS Code)](#линтеры-если-используете-vs-code)
		- [Pug lint](#pug-lint)
		- [Style lint](#style-lint)
		- [Eslint](#eslint)
		- [EditorConfig](#editorconfig)
		- [Prettier](#prettier)
	- [CSS сокращения](#css-сокращения)
	- [Gulp задачи](#gulp-задачи)
		- [Production mode (для внедрения правок, после сдачи верстки)](#production-mode-для-внедрения-правок-после-сдачи-верстки)
		- [Development mode (не нужны после сдачи верстки)](#development-mode-не-нужны-после-сдачи-верстки)
	- [Библиотеки](#библиотеки)
	- [Cтруктура проекта](#cтруктура-проекта)
	- [Особенности сайта](#особенности-сайта)
	- [Обратная связь с Fronend разработчиком](#обратная-связь-с-fronend-разработчиком)

# Редактирование Readme.md (Frontend, Backend)

-  Убедительная просьба следить за структурой и чистотой написанного вами текста.
-  Использовать markdown preview для отслеживания корректности вашего текста

# Для BACKEND разработчика

## from Backend for FrontEnd (Нужно заполнить)

-  Есть ли локально сервер и где он лежит. Какой домен сайта в интернете на период натяжки и боегого развертывания.
   > Тут пишется ответ
-  Есть ли деплой, и как он работает.
   > Тут пишется ответ
-  Как проходит процесс от коммита изменений до появления изменений на сайте (домене, локальном сервере), т.е. что я должен сделать, чтобы правки были на сайте.
   > Тут пишется ответ
-  Структура папок и особенно где лежит весь html код сайта Т.е. для каждой страницы указать где лежит весь html, который используется на этой странице.
   > Пр. <br>
   > Основной шаблон - frontend\views\layouts\main.php и подключаемые файлы в frontend\views\layouts\main\
   > Части страниц - frontend\views\parts\
   > Главная страница - frontend\views\site\index.php и подключаемые файлы в frontend\views\site\index\
-  Где подгружаеются скипты, стили в php
   > Тут пишется ответ
-  Информацию для обратной связи.
   > Тут пишется ответ
-  Что должен знать Frontend разработчик со стороны Backend'a, чтобы начать делать свою работу. (Пр. Если я запушу изменения на гит, правки появяться на сайте? Что иначе нужно делать? )
   > Тут пишется ответ

## Frontend for Backend (Нужно сделать)

-  Файлы с исходниками обязательно должны лежать, либо на локальном сервере, либо на хостинге. т.е. вся ветка front должна быть неделима. т.к. брать только выходную папку (frontend-dist) не нужно, так как правки вносяться через исходники (src)
-  Если путь пр. /frontend-dist/css/... не устраивает, то во всех файлах (pug,html,css,js,favicons,...) заменить /front-end/ на /нужный-путь/frontend-dist, как минимум в yii2 такой путь работает сразу.
-  Убедительная просьба. Если идет только натяжка, то если что-то непонятно, то лучше написать мне и обсудить это, либо найти компромис вместе, так как в будущем не хочется разбираться почему верстка работает не так, как должна.<br>
   Обратная связь: vk - https://vk.com/moshkin_denis, или telegram - @denis_moshkin
-  Когда вы перености мою верстку из ветки front в master, то папку frontend-src коммитить не нужно, так как потом все изменения в гите будут показывать на вас. P.S. после натяжки я в любом случае буду делать правки и закомичу свои файлы.

# Для FRONTEND разработчика

## FrontEnd начало работы

-
-

## Линтеры (Если используете VS Code)

-  Открыть проект в папке frontend-src

### Pug lint

-  Подключить плагин [puglint](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-puglint)

### Style lint

-  Подключить плагин [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

### Eslint

-  Подключить плагин [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### EditorConfig

-  Подключить плагин [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

### Prettier

-  Подключить плагин [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## CSS сокращения

-  l (local) - локальные стили для блока выше
-  b (bem) - бэм блок, которые повторяется больше одного раза
-  d (display) - блок для мониторов
-  m (mobile) - блок для мобилок
-  t (tablet) - блок для планшета

## Gulp задачи

### Production mode (для внедрения правок, после сдачи верстки)

-  `npm run prod:serve` - запуск сервера (c минификации и т.д.).
-  `npm run prod:build` - компиляция всего проекта, с удалением выходной папки + запуск сервера.

### Development mode (не нужны после сдачи верстки)

-  `npm run dev:serve` - запуск сервера (без минификации и т.д.)/
-  `npm run dev:build` - компиляция всего проекта, с удалением выходной папки + запуск сервера

## Библиотеки

-  Модальные окна - fancybox (http://fancyapps.com/fancybox/3/docs)
-  Слайдер - slick-slider (https://kenwheeler.github.io/slick/)
-  Шаблон ввода в input - jQuery Masked Input Plugin (https://github.com/digitalBush/jquery.maskedinput)
-  Выпадающий список - select2 (https://github.com/select2/select2)
-  Ленивая загрузки изображений - lazysizes (https://github.com/aFarkas/lazysizes)
-  Кастомный скролл - simplebar (https://github.com/Grsmto/simplebar)
-  Таймер - easytimer.js (https://github.com/albert-gonzalez/easytimer.js)
-  Выпадающий список - select2 (https://github.com/select2/select2)
-

## Cтруктура проекта

-  dist - папка с выходными файлами, формируется только gulp'ом
   -  css - общий файл стилей для сайта
   -  include-libs - либы, которые будут подключаться на отдельных страницах (.js,.css)
   -  include-scripts - скрипты, которые будут запускать либы выше
   -  js - общий файл .js для сайта
   -  min-img - все картинки, прошедшие минификацию размера
   -  pages - страницы html
   -  svg - минифицированные svg иконки для подключения через ссылку
   -  webp-img - изображения, конвертируемые в формат .webp
-  src - папка с исходниками
   -  /favicons - фавиконы, манифесты, сгенерируемые сайтом: https://realfavicongenerator.net/
   -  /fonts - шрифты сайта
   -  /img - изображения png, jpg, jpeg
   -  /js
      -  00_libs - библиотеки, которые пойдут в общий бандл сайта
      -  01_scripts - скрипты для текущего сайта
      -  02_custom - шаблонные скрипты, которые часто используются на сайтах
      -  include-libs - либы, которые не идут в общий бандл сайта, а подключаются на нужных страницах
      -  include-scripts - аналогично выше, только скрипт для запуска либы
   -  less
      -  common - заготовки для сайтов
      -  custom - стили для скриптов, которые часто используются на сайтах
      -  include - стили для включения на отдельных страницах
      -  layout - header,footer,aside...
      -  libs - либы для общего файла стилей
      -  pages - стили для каждой страницы
      -  utils - стили переходящие из проекта в проект
      -  main.less - файл, который подключает все нужные файлы стилей и он же и компилируется gulp задачей.
      -  new-styles.less - файл стилей для нового верстальщика проекта, если лень искать нужный файл стилей.
   -  pug
      -  include - то, что будет подключатся через include (breadcrumbs, menu ...)
      -  mixins - pug миксины
      -  page-layout - блоки подключаемые на каждой странице странице (footer,header,aside)
      -  pages - страницы, которые будут открываться в браузере
      -  page-template - шаблоны для страниц
      -
   -  svg - svg иконки
-  gulp
   -  img - минификация и преобразования в webp изображений
   -  clean - удаление папки с выходными файлами
   -  config - пути к файлам, которые используются в остальных gulp задачах
   -  favicons - копирования фавиконок
   -  fonts - копирование шрифтов
   -  pug2html - компиляция всех страниц pug
   -  include_pug2html - компиляция нужных страниц, над которыми работаешь.
   -  include-libs - копирования библиотек подключаемых на отдельных страницах
   -  include-scripts - скрипт для запуска подключаемых либ (см. задача выше)
   -  script - собрать общий js бандл для сайта
   -  serve - запуск задач, при изменении файлов
   -  style - собрать общий бандл стилей
   -  svgSprite - собрать свг-спрайт
   -  webpack-script - отвечает за js (пока не используется)

## Особенности сайта

1.
2.

## Обратная связь с Fronend разработчиком

vk: https://vk.com/moshkin_denis <br>
telegram: @denis_moshkin
