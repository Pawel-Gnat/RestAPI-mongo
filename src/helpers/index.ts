import crypto from 'crypto'
require('dotenv').config()

const SECRET = `${process.env.DATABASE_SECRET}`

export const random = () => crypto.randomBytes(128).toString('base64')
export const authentication = (salt: string, password: string): string => {
	return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex')
}
