// Задание 1

let i = 0;

for (i=10; i <= 50; i=i+10) {
  console.log(i);
}
// Ожидаемый результат: 10 20 30 40 50

// Задание 2
/*
 Написать функцию-конструктор Men с ДВУМЯ аргументами
  С помощью которой можно создать объект
  { profession: 'hero', name: 'Кларк', secondName: 'Кент' }
*/

function Men(name, secondName) {
  this.profession = 'hero'
  this.name = name;
  this.secondName = secondName;
}

const superman = new Men('Кларк', 'Кент');
console.log('superman: ', superman);
// Men { profession: 'hero', name: 'Кларк', secondName: 'Кент' }


// Задание 3
// Напишите функцию sum, которая работает так: sum(a)(b) возвращает a + b.
function sum(a) {
  return function(b) {
    return a + b; 
  };
}

sum(1)(2);  // 3
sum(5)(-1); // 4


// Задание 4
// Измените код так, чтобы console.log выводил последовательно символы 'П т и ц а'
const bird = ['П', 'т', 'и', 'ц', 'а'];

for (var index = 0; index < bird.length; index++) {
  console.log(bird[index]);
}
