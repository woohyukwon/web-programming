/*eslint no-process-env:0*/

export const env = process.env.NODE_ENV;
export const port = process.env.PORT || 9000;
// List of user roles
export const userRoles = ['guest', 'user', 'admin'];

// About me information
export const about = {
  name: {
    first: 'First',
    last: 'Last'
  },
  email: 'first.last@du.edu',
  course: 'Web Programming II'
}

export default {
    env,
    port,
    userRoles,
    about
};
