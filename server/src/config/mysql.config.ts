import dotenv from 'dotenv';

dotenv.config();

const sqlConfig = {
    host: '127.0.0.1',
    user: 'admin',
    password: process.env.MYSQLPASSWORD,
    database: 'soccer_team'
};

export default sqlConfig;