
const repo = 'SarahYiskah/javascript-fetch-lab-web-012918'


function getIssues() {
  // let title = document.getElementById('title')
  // let body = document.getElementById('body')
  let issues = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  return issues
}

function showIssues(json) {
  let issues = document.getElementById('issues')
  let p = document.createElement('p')
  p.innerText= json.title
  issues.append(p)
}

function createIssue() {
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'POST',
    headers: {
      'Authorization': `token ${gettoken()}`
    },
    body: JSON.stringify(getIssues())
  })
  .then(res => res.json())
  .then(json => showIssues(json));
}

function showResults(json) {
  let results = document.getElementById('results')
  let a = document.createElement('a')
  a.setAttribute('href', json.html_url)
  a.innerText= json.name
  results.append(a)
}

function forkRepo() {

  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      'Authorization': `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = ''
  return token
}
