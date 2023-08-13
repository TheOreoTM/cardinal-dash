import secure from '@util/secure';
import { GetServerSidePropsContext } from 'next';

export default function Dashboard() {
	return <div>Fag</div>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	return secure(context, ({ session }) => {
		return {
			props: { session },
		};
	});
}
