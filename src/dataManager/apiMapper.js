const API = process.env.REACT_APP_API;

export const EndPoint = {
  // ------ 오케이포스 홈페이지
  GET_V1_TEST_AUTO_LOGIN: `${API}/test/v1/jwt/check/:isManual`,
};

const ApiMapper = {
  get: {
    [EndPoint.GET_V1_TEST_AUTO_LOGIN]: {},
  },
  post: {
    [EndPoint.GET_V1_TEST_AUTO_LOGIN]: {},
  },
  put: {
    [EndPoint.GET_V1_TEST_AUTO_LOGIN]: {},
  },
  patch: {
    [EndPoint.GET_V1_TEST_AUTO_LOGIN]: {},
  },
  delete: {
    [EndPoint.GET_V1_TEST_AUTO_LOGIN]: {},
  },
};
export default ApiMapper;
