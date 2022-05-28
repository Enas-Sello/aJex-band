let select1 = document.getElementsByTagName('select')[0];
let select2 = document.getElementsByTagName('select')[1];

let xml = new XMLHttpRequest();
xml.open('GET', './rockbands.json');
xml.onreadystatechange = function () {
  if (xml.readyState === 4) {
    // console.log(xml.status);
    if (xml.status >= 200 ) {
      let band = JSON.parse(xml.responseText);

      for (let i in band) {
         console.log(i);
          console.log( band[ i ] );
          
        select1.insertAdjacentHTML(
          'beforeend',
          `<option value=${i}>${i}</option>`
          
        );
      }

      select1.addEventListener('change', function () {
        let val = select1.options[select1.selectedIndex].value;
        // console.log(val);

        select2.innerHTML = `<option value="" selected>Please select</option>
        `;
        for (let x in band[val]) {
          // console.log(band[val]);
          // console.log(x);
          for (let i = x; i <= x; i++) {
            // console.log(band[val][i]);
            select2.insertAdjacentHTML(
              'beforeend',
              `<option value=${band[val][i].name}>${band[val][i].name}</option>`
            );
          }
        }

        select2.addEventListener('click', function () {
          let val2 = select2.options[select2.selectedIndex].innerText;
        console.log(val2);

          for (let A in band[val]) {
            for (let i = A; i <= A; i++) {
              if (band[val][i].name == val2) {
                 console.log(band[val][i].value);
                document.body.insertAdjacentHTML(
                  'beforeend',
                  `<a href='' target="_blank"></a>`
                );
                document.querySelector('a').href = `${band[val][i].value}`;
                document.querySelector('a').click();
              }
            }
          }
        });
      });
    }
  }
};

xml.send('');
