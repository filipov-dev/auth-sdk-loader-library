export const loader = (): Promise<typeof window.FD.auth> => {
  return new Promise((resolve, reject) => {
    try {
      const script = document.createElement('script');
      script.onload = () => {
        resolve(window.FD.auth);
      }

      script.onabort = (e) => {
        reject(e);
      }

      script.src = 'https://static.filipov.dev/loaders/auth/index.js';
    } catch (e) {
      reject(e);
    }
  });
}
