import axios from 'axios';


async function getData(id) {
    const {data: user} =  await  axios('https://jsonplaceholder.typicode.com/users/' + id);
    const {data: post} =  await  axios('https://jsonplaceholder.typicode.com/posts?userId=' + id);
    const userDetail =
    {
        id: user.id,
		name: user.name,
		username: user.username,
		email: user.email,
		address: user.address,
		phone:user.phone,
		website: user.website,
		company: user.company,
		posts: post

  }
   return userDetail;
  }

export default getData;