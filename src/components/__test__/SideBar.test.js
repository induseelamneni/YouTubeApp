import {render ,screen} from "@testing-library/react"
import SideBar from "../SideBar"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import store from "../../utils/store"
import "@testing-library/jest-dom"

test("render Side bar", () => {
    render(
    <BrowserRouter>
    <Provider store={store}>
    <SideBar/>
    </Provider>
    </BrowserRouter>
    )

    const heading = screen.getByRole("heading", {name:"Side Bar"})
    expect(heading).toBeInTheDocument()
})