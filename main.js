//1.--створити масив з:
//- з 5 числових значень
//- з 5 стічкових значень
//- з 5 значень стрічкового, числового та булевого типу
//- та вивести його в консоль

//let ages =['1','8','10','15','20'];-числові значення
//console.log(age);

//let names=[ 'Anna','Ivan','Ira','Oleg','Vira'];
//console.log(names);

//let names=['Anna','Ivan','Ira','Oleg','Vira','1','8','10','15','20','false,true']
//console.log(names);

//2.-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//let carts = [];
//carts [1]='морозиво'
//carts [2]='торт'
//carts [3]='круасан'
//console.log(carts);

//3.- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//for (let i=0; i<10 ;i++) 
//{document.write('<div>сода</div>')}

//4.За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//for (let i=0; i<10 ;i++)
//{document.write('<div>сода:'+i+'</div>')}

//5.За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//let h1=0;
//while (h1<20)
//{document.write ('<div> вода </div>'); h1++;}

//6.За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//let h1=0;
//while (h1<20)
//{document.write ('<div> вода:'+h1+' </div>'); h1++;}

//7.Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//let ages =[20,21,22,23,24,25,26,27,28,29];
//for (let i=0; i<ages.length; i++)
//{console.log(ages[i]);}

//8.Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//let names =['Anna','Ivan','Ira','Oleg','Vira','Marta','Dima','Rosa','Zina','Sara'];
//for (let i=0; i<names.length; i++)
//{console.log(names[i]);}

//9.- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//let names=['Anna','Ivan','Ira','Oleg','Vira','1','8','10','false','true']
//for (let i=0; i<names.length; i++)
//{console.log(names[i]);}

//10.- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//let names=['Anna','Ivan','Ira','Oleg','Vira',1,8,10,'false','true']
//for (let i=0; i<names[i].length; i++) 
//if ( typeof names[i]  === 'boolean') { console.log(names[i]);} else{}

//11.Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//let names=['Anna','Ivan','Ira','Oleg','Vira',1,8,10,'false','true']
//for (let i=0; i<names[i].length; i++)
//if ( typeof names[i]  === 'number') { console.log(names[i]);} else{} 

//12.Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//let names=['Anna','Ivan','Ira','Oleg','Vira',1,8,10,'false','true']
//for (let i=0; i<names[i].length; i++)
//if ( typeof names[i]  === 'string') { console.log(names[i]);} else{} 

//13.Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. 
//Вивести в консоль всі його елементи в циклі.
//let names=[]
//names [0]='Anna'
//names [1]='Ivan'
//names [2]='Ira'
//names [3]='Oleg'
//names [4]='Vira'
//names [5]='1'
//names [6]='8'
//names [7]='10'
//names [8]='false'
//names [9]='true'
//for ( let i=0; i<names[i].length; i++)
//{console.log(names);}

//14.Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//for ( let i=0; i<10; i++)
//{console.log('step;',i);
//document.write('step: ${i} <br>')}

//15.Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//for ( let i=0; i<100; i++)
//{console.log('step;',i);
//document.write('step: ${i} <br>')}

//16.Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//for ( let i=0; i<200; i=i+2)
//{console.log('step;',i);
//document.write('step: ${i} <br>')}

 //17.Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
 //for ( let i=0; i<200; i++)
 //if (i%2===0)
  //{console.log('step;',i);
 //document.write('step: ${i} <br>')}

 //18.Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
 //for ( let i=1; i<200; i++)
 //if (i%2===1)
 //{console.log('step;',i);
 //document.write('step: ${i} <br>')}

 //19.- Дано 2 масиви з рівною кількістю об'єктів.
 //Масиви:
 //let usersWithId = [
    // {id: 1, name: 'vasya', age: 31, status: false},
    // {id: 2, name: 'petya', age: 30, status: true},
     //{id: 3, name: 'kolya', age: 29, status: true},
     //{id: 4, name: 'olya', age: 28, status: false}
 //];
 
 //let citiesWithId = [
     //{user_id: 3, country: 'USA', city: 'Portland'},
     //{user_id: 1, country: 'Ukraine', city: 'Ternopil'},
     //{user_id: 2, country: 'Poland', city: 'Krakow'},
     //{user_id: 4, country: 'USA', city: 'Miami'}
 //];
 
 //З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
 //Записати цей об'єкт в новий масив
//for (const user of userWithId){
    //for (const city of citiesWithId) {
       // if (user.id===city.user_Id) {
            //user.city===city;
        //}
    //}
        
    //}
//console.log(usersWithId);