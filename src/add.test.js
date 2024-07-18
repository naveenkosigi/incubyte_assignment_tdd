import { add } from "./Input";

describe('add Method Test Cases',() => {
    test('Testing if empty',() => {
        expect(add("")).toBe(0);
    })
})