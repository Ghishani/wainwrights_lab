let wainwrightsData

const wainwrightsList = document.querySelector("#wainwrights-list");

const getAllWainwrights = async () => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    const data = await response.json();
    entireWainwrights = data;
    mapWainwrights(entireWainwrights);
    console.log(entireWainwrights);

}

const mapWainwrights = (wainwrightElement) => {
    //empty speech marks clears the list
    wainwrightsList.innerText = "";
    wainwrightElement.forEach(wainwright => {
        let wainwrightElement = document.createElement("li");
        wainwrightElement.innerText= 
       ` ${wainwright.name} 
        Height: ${wainwright.heightMetres}m
        Area: ${wainwright.area.areaName}`;

        wainwrightsList.appendChild(wainwrightElement);
    });
}

const filterWainwrights = async (filterValue) => {
    let filteredWainwrightsList = await entireWainwrights.filter(wainwright => wainwright.name.toLowerCase().includes(filterValue));
    mapWainwrights(filteredWainwrightsList);
}


document.querySelector("#filter-wainwrights-form").addEventListener('submit', (e) => {
    e.preventDefault();
    wainwrightsList.innerText = "";
    let filterValue= e.target['filter-value'].value;
    console.log(filterValue);
    filterWainwrights(filterValue);
});

getAllWainwrights();
