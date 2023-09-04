/* async function getUser(url){
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
}
getUser(url) */

async function getUser(url){
   try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
   }
   catch(err){
    console.log(err);
   }
}