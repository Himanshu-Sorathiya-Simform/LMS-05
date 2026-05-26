import Header from "./Header.tsx";
import ListContainer from "./ListContainer.tsx";

function AppLayout() {
	return (
		<section className="h-screen w-screen flex bg-white items-center justify-center">
			<Header />

			<ListContainer />
		</section>
	);
}

export default AppLayout;
