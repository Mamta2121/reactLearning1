import React , {useEffect, useState }from 'react'


function Github() {
  //an api call to get github follwers when the component loads
  const [data, setData] = useState([]);

  useEffect ( ()=> {
   
     fetch('https://api.github.com/users/Mamta2121')
     .then( response => response.json())
     .then( data => {
      console.log(data);
      setData(data);

     })
  },[])
  return (
    <div>
      GithubFollowers : {data.followers}
      <img className=' w-25 ' src = {data.avatar_url} alt = "Github Profile Picture"/>
    </div>
  )
}

export default Github;
