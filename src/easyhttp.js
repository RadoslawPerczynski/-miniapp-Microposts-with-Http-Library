class easyHttp {
  async get(url) {
      let response = await fetch(url);
      let users = await response.json();
      return users;
    }

  async post(url, data) {
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;

  }
  async put(url, data) {
    const response = await fetch(url, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData;
  }
  async delete(url) {
    const response = await fetch(url, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const resData = 'Resource deleted';
    return resData;
  }
}



export const http = new easyHttp();