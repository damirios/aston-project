## Game Reviews. Выходной проект React-интенсива компании Aston

## Превью
<p align="center">
<img src="/preview.gif" width="680">
</p>

## Реализованы следующие требования к функциональности
##### React
* Пишем функциональные компоненты c хуками в приоритете над классовыми :heavy_check_mark: (классовых вообще нет вроде)
* Есть четкое разделение на умные и глупые компоненты - [глупые компоненты](https://github.com/damirios/aston-project/tree/main/src/components/UIComponents); 
 примеры умных компонент: [полная карточка игры](https://github.com/damirios/aston-project/blob/main/src/components/cards/FullCard.jsx),
 [форма поиска](https://github.com/damirios/aston-project/blob/main/src/components/SearchForm.jsx), 
 [форма регистрации/входа](https://github.com/damirios/aston-project/blob/main/src/components/SignInUpPage.jsx) :heavy_check_mark:
* Есть рендеринг списков - [Карточки игр](https://github.com/damirios/aston-project/blob/main/src/components/cards/CardsSet.jsx),
[Избранное](https://github.com/damirios/aston-project/blob/main/src/components/Favorites.jsx),
[История запросов](https://github.com/damirios/aston-project/blob/main/src/components/History.jsx) :heavy_check_mark:
* Реализована хотя бы одна форма - [Форма поиска](https://github.com/damirios/aston-project/blob/main/src/components/SearchForm.jsx), 
[Форма регистрации/входа](https://github.com/damirios/aston-project/blob/main/src/components/SignInUpPage.jsx) :heavy_check_mark:
* Есть применение Контекст API - нет
* Есть применение предохранителя - использовал в компоненте [Card](https://github.com/damirios/aston-project/blob/main/src/components/cards/Card.jsx); 
сам предохранитель [ErrorBoundary](https://github.com/damirios/aston-project/blob/main/src/components/ErrorBoundary.jsx) :heavy_check_mark:
* Есть хотя бы один кастомный хук - [useDebounce](https://github.com/damirios/aston-project/blob/main/src/utilitieFunctions/useDebounce.jsx) :heavy_check_mark:
* Хотя бы несколько компонентов используют PropTypes - нет
* Поиск не должен триггерить много запросов к серверу - Использую кастомный хук [useDebounce](https://github.com/damirios/aston-project/blob/main/src/utilitieFunctions/useDebounce.jsx) :heavy_check_mark:
* Есть применение lazy + Suspense - компоненты Favorites и History в [App](https://github.com/damirios/aston-project/blob/main/src/App.js) :heavy_check_mark:

##### Redux
* Используем Modern Redux with Redux Toolkit - использовал. Примеры: [store](https://github.com/damirios/aston-project/blob/main/src/app/store.js), 
[gamesSlice](https://github.com/damirios/aston-project/blob/main/src/features/games/gamesSlice.js), 
[userSlice](https://github.com/damirios/aston-project/blob/main/src/features/user/userSlice.js) :heavy_check_mark:
* Используем слайсы - [gamesSlice](https://github.com/damirios/aston-project/blob/main/src/features/games/gamesSlice.js), 
[userSlice](https://github.com/damirios/aston-project/blob/main/src/features/user/userSlice.js) :heavy_check_mark:
* Есть хотя бы одна кастомная мидлвара - нет
* Используется RTK Query - нет 
* Используется Transforming Responses - нет

## Дополнительно
### Использован API
* [RAWG API](https://rawg.io/apidocs)

### Использованные технологии и языки
* React
* Redux
* JS
* CSS
* HTML

### Авторизация/регистрация
* Реализована с помощью Local Storage
