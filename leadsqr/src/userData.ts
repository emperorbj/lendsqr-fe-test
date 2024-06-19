// src/generateUsers.ts
import { faker } from '@faker-js/faker';

interface User {
    id: number;
    organization: string;
    username: string;
    firstName: string;
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
    guarantor_second: string;
    guarantor_number: string;
    second_guarantor_number: string;
    special_id: string;
    bvn_number: string;
    banks: string;
    account_number: string;
    mailExtension: string;
}

const organizations = ["leadsqr", "leadway", "paystack", "meta"];
const statuses = ["blacklisted", "active", "inactive", "pending"];
const gender = ["Male", "Female"];
const education = ["B.Sc", "M.Sc", "Ph.D"];
const employment = ["Employed", "Unemployed", "Self Employed"];
const marital = ["Single", "Married", "Divorced"];
const children = ["One", "Two", "Three", "Four","Five", "Six", "Seven"];
const sector = ["Education", "Fintech", "Petroleum", "Agricultural"];
const duration = ["2", "4", "6"];
const income = ["200,000", "400,000", "300,000", "1000,000", "300,000"];
const loan = ["2,000", "3,300", "40,000", "3,000", "50,000", "900,000"];
const relationship = ["Boss", "Pastor", "Sibling"];
const residence = ["Flat", "Duplex", "Cottage", "Cabin"];
const banks = ["First Bank", "Zenith Bank", "UBA Bank", "Access Bank", "GT Bank", "Polaris Bank"];
const mailExtension = ["@gmail.com", "@yahoo.com", "rocketmail.com"]


const generateUser = (id: number): User => {
    return {
        id,
        organization: faker.helpers.arrayElement(organizations),
        username: faker.person.fullName(),
        firstName: faker.person.firstName(),
        mailExtension: faker.helpers.arrayElement(mailExtension),
        phone_number:  `08${faker.string.numeric(9)}`,
        bvn_number:  `21${faker.string.numeric(5)}`,
        account_number: `310${faker.string.numeric(10)}`,
        banks: faker.helpers.arrayElement(banks),
        guarantor_number:  `09${faker.string.numeric(9)}`,
        second_guarantor_number:  `07${faker.string.numeric(9)}`,
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
        guarantor_second: faker.person.fullName(),
        residence: faker.helpers.arrayElement(residence),
        special_id: faker.internet.password()

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
