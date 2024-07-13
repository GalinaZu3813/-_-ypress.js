describe('Автотесты для формы логина и пароля', function () {

    it('Верный логин и верный пароль', function () {
       cy.visit('https://login.qa.studio/'); //Зашли на сайт
       cy.get('#mail').type('german@dolnikov.ru'); // Ввели правильный логин
       cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
       cy.get('#loginButton').click(); //Нажать внопку "Войти"
       cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка текста после авторизации
       cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден пользователю
       })


    it('Проверка логики восстановления пароля', function () {
       cy.visit('https://login.qa.studio/'); //Зашли на сайт
       cy.get('#forgotEmailButton').should('be.visible'); //Кнопка "Забыли пароль" видна пользователю
       cy.get('#forgotEmailButton').click(); //Нажать "Забыли пароль"
       cy.get('#mailForgot').should('be.visible'); //Инпут виден пользователю
       cy.get('#mailForgot').type('Ferman@dolkikov.ru'); //Ввести в поле логин
       cy.get('#restoreEmailButton').click(); //нажать кнопку "отправить код"
       cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка текста после отпраки емейла
       cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден пользователю
       })
       
    it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели правильный логин
        cy.get('#pass').type('fghjkgh'); // Ввели НЕверный пароль
        cy.get('#loginButton').click(); //Нажать внопку "Войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка текста после авторизации
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден пользователю
        })

    it('НЕверный логин и верный пароль', function () {
            cy.visit('https://login.qa.studio/'); //Зашли на сайт
            cy.get('#mail').type('ferman@dolghjkov.ru'); // Ввели НЕверный логин
            cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
            cy.get('#loginButton').click(); //Нажать внопку "Войти"
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка текста после авторизации
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден пользователю
            })

    it('Ошибка валидации - нет @', function () {
            cy.visit('https://login.qa.studio/'); //Зашли на сайт
            cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
            cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
            cy.get('#loginButton').click(); //Нажать внопку "Войти"
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка текста после авторизации
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден пользователю
            })
    
     it('Проверка строчных букв в логине', function () {
            cy.visit('https://login.qa.studio/'); //Зашли на сайт
            cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин Большими буквами
            cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
            cy.get('#loginButton').click(); //Нажать внопку "Войти"
            cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка текста после авторизации
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден пользователю
            })
})
 