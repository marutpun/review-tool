import { createStore } from 'redux';

const ADD_NEW_POST = 'ADD_NEW_POST';
const DELETE_POST = 'DELETE_POST';
const FLAG_POST = 'FLAG_POST';

export const initialState = {
  post: [
    {
      id: 'oF31VqnLuRzeCHqWJ0TM3',
      message:
        "A beautiful sunrise to make my return to USA. Can't wait to get started as Consul General for NY, NJ, PA & Fairfield County and Her Majesty’s Trade Commissioner for North America. We have a lot of important work to do, together. #partnerships #freetrade #innovation #COP26",
      isFlag: false,
      isRemove: false,
      category: 'Roofing (Metal)',
      date: '2/26/2021',
    },
    {
      id: '03669bfd-7ad1-4cac-b76b-d696203f9541',
      message:
        '※詳細です※ ベースカラーと文字カラーはそれぞれ10色の中から選んで組み合わせられます。 入れられる文字は右側部分で、12文字以内となります。 価格は税込み3300円、お渡しは1月中旬予定となります。 ご質問はお気軽にDMでどうぞ！',
      isFlag: false,
      isRemove: false,
      category: 'Framing (Wood)',
      date: '10/28/2021',
    },
  ],
  isLoading: false,
  isError: null,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_POST:
      return { ...state, post: [action.payload, ...state.post] };

    case DELETE_POST:
      return {
        ...state,
        post: state.post.filter((post) => post.id !== action.payload),
      };

    case FLAG_POST:
      const newUpdate = state.post.map((post) => {
        if (post.id === action.payload) {
          return { ...post, isFlag: !post.isFlag };
        } else {
          return post;
        }
      });
      return { ...state, post: newUpdate };

    default:
      return state;
  }
}

export const store = createStore(postReducer);

export const storeDev = createStore(
  postReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export function addNewPost(newPost) {
  return {
    type: ADD_NEW_POST,
    payload: newPost,
  };
}

export function deletePost(postId) {
  return {
    type: DELETE_POST,
    payload: postId,
  };
}

export function flagPost(postId) {
  return {
    type: FLAG_POST,
    payload: postId,
  };
}
