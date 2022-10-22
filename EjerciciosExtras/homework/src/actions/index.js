export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_POST = 'GET_ALL_USERS_POST';
export const GET_ALL_COMMENTS_POST = 'GET_ALL_COMMENTS_POST';

//action creators 
//asyncrono
export function getAllUsers(){
    return function(dispatch) { //retorna función para hacer la petición cuando se ejecute la acción 
        return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) //captura respuesta y convierte a JSON (OBJ JS)
        .then(
            //obtiene OBJ JS y envía acción
            posts => {
                dispatch({
                    type: GET_ALL_USERS,
                    payload: posts
                })
            }
        );  
    }
}

export function getAllUserPosts(id){
    return function (dispatch) {
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => response.json()) 
        .then(
            posts => {
                dispatch({
                    type: GET_ALL_USERS_POST,
                    payload: posts
                })
            }
        )
    }
}

export function getAllCommentsPost(id){
    return function(dispatch){
        return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response => response.json())
        .then(
            posts => {
                dispatch({
                    type: GET_ALL_COMMENTS_POST,
                    payload: posts
                })
            }
        )
    }
}

export function getAllPosts(){
    return function(dispatch){
        return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(
            posts => {
                dispatch({
                    type: GET_ALL_POSTS,
                    payload: posts
                })
            }
        )
    }
}