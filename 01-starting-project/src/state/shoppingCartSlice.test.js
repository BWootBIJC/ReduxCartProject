import {shoppingCartSlice} from "./shoppingCartSlice";
import {store} from "./store";

describe("Shopping Cart State Slice", () => {
    beforeEach(() => {
        // TODO: Finish modifying this test to work
        const modifiedInitialState = { ...shoppingInitialState, isCartVisible: false };
        store.replaceReducer(shoppingCartSlice.reducer);
        store.dispatch(createAsyncThunk('init', async () => {}, {
            prepare: () => modifiedInitialState,
            dispatch: (state, action) => {
                store.dispatch(action);
            },
        }));
    })
        it("on toggle(), toggles cart visibility state", () => {
            store.dispatch(shoppingCartSlice.actions.toggle());
            const newState = store.getState();
            expect(newState.shoppingCart.isCartVisible).toEqual(true);
        });
        describe("addItemToCart", () => {
            it("only increases the quantity and total price if the item is already existing", () => {
                store.dispatch(shoppingCartSlice.actions.addItemToCart())
            })
        })
});