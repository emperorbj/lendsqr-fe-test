// src/generateUsers.ts
import { faker } from '@faker-js/faker';

interface User {
    id: number;
    organization: string;
    username: string;
    email: string;
    phone_number: string;
    date_joined: string;
    user_status: string;
}

const organizations = ["leadsqr", "leadway", "paystack", "meta"];
const statuses = ["blacklisted", "active", "inactive", "pending"];

const generateUser = (id: number): User => {
    return {
        id,
        organization: faker.helpers.arrayElement(organizations),
        username: faker.person.fullName(),
        email: faker.internet.email(),
        phone_number:  `08${faker.string.numeric(9)}`,
        date_joined: faker.date.past().toISOString(),
        user_status: faker.helpers.arrayElement(statuses)
    };
    };

    const generateUsers = (count: number): User[] => {
    const users: User[] = [];
    for (let i = 1; i <= count; i++) {
        users.push(generateUser(i));
    }
    return users;
};

const users = generateUsers(500);



export default users;
