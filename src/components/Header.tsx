import Button from "./Button.tsx";
import Input from "./Input.tsx";

function Header() {
	return (
		<header className="flex gap-2">
			<Input />

			<Button handler={() => {}}>Add</Button>
		</header>
	);
}

export default Header;
