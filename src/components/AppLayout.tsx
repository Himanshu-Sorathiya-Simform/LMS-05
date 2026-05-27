import Header from "./Header.tsx";
import ListContainer from "./ListContainer.tsx";

function AppLayout() {
	return (
		<section className="h-screen w-screen max-w-3xl mx-auto p-6 flex bg-white items-center justify-center">
			<div className="flex flex-col items-center gap-8 p-2">
				<Header />

				<ListContainer />
			</div>
		</section>
	);
}

export default AppLayout;
