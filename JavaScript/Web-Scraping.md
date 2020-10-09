# Web-Scraping

## Using JavaScript in the Console of live web pages

### How to get a list of Teams from list of NHL Teams

// https://www.nhl.com/info/teams

document.querySelectorAll('.team-name').forEach(n => console.log(`'${n.innerText}',`))

- next,  work on getting nodelist into an array and return a new array including each element surrounded by quotes and separated by commas.





