import fetch from 'node-fetch';

describe('Example test', () => {
  it('fetches network request', async () => {
    const res = await fetch("https://google.com")
    expect(res.status === 200)
  });
});