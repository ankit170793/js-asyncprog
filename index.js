// Import stylesheets
import './style.css';

//dummy data to show
const datas = [
  { name: 'Ankit', profession: 'Software engineer' },
  { name: 'Anand', profession: 'Banker' },
  { name: 'Sonu', profession: 'Mech engineer' },
];

function getDatas() {
  setTimeout(() => {
    let renderData;
    datas.forEach((data, index) => {
      renderData += `<li>${data.name} - ${data.profession}</li>`;
      document.body.innerHTML = renderData;
    });
  }, 1000);
}

/*
//problem statement & old approach

function createData(newData,callback) {
  setTimeout(() => {
    datas.push(newData);
    callback();
  }, 2000);
}
createData({ name: 'mohit', profession: 'locopilot' });
getDatas();
// problem because getdata is calling early due to given less time, hence new data not //reflecting 

*/


/*
//callback approach to resolve
function createData(newData,callback) {
  setTimeout(() => {
    datas.push(newData);
    callback();
  }, 2000);
}
createData({ name: 'mohit', profession: 'locopilot' },getDatas);
*/



/*
//Promise approach to resolve
function createData(newData) {

  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      datas.push(newData);
      let error = false;
      if(!error){
        resolve();
      }else{
        reject('something went wrong!');
      }
    }, 2000);
  });
  
}
createData({ name: 'mohit', profession: 'locopilot' }).then(getDatas).catch(e=> console.log(e));
*/



/*
//Async await approach
function createData(newData) {

  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      datas.push(newData);
      let error = false;
      if(!error){
        resolve();
      }else{
        reject('something went wrong!');
      }
    }, 2000);
  });
  
}

async function initiliaze(){
  await createData({ name: 'mohit', profession: 'locopilot' });
  getDatas();
}
initiliaze();
*/
