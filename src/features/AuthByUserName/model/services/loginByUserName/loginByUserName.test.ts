import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/config/tests/TestAsyncThunk/TestAsyncThunk";
import { loginByUserName } from "./loginByUserName";

describe("loginByUserName", () => {
  it("success login", async () => {
    const userValue = { username: "user", id: "1" };
    const thunk = new TestAsyncThunk(loginByUserName);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const result = await thunk.callThunk({ username: "user", password: "123" });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userValue);
  });
  it("fail login", async () => {
    const thunk = new TestAsyncThunk(loginByUserName);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({ username: "user", password: "123" });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("wrong_auth");
  });
});
