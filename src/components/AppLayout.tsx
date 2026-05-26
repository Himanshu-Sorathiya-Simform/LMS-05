import Header from "./Header.tsx";
import ListContainer from "./ListContainer.tsx";

function AppLayout() {
	return (
		<section className="h-screen w-screen flex bg-white items-center justify-center">
			<div className="flex flex-col items-center">
				<Header />

				<ListContainer />
			</div>
		</section>
	);
}

export default AppLayout;
