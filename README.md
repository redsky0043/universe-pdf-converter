# Universe PDF Converter

Universe PDF Converter - це веб-додаток для конвертації текстових даних в формат PDF. Додаток надає можливість ввести текст для конвертації, побачити попередній вигляд PDF та зберегти конвертовані файли. Розроблений на React з використанням TypeScript.

# React + TypeScript + Vite

  ## Локальний запуск проекту:
  ```
  перед запуском команд неоюхідно створити файл .env зі змінними: 
  VITE_API_URL=http://your-api-url
  VITE_API_KEY=your-api-key
  ```
  - `npm run dev`: запуск dev версії проекту,
  - `npm run build`: генерація build версії,
  - `npm run lint`: запуск лінтера,
  - `npm run preview`: запуск build версії проекту (спершу треба виконати `npm run build`),
  - `npm run test`: запуск тестів


## Опис структури

- ### `components` 
  - `Ця папка містить всі компоненти React, які використовуються у нашому додатку. Компоненти тут розбиті за функціональністю та призначенням.
  
  - Приклади компонентів: Button, Input, Form, Card, Modal, Table.
  - Структура компонентів: Кожен компонент може містити файли з TSX, CSS або іншими ресурсами, що використовуються в компоненті.

- ### `providers`
  - У цій папці розміщені провайдери контексту, які зберігають та управляють даними, що можуть бути використані в різних частинах додатку.
  - Приклад провайдера: PdfHistoryProvider, який зберігає історію перегляду PDF-документів.
  - Структура провайдерів: Кожен провайдер може містити один або кілька файлів, включаючи визначення контексту, провайдера та відповідні функції.

- ### `services`
  - В цій папці розташовані сервіси та утиліти, які використовуються для взаємодії з зовнішніми API, обробки даних та виконання різних операцій.

- ### `styles`
  - Тут розташовані файли зі стилями, які використовуються у нашому додатку. Це можуть бути глобальні стилі, стилі компонентів або теми.
  - Приклади стилів: global.css, button.css, theme.scss.
  - Структура стилів: Кожен файл може містити CSS або препроцесорні файли зі стилями, які описують вигляд різних елементів і компонентів.

- ### `types`
  - У цій папці знаходяться файли з типами TypeScript, які використовуються для опису структури даних, інтерфейсів та типізованих констант.
  - Приклади типів: interfaces.ts, enums.ts, types.ts.
  - Структура типів: Кожен файл містить опис типів даних, їх використання та зв'язки між різними частинами додатку.

- ### `utils`
  - Тут розташовані різноманітні утиліти, які допомагають виконувати різні завдання, такі як обробка даних, робота з датами та часом, робота зі строками тощо.
  - Приклади утиліт: dateUtils.ts, stringUtils.ts, mathUtils.ts.
  - Структура утиліт: Кожен файл містить функції або класи, які надають корисні інструменти для роботи з даними та виконання різних завдань.