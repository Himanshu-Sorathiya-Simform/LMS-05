import Button from "./Button.tsx";
import Icon from "./Icon.tsx";
import Today from "./Today.tsx";

function Header() {
	return (
		<header className="flex flex-col items-start self-start gap-7">
			<h1 className="text-3xl font-sans font-semibold ">To-Do</h1>

			<Today />

			<div className="flex gap-2">
				<Button
					className="font-semibold gap-1 rounded-full px-4 py-2  hover:bg-blue-700 focus:outline-1 focus:bg-blue-700 focus:outline-blue-700 transition duration-100 bg-blue-600 text-white "
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
