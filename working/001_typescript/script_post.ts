// /api/postsへのpostリクエスト

const postReq = async () => {
  const response = await fetch("http://localhost:3000/api/posts", {
    method: "POST",
    body: JSON.stringify({ 
      id: "test003", 
      title: "testTitle", 
      content: "testContent" 
    }),
  });
  const data = await response.json();
  console.log(data);
};

postReq();