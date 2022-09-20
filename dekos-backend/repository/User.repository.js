const connection = require("../database/connection");

const { USER_ROLE, ACTIVE_STATUS } = require("../constants");

const register = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const id = await saveUser(user);
      await saveProfile(user, id);
      resolve("Profile successfully created!");
    } catch (error) {
      reject(error);
    }
  });
};
const login = (user) => {
  return new Promise((resolve, reject) => {
    const { emailAddress, password } = user;
    const queryUser = `SELECT user.username,user.id,user.email,user.role,user.status,
    profile.firstName,profile.lastName,profile.address
     FROM user,profile where email = ? and password = ? and user.id = profile.id and user.status = 'ACTIVE_STATUS'`;
    connection.query(queryUser, [emailAddress, password], (err, result) => {
      if (err) return reject(err);
      resolve(result[0] || null);
    });
  });
};

const saveUser = (user) => {
  const { username, emailAddress, password } = user;
  const queryUser = `INSERT INTO user (username,email,password,role,status)
     VALUES (?,?,?,?,?) `;
  return new Promise((resolve, reject) => {
    connection.query(
      queryUser,
      [username, emailAddress, password, USER_ROLE, ACTIVE_STATUS],
      (err, result) => {
        if (err) return reject(err);
        resolve(result.insertId);
      }
    );
  });
};
const saveProfile = (user, id) => {
  const { firstName, lastName, address } = user;
  const queryUser = `INSERT INTO profile (id,firstName,lastName,address)
     VALUES (?,?,?,?) `;
  return new Promise((resolve, reject) => {
    connection.query(
      queryUser,
      [id, firstName, lastName, address, USER_ROLE],
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
  });
};


const getUsers = () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT user.username,user.id,user.email,user.role,user.status,
    profile.firstName,profile.lastName,profile.address
     FROM user,profile where user.id = profile.id`;
    connection.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

module.exports = {
  register,
  login,
  getUsers
};
