// import React from 'react'
export const userlogin=async (username, password) => {
    // const apiUrl = apiEndPoints.login();
    const response={
        ok:'OK',
        status:'200',
        statusText:'SUCCESS'
    }
    // const body = {
    //   username,
    //   password
    // };
    try {
        // const results = await request('POST', apiUrl, body);
        const results={
        success: response.ok,
        status: response.status,
        statusText: response.statusText,
        response: {
            user:'nidheesh',
            password:'passmen'
        }
        }
        // @ts-ignore
        localStorage.setItem('token', 'thisismytoken');
        // @ts-ignore
        return results.response.user;
      } catch (e) {
        return null;
      }
}