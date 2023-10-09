function loaddata(){
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data=>displaydata(data))
}

function displaydata(data){
    const display =document.getElementById('display')
    data.forEach(data => {
        const div=document.createElement('div')
        const {capital:id}=data
        div.classList.add('bg-green-100', 'p-5', 'shadow-inner', 'shadow-black', 'rounded-lg', 'h-full', 'flex', 'flex-col', 'items-center', 'justify-center','mb-5')
        div.innerHTML=`
        <img class="w-full mx-2" src="${data.flags.png}" alt="img">
        <h2 class="text-2xl text-center py-2 font-semibold mb-2">${data.name.common}</h2>
        <h2 class="text-2xl text-center py-2 font-semibold mb-2">${id}</h2>
        <button onclick="showdetauls(id)" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full">Details</button>
        `
        display.appendChild(div)
    });
}


const div= document.createElement('div')
function showdetauls(id){
    const Details=document.getElementById('Details')
    fetch(`https://restcountries.com/v3.1/capital/${id}}`)
    .then(response=>response.json())
    .then(data =>{
        console.log(data);
        div.innerHTML=`
        <section class="bg-slate-100 gap-5 p-5 lg:grid grid-cols-4 items-center justify-between">
        <div class=" w-full flex flex-col p-5 items-center justify-center col-span-2">
            <img class="w-full rounded-lg mb-5 shadow-sm shadow-black" src="https://flagcdn.com/w320/bd.png" alt="image">
            <button class="btn-active w-full py-2 rounded-lg text-xl font-semibold capitalize shadow-sm shadow-black">view location</button>
        </div>

        <div class="col-span-2 flex flex-col gap-5">
            <h2 class="text-2xl md:text-5xl text-red-500 text-center font-semibold capitalize">bangladesh</h2>

            <div class=" w-full p-3"> 
                <h2 class="lg:text-3xl text-center font-semibold mb-5 capitalize text-teal-500">official Details</h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">official name:- </h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">region:- </h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">languages:- </h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">independent Status:- </h2>
            </div>
    
            <div class=" w-full p-3">
                <h2 class="lg:text-3xl text-center font-semibold mb-5 capitalize text-teal-500">common Details</h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">common name:- </h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">currencies name:- </h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">capital City:- </h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">population:- </h2>
            </div>
        </div>

        
        </section>
        `
        Details.appendChild(div)
        console.log(Details);
    })
}

loaddata();