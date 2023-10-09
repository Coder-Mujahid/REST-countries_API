function loaddata() {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => displaydata(data))
      .catch(error => console.error('Error fetching data:', error));
  }
  
  function displaydata(data) {
    const display = document.getElementById('display');
    data.forEach(country => {
      const div = document.createElement('div');
      div.classList.add('bg-green-100', 'p-5', 'shadow-inner', 'shadow-black', 'rounded-lg', 'h-full', 'flex', 'flex-col', 'items-center', 'justify-center', 'mb-5');
      div.innerHTML = `
        <img class="w-full mx-2" src="${country.flags.png}" alt="img">
        <h2 class="text-2xl text-center py-2 font-semibold mb-2">${country.name.common}</h2>
        <h2 class="text-2xl text-center py-2 font-semibold mb-2">${country.cca3}</h2>
        <button onclick="showDetails('${country.cca3}')" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full">Details</button>
      `;
      display.appendChild(div);
    });
  }
  
  const div = document.createElement('div');
  
  function showDetails(code) {
    const Details = document.getElementById('Details');
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Create and populate the section with details
        div.innerHTML = `
        <section class="bg-slate-100 gap-5 p-5 lg:grid grid-cols-4 items-center justify-between">
        <div class=" w-full flex flex-col p-5 items-center justify-center col-span-2">
            <img class="w-full rounded-lg mb-5 shadow-sm shadow-black" src="${data[0].flags.png}" alt="image">
            <button class="btn-active w-full py-2 rounded-lg text-xl font-semibold capitalize shadow-sm shadow-black">view location</button>
        </div>

        <div class="col-span-2 flex flex-col gap-5">
            <h2 class="text-2xl md:text-5xl text-red-500 text-center font-semibold capitalize">bangladesh</h2>

            <div class=" w-full p-3"> 
                <h2 class="lg:text-3xl text-center font-semibold mb-5 capitalize text-teal-500">official Details</h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">official name:-${data[0].name.official} </h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">region:-${data[0].region} </h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">languages:-${data[0].languages.spa} </h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">independent Status:-${data[0].independent} </h2>
            </div>
    
            <div class=" w-full p-3">
                <h2 class="lg:text-3xl text-center font-semibold mb-5 capitalize text-teal-500">common Details</h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">common name:-${data[0].name.common} </h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">currencies name:-${data[0].currencies} </h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">capital City:- ${data[0].capital[0]}</h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">population:- ${data[0].population}</h2>
            </div>
        </div>

        
        </section>
          
        `;
        Details.innerHTML = ''; // Clear existing content
        Details.appendChild(div);
      })
      .catch(error => console.error('Error fetching country details:', error));
  }
  
  loaddata();
  