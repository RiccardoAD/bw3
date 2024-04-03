async function sendPost(postData) {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkNWU2MGY5NGY0YTAwMTkzNzkxZDYiLCJpYXQiOjE3MTIxNTIxNjAsImV4cCI6MTcxMzM2MTc2MH0.RcnjBt8Rp9rbpgktsZhm9U5HzwymeiRgeKD0WWAT-Rg",
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