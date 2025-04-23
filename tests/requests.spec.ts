import { test, expect } from '@playwright/test';

test('Get request Example', async ({ request }) => {
  const response = await request.get('/todos/1');
  console.log("URL: ",response.url());
  console.log("Estatus: ",response.status());
  console.log("Headers: ",response.headers());
  expect(response.status()).toEqual(200);
  expect(response.status()).toStrictEqual(200);
  expect(response.ok).toBeTruthy();
});

test('Post request Example', async ({ request }) => {
  const newItem = await request.post('/posts/', {data: {  
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}});
  console.log("URL: ", newItem.url());
  console.log("Estatus: ",newItem.status());
  console.log("Headers: ",newItem.headers());
  expect(newItem.status()).toEqual(201);
  expect(newItem.ok).toBeTruthy();
  expect(newItem.status()).toStrictEqual(201);
});

test('Put request Example', async ({ request }) => {
  const modifyItem = await request.put('/posts/1', {data: {  
    "userId": 1,
    "id": 1,
    "title": "edited",
    "body": "quia et suscipit"}});
  console.log("URL: ", modifyItem.url());
  console.log("Estatus: ",modifyItem.status());
  console.log("Headers: ",modifyItem.headers());
  expect(modifyItem.status()).toEqual(200);
  expect(modifyItem.ok).toBeTruthy();
  expect(modifyItem.status()).toStrictEqual(200);
});

test('delete request Example', async ({ request }) => {
  const deleteItem = await request.delete('/posts/1');
  console.log("URL: ", deleteItem.url());
  console.log("Estatus: ",deleteItem.status());
  console.log("Headers: ",deleteItem.headers());
  expect(deleteItem.status()).toEqual(200);
  expect(deleteItem.ok).toBeTruthy();
  expect(deleteItem.status()).toStrictEqual(200);
});
