var githubUserData = '';
function searchFriends(username){
    var Url = "https://api.github.com/users/" + username;
    fetch(Url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log(data.login);
        githubUserData = data;
    })
}


async function gitHub_GetUserData_Async(githubuser){
    var url = `https://api.github.com/users/${githubuser}`
    // console.log(url)
    let response = await fetch(url)
    let githubUser = await response.json();
    console.log(githubUser)
    return githubUser
   
}

async function gitHub_GetFollowers_Async(githubuser){
    var url = 'https://api.github.com/users/'+githubuser+'/followers'
    
    try {
    	const response = await fetch(url)
    	const data = await response.json()
        console.log(data)
        return data
    } catch (err) {
       console.log(err)
    }

}


async function gitHub_GetFollowing_Async(githubuser){
    var url = 'https://api.github.com/users/'+githubuser+'/following'

    try {
    	const response = await fetch(url)
    	const data = await response.json()
        console.log(data)
        return data

    } catch (err) {
       console.log(err)
    }

    

}


async function gitHub_GetUserRepos_Async(githubuser){
    var url = 'https://api.github.com/users/'+githubuser+'/repos?sort=pushed&per_page=4'

    try {
    	const response = await fetch(url)
    	const data = await response.json()
        console.log(data)
        return data
    } catch (err) {
       console.log(err)
    }

    

}

async function gitHub_GetRepoCollabs_Async(githubuser){
    var url = `https://api.github.com/repos/${githubuser}/gitHomies/contributors?`
    // console.log(url)
    let response = await fetch(url)
    let githubCollab = await response.json();
    // console.log(githubCollab)
    return githubCollab
   
}

//testing this new function
async function gitHub_GetReadme_MD_Async(githubuser, repo, branch){
    var url = `https://raw.githubusercontent.com/${githubuser}/${repo}/${branch}/README.md`
    // console.log(url)
    let response = await fetch(url)
    let readmeMD = await response;
    // console.log(githubCollab)
    return readmeMD
   
}

//testing this new function
async function gitHub_GetReadme_MD_Async2(githubuser, repo, branch){

    try{
    var url = `https://raw.githubusercontent.com/${githubuser}/${repo}/${branch}/README.md`
    // console.log(url)
    let response = await fetch(url)
    if(response.ok){
    let readmeMD = await response.text();
    // console.log(githubCollab)
    return  readmeMD
    }
    else {return "No readme Found"}
    }
    catch (err) {
        console.log(err)
        return  "error"
     }
    
    
}







async function showAvatar(user) {

    //test
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user}`);
    let githubUser = await githubResponse.json();
  
   
    return githubUser.avatar_url;
  }
  
//   var avatar = showAvatar('ernestotham');




// async function gettestData(githubuser) {
//     let response = await fetch(`https://api.github.com/users/${githubuser}`);
//     let data = await response.json()
//     return data;
//   }
  
  
  
//   async function writetoconsole(){
//         // getData is a promise

//         console.log("test1")
//         console.log(gettestData('ernestotham')

//       }
  



// gitHub_GetUserData_Async('ernestotham').then((resp) => { console.log("got user data")
// console.log(resp)
// console.log("done")})
