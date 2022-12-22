

export const getUsers = () => {
  return fetch('http://localhost:2021/users')
    .then(res => res.json())
    .then((res) => res);
}
