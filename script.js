    const intervalInput = document.getElementById('interval');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const table = document.getElementById('dataTable');
    const tbody = table.querySelector('tbody');

    let timerId = null;

    function addRandomRow() {
      const time = new Date().toLocaleTimeString();
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      const randomStatus = Math.random() < 0.5;

      const tr = document.createElement('tr');
      const values = [time, randomNumber, randomStatus];

      values.forEach(text => {
        const td = document.createElement('td');
        td.textContent = text;
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    }

    startBtn.addEventListener('click', () => {
      const interval = Number(intervalInput.value);

      if (!interval || interval < 100) {
        alert('Вкажіть інтервал від 100 мс і вище.');
        return;
      }

      table.hidden = false;
      startBtn.disabled = true;
      intervalInput.disabled = true;
      stopBtn.disabled = false;

      addRandomRow();
      timerId = setInterval(addRandomRow, interval);
    });

    stopBtn.addEventListener('click', () => {
      clearInterval(timerId);
      timerId = null;

      startBtn.disabled = false;
      intervalInput.disabled = false;
      stopBtn.disabled = true;
    });