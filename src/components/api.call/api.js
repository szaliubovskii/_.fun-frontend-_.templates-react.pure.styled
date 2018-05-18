const dummyData = ['this', 'is', 'dummy', 'data']

export const dataLoad = () =>
  new Promise(resolve => setTimeout(() => resolve(dummyData), 2000))
