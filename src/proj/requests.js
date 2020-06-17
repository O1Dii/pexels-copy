import queryString from 'query-string';

export const GET = (baseUrl, params, token) => {
  const url = `${baseUrl}${params ? '?' : ''}${queryString.stringify(params)}`;
  const headers = {};

  if(token) {
    headers['Authorization'] = token
  }

  console.log(url);

  return fetch(url, {method: 'GET', headers});
};

export const POST = (url, body, token) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };
  if(token) {
    headers['Authorization'] = token
  }

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers,
  });
};
