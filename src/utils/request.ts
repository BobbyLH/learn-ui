import Request from 'ajax-maker';

const { request, axios } = new Request({
  isSuccess: (res) => res.code === 0
});

export default request;