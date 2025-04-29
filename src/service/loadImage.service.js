class FetchImage {
  async loadImage({ url, id }) {
    return new Promise((resolve, reject) => {
      window.postMessage({
        type: 'EXTENSION_FETCH_IMAGE',
        payload: { url, id }
      }, '*')
      resolve()
    })
  }
}

export default FetchImage;