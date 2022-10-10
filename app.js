const get_api_res_btn = document.getElementById('get_api_res_btn');
const searchTitleField = document.getElementById('searchTitle');
const api_result1 = document.getElementById('api_result1');
 
get_api_res_btn.addEventListener('click', getAPI);
 
function getAPI(){
    fetch(
        'https://dog.ceo/api/breed/' + Breed.value + '/images/random',
        { method: 'GET' }
    )
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        if (data.Response === 'False') {
            api_result1.style.display = 'none';
            
            return;
        }
        
        api_result1.style.display = 'block';
        api_result1.innerHTML =  '<img width=50% height=50% src=' + data.message + '>' + '<br>Image URL: ' + data.message + '<br>status: ' + data.status + '<br>' ;

    });
}
