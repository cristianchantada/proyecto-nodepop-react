import { authLogin, userInterfaceResetError } from "../../reactRedux/actions";
import { fireEvent, render, screen } from "@testing-library/react";
import { getUserInterface } from "../../reactRedux/selectors";
import { defaultState } from "../../reactRedux/reducer";
import { MemoryRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import { Provider } from "react-redux";

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

	const renderComponent = (error = null) => {
		return render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);
	};

	it("LoginPage snapshot", () => {
		const { container } = renderComponent();
		expect(container).toMatchSnapshot();
	});

	it("should dispatch authLogin action", () => {
		const email = "lamia@email.com";
		const password = "1234";

		renderComponent();

		const usernameInput = screen.getByPlaceholderText("username");
		const passwordInput = screen.getByPlaceholderText("password");
		const checkboxInput = screen.getByRole("checkbox");
		const submitButton = screen.getByRole("button");

		fireEvent.change(usernameInput, { target: { value: email } });
		fireEvent.change(passwordInput, { target: { value: password } });
		fireEvent.click(checkboxInput);
		fireEvent.click(submitButton);

		expect(authLogin).toHaveBeenCalledWith({ email, password }, true);
	});

	it("should close error element when user click on it", () => {
		const store = {
			getState: () => {
				const state = defaultState;
				state.userInterface = getUserInterface(state);
				state.userInterface.error = "error";
				return state;
			},
			subscribe: jest.fn(),
			dispatch: () => {}
		};

		const renderComponent = () => {
			return render(
				<Provider store={store}>
					<MemoryRouter>
						<LoginPage />
					</MemoryRouter>
				</Provider>
			);
		};

		renderComponent();

		const closeErrorElement = screen.getByText("X");
		fireEvent.click(closeErrorElement);
		expect(userInterfaceResetError).toHaveBeenCalled();
	});
});
