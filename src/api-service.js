const TOKEN = '53b4958afea9ce7af89755cfa8cfc4e401f2aa13'
export class API {
    static updateMovie(mov_id, body){
        return fetch(`http://127.0.0.1:8000/api/movie/${mov_id}/`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body :JSON.stringify(body)
          }).then(resp => resp.json())
    }

    static createMovie(body){
        return fetch(`http://127.0.0.1:8000/api/movie/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body :JSON.stringify(body)
          }).then(resp => resp.json())
    }
    static deleteMovie(mov_id){
        return fetch(`http://127.0.0.1:8000/api/movie/${mov_id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            }
          })
    }
}