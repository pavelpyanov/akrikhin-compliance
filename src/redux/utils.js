export const sendQuestion = (question) => {
  const url =
    "https://akrikhin-complaens-default-rtdb.firebaseio.com/questions.json";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(question),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const setToStorage = (question) => {
  let storage = JSON.parse(localStorage.getItem("questions")) || [];
  storage.push(question);
  localStorage.setItem("questions", JSON.stringify(storage));
};

export const checkWord = async (word) => {
  try {
    const key = JSON.stringify(word)
    const response = await fetch(`https://akrikhin-complaens-default-rtdb.firebaseio.com/keyword/${key}.json`)
    const answer = await response.json()
    return answer  
  } catch (error) {
    return null 
  }
}
export const getToken = async (email, password, dispatch) => {
  const apiKey = `AIzaSyCW0WbHoi6SD6euZkBdjI3q9SSGnAa_wlw`;
  const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
  const body = JSON.stringify({
    email,
    password,
    returnSecureToken: true,
  });

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    const json = await response.json();
    if (json.error) {
      return;
    }
    const token = json.idToken;
    return token;
  } catch (error) {
    console.log(error);
  }
};
export  const clearInput = (collection) => {
  for (let index = 0; index < collection.length; index++) {
    collection[index].value = "";
  }
};
