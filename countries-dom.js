const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all');

request.send(null);

request.onload = () => {
  const response = JSON.parse(request.responseText);
  console.log(response);

  // const flagsStr = response.map(country => country.flag).join(' ');

  // console.log(flagsStr);

  // document.body.append(flagsStr); // using append
  // document.body.innerText = flagsStr; // using innerText
  // document.body.innerHTML = flagsStr; // using innerHTML
  response.forEach(country => {
    const countryFlag = document.createElement('img');
    // image url ---> country.flags.png
    // country name --> country.name.common
    // countryFlag.src = country.flags.png;
    // countryFlag.alt = country.name.common;
    countryFlag.setAttribute('src', country.flags.png);
    countryFlag.setAttribute('alt', country.name.common);

    countryFlag.style.margin = '8px';

    document.body.append(countryFlag);
  });
};