import Today from "./Today.tsx";
import Button from "./ui/Button.tsx";
import Icon from "./ui/Icon.tsx";

function Header() {
	return (
		<header className="flex flex-col items-start gap-7 self-start">
			<h1 className="font-sans text-3xl font-semibold">To-Do</h1>

			<Today />

			<div className="flex gap-2">
				<Button
					className="gap-1 rounded-full bg-blue-600 px-4 py-2 font-semibold text-white transition duration-100 hover:bg-blue-700 focus:bg-blue-700 focus:outline-1 focus:outline-blue-700"
					handler={() => {}}
				>
					<Icon
						id="create"
						className="h-6 w-6 text-white"
					/>

					<span>Add new task</span>
				</Button>
			</div>
		</header>
	);
}

export default Header;
