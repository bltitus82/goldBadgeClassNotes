const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'ncjTB1ApDaQxdvNrkhSeKIMVdAh6IA3B'; //2
let url; //3

const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');

nav.style.display = 'none';
let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false;

        //1                     //2   
searchForm.addEventListener('submit', fetchResults); 
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click', previousPage); //3

function fetchResults(e){
    // console.log(e);
    e.preventDefault();
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    console.log("URL:", url);

    if(startDate.value !== '') {
        console.log(startDate.value)
      url += '&begin_date=' + startDate.value;
    };
  
    if(endDate.value !== '') {
      url += '&end_date=' + endDate.value;
    };
//1
    fetch(url)
    .then(function(result) {
    console.log(result)
        return result.json(); //2
    }).then(function(json) {
        displayResults(json); //3
    });
}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);

    }
    let articles = json.response.docs;
    
    if(articles.length >= 10) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }

    if (articles.length === 0) {
    console.log("No Results"); 
    } else {
        for(let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let image = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = articles[i];
            console.log("Current:", current);
            
            link.href = current.web_url;
            link.textContent = current.headline.main;

            for(let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span)
            }

            if(current.multimedia.length > 0) {
                image.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                image.alt = current.headline.main;
            }

            clearfix.setAttribute('class', 'clearfix');

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(image);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
};

function nextPage(e) {
    pageNumber++;
    fetchResults(e);
    console.log("Page number:", pageNumber);
}

function previousPage(e) {
    if(pageNumber > 0) {
        pageNumber--; 
    } else {
        return;
    }
    fetchResults(e);
    console.log("Page:", pageNumber);
}

url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q' + searchTerm.value;
console.log(url);

function nextPage(){
    console.log("Next button clicked");
}

function previousPage(){
    console.log("Previous button clicked");
}
