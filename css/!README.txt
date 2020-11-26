Для релиза файл main.css после генерации SASS дополнительно ужимается при помощи LESS с использованием плагинов less-group-css-media-queries ( https://github.com/bassjobsen/less-plugin-group-css-media-queries ) и less-plugin-clean-css ( https://github.com/less/less-plugin-clean-css )

Параметры:

lessc --math=strict --group-css-media-queries --clean-css main.css main.css

ОБЯЗАТЕЛЬНО использование параметра --math=strict для сохранения оригинальных свойств calc(...) 


