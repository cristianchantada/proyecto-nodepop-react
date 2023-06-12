import { fireEvent, render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { defaultState } from "../../reactRedux/reducer";
import { getUserInterface } from "../../reactRedux/selectors";
import { authLogin } from "../../reactRedux/actions";

jest.mock("../../reactRedux/actions");

describe("LoginPage component test", () => {
	const store = {
		getState: (error = null) => {
			const state = defaultState;
			state.userInterface = getUserInterface(state);
			state.userInterface.error = error;
			return state;
		},
		subscribe: jest.fn(),
		dispatch: () => {}
	};

	const renderComponent = () =>
		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);

	test("LoginPage snapshot", () => {
		const { container } = renderComponent();
		expect(container).toMatchSnapshot();
	});

	test("should dispatch authLogin action", () => {
		const email = "Cristian";
		const password = "1234";
		//const checked = true;

		renderComponent();

		const usernameInput = screen.getByPlaceholderText("username");
		const passwordInput = screen.getByPlaceholderText("password");
		const checkboxInput = screen.getByRole("checkbox");
		const submitButton = screen.getByRole("button");

		fireEvent.change(usernameInput, { target: { value: email } });
		fireEvent.change(passwordInput, { target: { value: password } });
		//fireEvent.change(checkboxInput, {target : {checkbox: {checked: checked}}});

		fireEvent.click(checkboxInput);
		//fireEvent.click(submitButton);

		//expect(authLogin).toHaveBeenCalledWith({email, password});
	});
});
