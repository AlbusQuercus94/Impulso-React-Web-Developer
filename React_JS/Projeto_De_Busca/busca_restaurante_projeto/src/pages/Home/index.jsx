import logo from "../../assets/logo.svg"
import TextField, { Input } from "@material/react-text-field/dist/index";
import MaterialIcon from "@material/react-material-icon/dist/index";
import React from "react";
import { useState } from "react";
import * as Style from "./styles";

const Home = () => {
    const [inputValue, setInputValue] = useState('')

    return(
        <Style.Wrapper>
            <Style.Container>
                <Style.Search>
                    <Style.Logo src={logo} alt="Logo_do_Restaurante" />
                    <TextField
                    label='Search'
                    outlined
                    // onTrailingIconSelect={() => this.setState({value: ''})}
                    trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    >
                        <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                </Style.Search>
            </Style.Container>
            <Style.Map/>
        </Style.Wrapper>
    )
}
export default Home