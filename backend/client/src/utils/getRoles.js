export const getRoles = (roles) => {
  const array = [];
  roles
    .filter((item) => item.role !== "admin")
    .map((role) => array.push(role.role));
  return array;
};
