const axios = require('axios');

  const url = 'http://127.0.0.1:3000/';
  
  describe('El contador', () => {
    test('el get del contador', async () => {
      const res = await axios.get(url)

      expect(res).toBeTruthy()
      expect(res.status).toBe(200)
      //expect(res.data).toEqual('Hello World!')
    })
  })