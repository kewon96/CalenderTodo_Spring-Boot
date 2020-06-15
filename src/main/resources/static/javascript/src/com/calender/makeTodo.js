

export const makeTodo = () => {
      let addTodayList = document.querySelectorAll('.add-today');
      const achievementValue = document.getElementById('achievement-value'); // 달성률 range
      const achievementTxt = document.getElementById('achievement-txt'); // 달성률 표시하는 label
      const todoList = document.querySelector('.todo-list');
      const nextPlenList = document.querySelector('.next-plen-list');
  
      let counter1 = 1;
      let counter2 = 1;
  
      // 당일 현황
      todoList.addEventListener('click', () => {
            if(event.target.className.includes('add-today')) {
                  // 당일 계획 추가 이벤트
                  if(counter1 >= 4) {
                        const alertToday = document.querySelector('.alert-today');
                        alertToday.style.cssText = 'opacity: 1; transition: 0.5s;';
                        setTimeout(() => {
                              alertToday.style.cssText = 'opacity: 0; transition: 0.5s;';
                        }, 1000);
                  } else {
                        counter1++;
                        const todoOne = document.createElement('div'); // todo-one
                              todoOne.className = 'todo-one';
                        const checks = document.createElement('div'); // checkBox Container
                              checks.className = 'checks etrans';
                  
                        const checkbox = document.createElement('input');
                              checkbox.type = 'checkbox';
                              checkbox.id = counter1;
                              checks.appendChild(checkbox);
                        const label = document.createElement('label');
                              label.htmlFor = counter1;
                              checks.appendChild(label);
                              todoOne.appendChild(checks);
                  
                        const text = document.createElement('input');
                              text.type = 'text';
                              text.className = 'content';
                              todoOne.appendChild(text);
                  
                        const i1 = document.createElement('i');
                              i1.className = 'fa fa-plus-square add-today';
                              todoOne.appendChild(i1);
                  
                        const i2 = document.createElement('i');
                              i2.className = 'fa fa-minus-square delete-today';
                              todoOne.appendChild(i2);
                  
                        todoList.append(todoOne);

                  }
            } else if(event.target.className.includes('delete-today')) {
                  // 당일 계획 제거 이벤트
                  event.target.parentNode.remove();
                  counter1--;
            } else if(event.target.type === 'checkbox') {
                  // checkbox 체크 시에 따른 달성률 조정 이벤트 
                  const chkboxList = todoList.querySelectorAll('input[type="checkbox"]');
                  let shame = Math.floor(100 / chkboxList.length);
                  let value = Number(achievementValue.value);

                  if(event.target.checked === true) value += shame; 
                  else value -= shame;

                  achievementValue.value = value;
                  achievementTxt.innerHTML = value + '%';
            }
        
      });

      nextPlenList.addEventListener('click', () => {
            if(event.target.className.includes('add-next-day')) {
                  // 당일 계획 추가 이벤트
                  if(counter2 >= 3) {
                        const alertNext = document.querySelector('.alert-next');
                        alertNext.style.cssText = 'opacity: 1; transition: 0.5s;';
                        setTimeout(() => {
                              alertNext.style.cssText = 'opacity: 0; transition: 0.5s;';
                        }, 1000);
                  } else {
                        counter2++;
                        const nextPlen = document.createElement('div'); // next-plen-one
                              nextPlen.className = 'next-plen-one';
                  
                        const text = document.createElement('input');
                              text.type = 'text';
                              text.className = 'content';
                              nextPlen.appendChild(text);
                  
                        const i1 = document.createElement('i');
                              i1.className = 'fa fa-plus-square add-next-day';
                              nextPlen.appendChild(i1);
                  
                        const i2 = document.createElement('i');
                              i2.className = 'fa fa-minus-square delete-next-day';
                              nextPlen.appendChild(i2);
                  
                              nextPlenList.append(nextPlen);

                  } 
            } else if(event.target.className.includes('delete-next-day')) {
                  // 당일 계획 제거 이벤트
                  event.target.parentNode.remove();
                  counter2--;
            }
      })
      
      achievementValue.addEventListener('input', () => {
          achievementTxt.innerHTML = achievementValue.value + '%';
      });
  }
  
  export default { makeTodo };