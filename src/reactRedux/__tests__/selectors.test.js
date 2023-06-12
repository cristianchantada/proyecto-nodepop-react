import { getReduxAdvertID, getReduxAdverts } from "../selectors";

describe("Testing React Redux selectors", () => {
	const advertObj1 = {
		id: 1,
		name: "advert 1"
	};
	const advertObj2 = {
		id: 2,
		name: "advert 2"
	};

	const objectsArray = [advertObj1, advertObj2];

	const state = {
		auth: false,
		adverts: {
			areLoaded: false,
			data: objectsArray
		}
	};
	describe('"getReduxAdverts" selector test', () => {
		it("should return an array with advert objects", () => {
			expect(getReduxAdverts(state)).toEqual(objectsArray);
		});
	});

	describe('"getReduxAdvertID" selector test', () => {
		it("should return the advert object with the specify id", () => {
			expect(getReduxAdvertID(1)(state)).toEqual(advertObj1);
		});
	});
});
