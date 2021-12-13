$(document).ready(function () {
    let currentFloor=6;
    let floorPath = $('.img-home path');
    let buttonUp = $('.button-up');
    let buttonDown = $('.button-down');

        //функция при наведении курсора на этаж
        floorPath.on("mouseover", function () {
            floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
            currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
            $(".level-text").text(currentFloor); //записываем значение этажа в счетчик справа
        });

    //функция отслеживания клика по кнопке вверх
    buttonUp.on("click", function () {
        //проверяем значение этажа, не больше 18
        if (currentFloor < 18) {
            currentFloor++; //прибавляем один этаж
            let usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }); //форматирование из 1 в 01
            $(".level-text").text(usCurrentFloor); //записываем значение этажа в счетчик справа
            floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсвечиваем текущий этаж
        }
    });

    buttonDown.on("click", function () {
        //проверяем значение этажа, не меньше 02
        if (currentFloor > 2) {
            currentFloor--; //вычитаем один этаж
            let usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }); //форматирование из 1 в 01
            $(".level-text").text(usCurrentFloor); //записываем значение этажа в счетчик справа
            floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсвечиваем текущий этаж
        }
    })
})