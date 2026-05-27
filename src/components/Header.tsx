import Button from "./Button.tsx";
import Icon from "./Icon.tsx";
import Input from "./Input.tsx";
import Today from "./Today.tsx";

function Header() {
	return (
		<header className="flex flex-col items-center gap-7">
			<Today />

			<div className="flex gap-2">
				<Input />

				<Button handler={() => {}}>
					<Icon
						id="create"
						className="h-7 w-7 text-white"
					/>
				</Button>
			</div>
		</header>
	);
}

export default Header;
