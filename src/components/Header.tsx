import Button from "./Button.tsx";
import Icon from "./Icon.tsx";
import Input from "./Input.tsx";

function Header() {
	return (
		<header className="flex gap-2">
			<Input />

			<Button handler={() => {}}>
				<Icon
					id="create"
					className="h-7 w-7 text-white"
				/>
			</Button>
		</header>
	);
}

export default Header;
