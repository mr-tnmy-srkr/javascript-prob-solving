console.log(1);
console.log(2);

// async start
setTimeout(() => {
    console.log('lazy logged')
},2000);

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });


  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  
  // Call the async function
  fetchData();
  
// async end

doSomething();
console.log(4);
console.log(5);
console.log(6);

function doSomething(){
    console.log(3)
}

/* output

1
2
3
4
5
6

{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
{
  userId: 1,
  id: 2,
  title: 'qui est esse',
  body: 'est rerum tempore vitae\n' +
    'sequi sint nihil reprehenderit dolor beatae ea dolores neque\n' +
    'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n' +
    'qui aperiam non debitis possimus qui neque nisi nulla'
}

lazy logged */
