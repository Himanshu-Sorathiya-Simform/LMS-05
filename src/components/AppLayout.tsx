import Header from "./Header.tsx";
import ListContainer from "./ListContainer.tsx";

function AppLayout() {
	return (
		<section className="mx-auto flex h-screen w-screen max-w-3xl items-center justify-center bg-white p-6">
			<div className="flex flex-col items-center gap-8 p-2">
				<Header />

				<ListContainer />
			</div>
		</section>
	);
}

export default AppLayout;
