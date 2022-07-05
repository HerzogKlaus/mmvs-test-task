export class Http {
  static async get(url) {
    const response = await fetch(url, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json'
      },
    });

    return await response.json();
  }
}
