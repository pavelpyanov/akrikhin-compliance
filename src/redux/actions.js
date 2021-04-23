import {
  ADD_NEW_OUESTION,
  ADMIN_VIEW,
  CHANGE_DONE,
  CHANGE_FILTER,
  CLEAR_FILTER,
  HIDE_AUTH_ERROR,
  HIDE_ERROR,
  HIDE_LOADING,
  QUESTIONS_FROM_DATABASE,
  SHOW_AUTH_ERROR,
  SHOW_ERROR,
  SHOW_LOADING,
  USER_VIEW,
} from "./types";
import { checkWord, sendQuestion, setToStorage, getToken } from "./utils";

export const userView = () => {
  return {
    type: USER_VIEW,
  };
};
export const adminView = () => {
  return {
    type: ADMIN_VIEW,
  };
};
export const addNewQuestion = (question) => {
  return {
    type: ADD_NEW_OUESTION,
    payload: question,
  };
};
export const sendQuestionToDataBase = (question, form) => {
  question.date = new Date().toJSON();
  question.done = false;
  return async (dispatch) => {
    const key = await checkWord(+question.checkword);
    if (Boolean(key)) {
      try {
        dispatch(showLoading());
        const response = await sendQuestion(question);
        const json = await response.json();
        question.id = json.name;
        setToStorage(question);
        dispatch(addNewQuestion(question));
        form.reset();
      } catch (error) {
        dispatch(showError("Что то пошло не так..."));
      } finally {
        dispatch(hideLoading());
      }
    } else {
      dispatch(
        showError(
          "Вы ввели неправильное проверочное слово. Оно указано в сопроводительном письме к проекту. Или отсутствует соединение с сетью Интернет"
        )
      );
    }
  };
};
export const showError = (text) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_ERROR,
      payload: text,
    });

    setTimeout(() => {
      dispatch(hideError());
    }, 3000);
  };
};
export const hideError = () => {
  return {
    type: HIDE_ERROR,
  };
};
export const showAuthError = (text) => {
  return {
    type: SHOW_AUTH_ERROR,
    payload: text,
  };
};
export const hideAuthError = () => {
  return {
    type: HIDE_AUTH_ERROR,
  };
};
export const showLoading = () => {
  return {
    type: SHOW_LOADING,
  };
};
export const hideLoading = () => {
  return {
    type: HIDE_LOADING,
  };
};
export const putQuestionsToStore = (questions) => {
  return {
    type: QUESTIONS_FROM_DATABASE,
    payload: questions,
  };
};
export const getQuestionsFromDatabase = (email, password, closeModal) => {
  return async (dispatch) => {
    dispatch(hideAuthError());
    const token = await getToken(email, password, dispatch);
    if (!token) {
      dispatch(showAuthError("Неправильное имя пользователя или пароль"));
      return;
    }
    try {
      const url = `https://akrikhin-complaens-default-rtdb.firebaseio.com/questions.json?auth=${token}`;
      const response = await fetch(url);
      const json = await response.json();
      const jsonKeys = Object.keys(json);
      const questions = [];
      jsonKeys.forEach((key) => {
        json[key].key = key;
        questions.push(json[key]);
      });
      dispatch(putQuestionsToStore(questions));
      closeModal.click();
      dispatch(adminView());
    } catch (error) {
      console.log(error);
    }
  };
};
export const changeDone = (key, checked) => {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const url = `https://akrikhin-complaens-default-rtdb.firebaseio.com/questions/${key}.json`;
      const response = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify({
          done: !checked,
        }),
      });
      const json = await response.json();
      dispatch(hideLoading());
      if (json.error) {
        throw new Error();
      }
      dispatch({
        type: CHANGE_DONE,
        payload: key,
      });
    } catch (error) {
      dispatch(
        showError(
          "Не изменено. Возможно у вас проблемы с интернет соединением."
        )
      );
      dispatch(hideLoading());
    }
  };
};
export const changeFilter = (name, value) => {
  return {
    type: CHANGE_FILTER, 
    payload: {
      name: name,
      value: value,
    }
  }
}
export const clearFilter = () => {
  return {
    type: CLEAR_FILTER
  }
}