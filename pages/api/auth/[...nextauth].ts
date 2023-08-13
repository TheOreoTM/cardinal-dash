import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

export default NextAuth({
	providers: [
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID!,
			clientSecret: process.env.DISCORD_CLIENT_SECRET!,
			authorization: {
				params: {
					scope: 'identify guilds email',
				},
			},
		}),
	],

	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				// console.log(token, '<== TOKEN', account, '<== ACCOUNT');
				token.picture = account.access_token;
			}

			return token;
		},
		async session({ session, token }) {
			// console.log(session, '<== SESSION', token, '<== TOKEN');
			session.user!.image = token.picture;
			return session;
		},
	},
});
