import Header from "../Header.tsx";
import ListContainer from "../ListContainer.tsx";

function AppLayout() {
	return (
		<section className="flex h-screen w-screen items-center justify-center bg-white p-6">
			<div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
				<Header />

				<ListContainer />
			</div>
		</section>
	);
}

export default AppLayout;
