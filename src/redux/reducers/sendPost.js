async function sendPost(postData) {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        headers: {
          Authorization:
         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlZmY1ZTEzZGYwYTAwMTk0OWY2MTUiLCJpYXQiOjE3MTIyNTg5MTAsImV4cCI6MTcxMzQ2ODUxMH0.5_i4c0iNzXPNEqXEJHvAfRa8emy72db3pOy_vFhBjuk",
         
         
         
         
         
         
         
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      if (response.ok) {
        console.log("POST AVVENUTO" + postData);
        return response;
      }
    } catch (error) {
      console.error("Error", error);
    }
  }
  
  export default sendPost;