import logo from "../../assets/logo.svg"
import TextField, { Input } from "@material/react-text-field/dist/index";
import React from "react";
import { useState } from "react";
import { Container } from "./styles";
import { Search } from "./styles";

const Home = () => {
    const [inputValue, setInputValue] = useState('')

    return(
        <Container>
            <Search>
                <img src={logo} alt="Logo_do_Restaurante" />
                <TextField
                label='Search'
                outlined
                // onTrailingIconSelect={() => this.setState({value: ''})}
                //   trailingIcon={<MaterialIcon role="button" icon="delete"/>}
                >
                    <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                </TextField>
            </Search>
        </Container>
    )
}
export default Home