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
    gender: string;
    education: string;
    employment:string;
    marital: string;
    children: string;
    sector: string;
    duration: string;
    income: string;
    loan: string;
    relationship: string;
    guarantor_name: string;
    residence: string;
}

const organizations = ["leadsqr", "leadway", "paystack", "meta"];
const statuses = ["blacklisted", "active", "inactive", "pending"];
const gender = ["Male", "Female"];
const education = ["B.Sc", "M.Sc", "Ph.D"];
const employment = ["Employed", "Unemployed", "Self Employed"];
const marital = ["Single", "Married", "Divorced"];
const children = ["1", "2", "3"];
const sector = ["Education", "Fintech", "Petroleum", "Agricultural"];
const duration = ["2", "4", "6"];
const income = ["200,000", "400,000", "300,000", "1000,000", "300,000"];
const loan = ["2000", "3300", "40000", "3000", "50000"];
const relationship = ["Boss", "Pastor", "Sibling"];
const residence = ["Flat", "Duplex", "Cottage", "Cabin"]



const generateUser = (id: number): User => {
    return {
        id,
        organization: faker.helpers.arrayElement(organizations),
        username: faker.person.fullName(),
        email: faker.internet.email(),
        phone_number:  `08${faker.string.numeric(9)}`,
        date_joined: faker.date.past().toISOString(),
        user_status: faker.helpers.arrayElement(statuses),
        gender: faker.helpers.arrayElement(gender),
        education: faker.helpers.arrayElement(education),
        employment: faker.helpers.arrayElement(employment),
        marital: faker.helpers.arrayElement(marital),
        children: faker.helpers.arrayElement(children),
        sector: faker.helpers.arrayElement(sector),
        duration: faker.helpers.arrayElement(duration),
        income: faker.helpers.arrayElement(income),
        loan: faker.helpers.arrayElement(loan),
        relationship: faker.helpers.arrayElement(relationship),
        guarantor_name: faker.person.fullName(),
        residence: faker.helpers.arrayElement(residence)

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
