export const getDataResponse = async (resource, query) => {
  const response = await fetch(`https://gorest.co.in/public/v2${resource}?${query}`);
  const data = response.json();
  return data;
};

export const getSpecifiedPostData = async (postID) => {
  const response = await fetch(`https://gorest.co.in/public/v2${postID}`);
  const data = response.json();
  return data;
};

export const getSpecifiedCommentData = async (postID) => {
  const response = await fetch(`https://gorest.co.in/public/v2/posts${postID}/comments`);
  const data = response.json();
  return data;
};
