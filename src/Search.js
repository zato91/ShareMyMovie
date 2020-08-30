// import React, {Component} from 'react'

// class Login extends Component{

//     handleChange = (e) => {
//       this.setState({
//         [e.target.name]: e.target.value
//       })
//     }

//     handleSubmit = (e) => {
//       e.preventDefault()

//     //   fetch("http://localhost:3000/login", {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/json"
//     //     },
//     //     body: JSON.stringify({
//     //       username: this.state.username,
//     //       password: this.state.password
//     //     })
//     //   })
//     //   .then(res => res.json())
//     //   .then(data => {
//     //     localStorage.token = data.token
//     //     console.log(localStorage.token)
//     //   })
//     let url = `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${this.state.username}&country=us`
        
//     console.log(url)
//     fetch(url, {
//         "method": "GET",
//         "headers": {
//           "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
//           "x-rapidapi-key": "3d80bfb1fcmsha6879bf3856fa03p19e354jsnec261fdd4c92"
//         }
//       })
//       .then(res => res.json())
//       .then(data => console.log(data.map ))
//       .catch(err => {
//         console.log(err);
//       });
//     }


//     render(){
//         return(
//         <div>
//              <h2>Login</h2>
//             <form onSubmit={(e) => this.handleSubmit(e)}>
//             <label>UserName</label>
//             <input onChange={(e) => this.handleChange(e)} name="username" type="text"  />
//             {/* <label>Password</label>
//             <input onChange={(e) => this.handleChange(e)} name="password" type="password" /> */}
//             <input type="submit"/>
//             </form>
//         </div>
//         )
//     }
// }

// export default Login