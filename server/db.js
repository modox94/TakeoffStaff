const faker = require('faker');

module.exports = {
  users: [
    {
      name: 'user1',
      password: 'pass1',
      contactList: [
        {
          id: faker.random.uuid(),
          name: faker.name.findName(),
          tel: faker.phone.phoneNumber(),
        },
        {
          id: faker.random.uuid(),
          name: faker.name.findName(),
          tel: faker.phone.phoneNumber(),
        },
        {
          id: faker.random.uuid(),
          name: faker.name.findName(),
          tel: faker.phone.phoneNumber(),
        },
        {
          id: faker.random.uuid(),
          name: faker.name.findName(),
          tel: faker.phone.phoneNumber(),
        },
        {
          id: faker.random.uuid(),
          name: faker.name.findName(),
          tel: faker.phone.phoneNumber(),
        },
        {
          id: faker.random.uuid(),
          name: faker.name.findName(),
          tel: faker.phone.phoneNumber(),
        },
      ],
    },
    {
      name: 'user2',
      password: 'pass2',
      contactList: [
        {
          id: faker.random.uuid(),
          name: faker.name.findName(),
          tel: faker.phone.phoneNumber(),
        },
        {
          id: faker.random.uuid(),
          name: faker.name.findName(),
          tel: faker.phone.phoneNumber(),
        },
        {
          id: faker.random.uuid(),
          name: faker.name.findName(),
          tel: faker.phone.phoneNumber(),
        },
        {
          id: faker.random.uuid(),
          name: faker.name.findName(),
          tel: faker.phone.phoneNumber(),
        },
        {
          id: faker.random.uuid(),
          name: faker.name.findName(),
          tel: faker.phone.phoneNumber(),
        },
        {
          id: faker.random.uuid(),
          name: faker.name.findName(),
          tel: faker.phone.phoneNumber(),
        },
      ],
    },
  ],
};
