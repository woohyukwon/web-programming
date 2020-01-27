import uuidv4 from 'uuid/v4';

class User {
  users = [];

  findUser(user) {
    var id = user.id;
    var found = -1;

    // loop to check through users and see if one contains the correct id
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].id == id) {
        found = i;
        break;
      }
    }
    return found;
  }

  find() {
    // Returns a list of all users
    return this.users;
  }

  findById(userId) {
    var a = 0;
    for(var i = 0; i < this.users.length; i++) {
      if(this.users[i].id == userId) {
        a += 1;
        return this.users[i];
      }
    }
    if(a == 0) {
      return null;
    }
    // Find user by Id
    // Returns user, or null if not present
  }

  create(user) {
    var newId = uuidv4();
    var newUser = ({
      id: newId,
      name: user.name,
      address: user.address,
      age: user.age,
    });
    this.users.push(newUser);
    return newUser;
    // Create a new user
    // Return created user
    // Generate the id and overwrite any id that may be present in user
  }

  findOneAndUpdate(user) {
    var found = this.findUser(user);

    if (found == -1) {
      this.users.push(user);
      return false;
    }
    else {
      this.users.splice(found, 1);
      this.users.push(user);
      return true;
    }
    // Find user and update
    // If user does not exist, create it using Id provided
    // Return true if user was updated, false if user was created
  }

  remove(user) {
    var found = this.findUser(user);

    if (found == -1) {
      return false;
    }
    else {
      this.users.splice(found, 1);
      return true;
    }
    // Remove user if exists with the Id provided
    // Return true if removed
    // Return false if did user not exist
  }
}

export default new User();
