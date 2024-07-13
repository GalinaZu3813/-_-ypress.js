describe('Автотесты для покупки аватара', function () {

    it('Верный логин и верный пароль', function () {
       cy.visit('https://pokemonbattle.ru/login'); //Зашли на сайт
       cy.wait(5000)
       
       cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Ввели правильный логин
       cy.get('#password').type('USER_PASSWORD'); // Ввели правильный пароль
       cy.get('.auth__button').click(); //Нажать внопку "Войти"
       
       cy.wait(5000)
       
       cy.get('.header__btns > :nth-child(4)').click();               // нажимаем кнопку Магазин
       cy.get('.available > button').first().click();                  // кликаем по кнопке Купить у первого доступного аватара
       cy.get('.credit').type('4620869113632996');                     // вводим номер карты
       cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
       cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
       cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
       cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
       cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
       cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
       cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
    
     });
     
      
    
})


 