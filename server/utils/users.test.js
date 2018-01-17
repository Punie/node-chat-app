/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable padded-blocks */

const { expect } = require('chai');

const { Users } = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Hugo',
      room: 'dev'
    }, {
      id: '2',
      name: 'Morgane',
      room: 'dev'
    }, {
      id: '3',
      name: 'Cristal',
      room: 'news'
    }];
  });

  describe('#addUser', () => {
    it('should add new user', () => {
      const users = new Users();
      const user = {
        id: '123',
        name: 'Hugo',
        room: 'dev'
      };
      const resUser = users.addUser(user.id, user.name, user.room);

      expect(users.users).to.deep.equal([user]);
    });
  });

  describe('#removeUser', () => {
    it('should remove a user', () => {
      expect(users.removeUser('3')).to.include({ id: '3' });
      expect(users.users).to.have.lengthOf(2);
    });

    it('should not remove user', () => {
      expect(users.removeUser('57')).to.not.exist;
      expect(users.users).to.have.lengthOf(3);
    });
  });

  describe('#getUser', () => {
    it('should find user', () => {
      expect(users.getUser('1')).to.deep.equal(users.users[0]);
    });

    it('should not find user', () => {
      expect(users.getUser('57')).to.not.exist;
    });
  });

  describe('#getUserList', () => {
    it('should return names for dev', () => {
      const userNames = users.getUserList('dev');

      expect(userNames).to.deep.equal(['Hugo', 'Morgane']);
    });

    it('should return names for news', () => {
      const userNames = users.getUserList('news');

      expect(userNames).to.deep.equal(['Cristal']);
    });
  });

});
