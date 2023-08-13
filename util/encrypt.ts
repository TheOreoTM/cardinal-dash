import { createHash } from 'crypto';

const secretKey = process.env.NEXTAUTH_SECRET;

export default (value: string): string => {
	const hash = createHash('sha256');
	hash.update(value + secretKey);
	return hash.digest('hex');
};
